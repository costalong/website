---
title: Ubuntu使用containerd安装k8s
icon: creative
category:
  - K8S
---

## 1. 准备包环境

### 1.1 更新 apt 包索引

```bash
sudo apt update
```

### 1.2 同步时间

* 打开终端输入以下命令安装ntpdate工具

```sh
sudo apt-get install ntpdate -y
```

* 输入命令设置系统时间与网络时间同步
  
```sh
sudo ntpdate cn.pool.ntp.org
```

* 最后输入命令将时间更新到硬件上即可

```sh
sudo hwclock --systohc
```

### 1.3 关闭selinux及nfs

```sh
# 关闭selinux
sed -i 's/SELINUX=enforcing/SELINUX=disabled/g' /etc/selinux/config

# 关闭nfs
sudo systemctl stop ufw
sudo systemctl status ufw
sudo systemctl disable ufw
```

### 1.4 关闭Swap

Kubernetes 1.8开始要求关闭系统的Swap，如果不关闭，默认配置下kubelet将无法启动。 关闭系统的Swap方法如下:

```sh
# 关闭swap
sudo swapoff -a

# 注释swap挂载
vim /etc/fstab
```

使用 `free -m` 查看是否已经关闭

```sh
free -m
```

### 1.5 设置内核参数

```sh
vim /etc/sysctl.d/99-kubernetes-cri.conf

# 修改 swappiness 参数
vm.swappiness = 0
# 开启内核ipv4转发
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
net.ipv4.ip_forward = 1
user.max_user_namespaces=28633

```

执行下面命令生效：

```sh
sysctl -p /etc/sysctl.d/99-kubernetes-cri.conf
```

### 1.6 配置支持IPVS

安装ipvsadm，加载ipvs模块

```sh
# 安装ipvsadm
sudo apt-get install ipvsadm -y

cat > /etc/modules-load.d/ipvs.conf << EOF
ip_vs
ip_vs_rr
ip_vs_wrr
ip_vs_sh
nf_conntrack
EOF
```

加载模块，并进行检查

```sh
modprobe --all ip_vs ip_vs_rr ip_vs_wrr  ip_vs_sh  nf_conntrack

lsmod|grep -e ip_vs -e nf_conntrack
```

## 2. 安装 containerd

### 2.1 使用二进制安装

#### 2.1.1 下载二进制文件

分别把 containerd、runc、cni-plugins、nerdctl 二进制下载到本地，才开始配置:

```bash
# 设置下载的版本
export CONTAINERD_VERSION=1.7.20
export RUNC_VERSION=1.1.12
export CNI_VERSION=1.5.1
export NERDCTL_VERSION=1.7.6
export CRICTL_VERSION=1.30.1

# 下载二进制文件

echo "--------------install containerd--------------"
wget https://github.com/containerd/containerd/releases/download/v${CONTAINERD_VERSION}/containerd-${CONTAINERD_VERSION}-linux-amd64.tar.gz

echo "--------------install runc--------------"
wget https://github.com/opencontainers/runc/releases/download/v${RUNC_VERSION}/runc.amd64

echo "--------------install cni plugins--------------"
wget https://github.com/containernetworking/plugins/releases/download/v${CNI_VERSION}/cni-plugins-linux-amd64-v${CNI_VERSION}.tgz

echo "--------------install nerdctl--------------"
wget https://github.com/containerd/nerdctl/releases/download/v${NERDCTL_VERSION}/nerdctl-${NERDCTL_VERSION}-linux-amd64.tar.gz


echo "--------------install crictl--------------"
wget https://github.com/kubernetes-sigs/cri-tools/releases/download/v${CRICTL_VERSION}/crictl-v${CRICTL_VERSION}-linux-amd64.tar.gz

# 解压二进制文件并且配置
echo "--------------unzip containerd--------------"
tar Cxzvf /usr/local containerd-${CONTAINERD_VERSION}-linux-amd64.tar.gz

echo "--------------配置 containerd service--------------"
local service_path=/etc/systemd/system/containerd.service

cat <<EOF | tee ${service_path} 
# Copyright The containerd Authors.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

[Unit]
Description=containerd container runtime
Documentation=https://containerd.io
After=network.target local-fs.target

[Service]
ExecStartPre=-/sbin/modprobe overlay
ExecStart=/usr/local/bin/containerd

Type=notify
Delegate=yes
KillMode=process
Restart=always
RestartSec=5
# Having non-zero Limit*s causes performance problems due to accounting overhead
# in the kernel. We recommend using cgroups to do container-local accounting.
LimitNPROC=infinity
LimitCORE=infinity
LimitNOFILE=infinity
# Comment TasksMax if your systemd version does not supports it.
# Only systemd 226 and above support this version.
TasksMax=infinity
OOMScoreAdjust=-999

[Install]
WantedBy=multi-user.target
EOF

mkdir -p /etc/containerd
containerd config default > /etc/containerd/config.toml

sed -i 's/SystemdCgroup = false/SystemdCgroup = true/' /etc/containerd/config.toml

sed -i "s|sandbox_image = \"registry.k8s.io/pause:3.8\"|sandbox_image = \"registry.aliyuncs.com/google_containers/pause:3.9\"|" /etc/containerd/config.toml

sed -i '/\[plugins\."io.containerd.grpc.v1.cri"\.registry\.mirrors\]/a \ \ \ \ \ \ \ \ [plugins."io.containerd.grpc.v1.cri".registry.mirrors."docker.io"]\n \ \ \ \ \ \  \ \ endpoint = ["https://hub-mirror.c.163.com"]' /etc/containerd/config.toml
    

echo "--------------install runc--------------"
chmod +x runc.amd64
mv runc.amd64 /usr/local/bin/runc


echo "--------------install cni plugins--------------"
mkdir -p /opt/cni/bin
tar Cxfzv /opt/cni/bin cni-plugins-linux-amd64-v${CNI_VERSION}.tgz


echo "--------------install nerdctl--------------"
tar Cxfzv /usr/local nerdctl-${NERDCTL_VERSION}-linux-amd64.tar.gz


echo "--------------install crictl--------------"
tar Cxfzv /usr/local crictl-v${CRICTL_VERSION}-linux-amd64.tar.gz


echo "--------------配置 crictl service--------------"


cat > /etc/crictl.yaml << \EOF
runtime-endpoint: unix:///run/containerd/containerd.sock
image-endpoint: unix:///run/containerd/containerd.sock
timeout: 0
debug: true
pull-image-on-create: true
disable-pull-on-run: false
EOF


# 启动containerd服务
systemctl daemon-reload
systemctl enable contaienrd
systemctl restart contaienrd

```

## 2. 安装k8s

使用kubeadm部署k8s集群，参考文档：https://kubernetes.io/zh/docs/setup/production-environment/tools/kubeadm/install-kubeadm/

```bash
# 1. 安装kubeadm
apt-get update && apt-get install -y apt-transport-https curl
curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | apt-key add -
cat <<EOF >/etc/apt/sources.list.d/kubernetes.list
deb https://apt.kubernetes.io/ kubernetes-xenial main
EOF
apt-get update
apt-get install -y kubelet kubeadm kubectl
apt-mark hold kubelet kubeadm kubectl

sudo systemctl enable kubelet && sudo systemctl start kubelet
```

配置 kubeadm 及 kubectl 自动补全功能：

```bash
echo "source <(kubectl completion bash)" >>~/.bashrc
echo "alias k=kubectl" >>~/.bashrc
echo "complete -F __start_kubectl k" >>~/.bashrc
source ~/.bashrc
```

### 生成配置文件：

```bash
kubeadm config print init-defaults > kubeadm-config.yaml
```

### 修配置文件：

```yaml
vim kubeadm-init.yml

apiVersion: kubeadm.k8s.io/v1beta3
bootstrapTokens:
- groups:
  - system:bootstrappers:kubeadm:default-node-token
  token: abcdef.0123456789abcdef
  ttl: 0s	#修改token过期时间为无限制
  usages:
  - signing
  - authentication
kind: InitConfiguration
localAPIEndpoint:
  advertiseAddress: 192.168.199.101	#修改为k8s-master节点IP
  bindPort: 6443
nodeRegistration:
  criSocket: unix:///var/run/containerd/containerd.sock
  imagePullPolicy: IfNotPresent
  taints:
  - effect: PreferNoSchedule
    key: node-role.kubernetes.io/master
---
apiServer:
  timeoutForControlPlane: 4m0s
apiVersion: kubeadm.k8s.io/v1beta3
certificatesDir: /etc/kubernetes/pki
clusterName: kubernetes
controllerManager: {}
dns: {}
etcd:
  local:
    dataDir: /var/lib/etcd
imageRepository: registry.aliyuncs.com/google_containers	#替换为国内的镜像仓库
kind: ClusterConfiguration
kubernetesVersion: 1.26.0
networking:
  dnsDomain: cluster.local
  serviceSubnet: 10.96.0.0/12
  podSubnet: 10.244.0.0/16	#为pod网络指定网络段
---
#申明cgroup用 systemd
apiVersion: kubelet.config.k8s.io/v1beta1
kind: KubeletConfiguration
cgroupDriver: systemd
failSwapOn: false
---
#启用ipvs
apiVersion: kubeproxy.config.k8s.io/v1alpha1
kind: KubeProxyConfiguration
mode: ipvs
```

### 初始化集群:

```bash
kubeadm init --config=kubeadm-config.yaml
```

### 下载镜像

```sh
kubeadm config images list --config=kubeadm-init.yml
```

注意：再次确认 `registry.aliyuncs.com/google_containers/pause:3.9` 就是上面 `/etc/containerd/config.toml` 中所需要填写正确的 pause镜像及版本号。

```sh
sandbox_image = "registry.aliyuncs.com/google_containers/pause:3.9"
```

```sh
# 下载镜像
kubeadm config images pull --config=kubeadm-init.yml
```

### kubeadm初始化集群

```sh
#执行初始化并将日志记录到 kubeadm-init.log 日志文件中
kubeadm init --config=kubeadm-init.yml | tee kubeadm-init.log

[init] Using Kubernetes version: v1.28.0
[preflight] Running pre-flight checks
[preflight] Pulling images required for setting up a Kubernetes cluster
[preflight] This might take a minute or two, depending on the speed of your internet connection
[preflight] You can also perform this action in beforehand using 'kubeadm config images pull'
[certs] Using certificateDir folder "/etc/kubernetes/pki"
[certs] Generating "ca" certificate and key
[certs] Generating "apiserver" certificate and key
[certs] apiserver serving cert is signed for DNS names [kubernetes kubernetes.default kubernetes.default.svc kubernetes.default.svc.cluster.local node] and IPs [10.96.0.1 10.0.12.8]
[certs] Generating "apiserver-kubelet-client" certificate and key
[certs] Generating "front-proxy-ca" certificate and key
[certs] Generating "front-proxy-client" certificate and key
[certs] Generating "etcd/ca" certificate and key
[certs] Generating "etcd/server" certificate and key
[certs] etcd/server serving cert is signed for DNS names [localhost node] and IPs [10.0.12.8 127.0.0.1 ::1]
[certs] Generating "etcd/peer" certificate and key
[certs] etcd/peer serving cert is signed for DNS names [localhost node] and IPs [10.0.12.8 127.0.0.1 ::1]
[certs] Generating "etcd/healthcheck-client" certificate and key
[certs] Generating "apiserver-etcd-client" certificate and key
[certs] Generating "sa" key and public key
[kubeconfig] Using kubeconfig folder "/etc/kubernetes"
[kubeconfig] Writing "admin.conf" kubeconfig file
[kubeconfig] Writing "kubelet.conf" kubeconfig file
[kubeconfig] Writing "controller-manager.conf" kubeconfig file
[kubeconfig] Writing "scheduler.conf" kubeconfig file
[etcd] Creating static Pod manifest for local etcd in "/etc/kubernetes/manifests"
[control-plane] Using manifest folder "/etc/kubernetes/manifests"
[control-plane] Creating static Pod manifest for "kube-apiserver"
[control-plane] Creating static Pod manifest for "kube-controller-manager"
[control-plane] Creating static Pod manifest for "kube-scheduler"
[kubelet-start] Writing kubelet environment file with flags to file "/var/lib/kubelet/kubeadm-flags.env"
[kubelet-start] Writing kubelet configuration to file "/var/lib/kubelet/config.yaml"
[kubelet-start] Starting the kubelet
[wait-control-plane] Waiting for the kubelet to boot up the control plane as static Pods from directory "/etc/kubernetes/manifests". This can take up to 4m0s
[apiclient] All control plane components are healthy after 4.502579 seconds
[upload-config] Storing the configuration used in ConfigMap "kubeadm-config" in the "kube-system" Namespace
[kubelet] Creating a ConfigMap "kubelet-config" in namespace kube-system with the configuration for the kubelets in the cluster
[upload-certs] Skipping phase. Please see --upload-certs
[mark-control-plane] Marking the node node as control-plane by adding the labels: [node-role.kubernetes.io/control-plane node.kubernetes.io/exclude-from-external-load-balancers]
[mark-control-plane] Marking the node node as control-plane by adding the taints [node-role.kubernetes.io/control-plane:NoSchedule]
[bootstrap-token] Using token: abcdef.0123456789abcdef
[bootstrap-token] Configuring bootstrap tokens, cluster-info ConfigMap, RBAC Roles
[bootstrap-token] Configured RBAC rules to allow Node Bootstrap tokens to get nodes
[bootstrap-token] Configured RBAC rules to allow Node Bootstrap tokens to post CSRs in order for nodes to get long term certificate credentials
[bootstrap-token] Configured RBAC rules to allow the csrapprover controller automatically approve CSRs from a Node Bootstrap Token
[bootstrap-token] Configured RBAC rules to allow certificate rotation for all node client certificates in the cluster
[bootstrap-token] Creating the "cluster-info" ConfigMap in the "kube-public" namespace
[kubelet-finalize] Updating "/etc/kubernetes/kubelet.conf" to point to a rotatable kubelet client certificate and key
[addons] Applied essential addon: CoreDNS
[addons] Applied essential addon: kube-proxy

Your Kubernetes control-plane has initialized successfully!

To start using your cluster, you need to run the following as a regular user:

  mkdir -p $HOME/.kube
  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
  sudo chown $(id -u):$(id -g) $HOME/.kube/config

Alternatively, if you are the root user, you can run:

  export KUBECONFIG=/etc/kubernetes/admin.conf

You should now deploy a pod network to the cluster.
Run "kubectl apply -f [podnetwork].yaml" with one of the options listed at:
  https://kubernetes.io/docs/concepts/cluster-administration/addons/

Then you can join any number of worker nodes by running the following on each as root:

kubeadm join 10.0.12.8:6443 --token abcdef.0123456789abcdef \
 --discovery-token-ca-cert-hash sha256:e7600c160a03f29329eda80b7e307ddb39a7714a8ec2f55aa36d08b1cc558996 
```

解释下上面的日志输出内容，看行首 [] 括起来的内容。

* [init] ：开始初始化集群，动作声明；

* [preflight] ：开始初始化之前的检查工作；

* [certs] ：生成相关的各种证书

* [kubeconfig] ：生成相关的kubeconfig文件

* [kubelet-start]： 生成kubelet的配置文件"/var/lib/kubelet/config.yaml"

* [control-plane] ：使用/etc/kubernetes/manifests目录中的yaml文件创建apiserver、controller-manager、scheduler的静态pod，也称为控制平面

* [bootstrap-token]：生成token记录下来，后边使用kubeadm join往集群中添加节点时会用到

* [addons]： 安装基本插件:CoreDNS, kube-proxy

注意： 如果执行 kubeadm init --config=kubeadm-init.yml 时，需要重置

```sh
sudo kubeadm reset
```

### 问题排查

一般排查的错误的命令使用如下命令：

* 查询系统错误
  
```sh
journalctl -fu kubelet
```

* 查看 kubelet 的状态

```sh
sudo systemctl status kubelet
```

* 查看容器的日志
  
```sh
## 查看 pdo
sudo crictl pod
## POD 的日志
sudo crictl logs <POD ID>
```

* 查看节点的错误
  
```sh
kubectl describe node node -n kube-system | grep -A 20 "Conditions"  
```

修改配置文件后，重新执行 kubeadm init --config=kubeadm-init.yml

### 配置kubectl

```sh
mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config
```

### 部署网络插件

安装 calico.yaml

```sh
kubectl apply -f https://docs.projectcalico.org/manifests/calico.yaml
```

或者安装 flannel.yaml

```sh
kubectl apply -f https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml
```

### 添加节点

```sh
kubeadm join 10.0.12.8:6443 --token abcdef.0123456789abcdef \
  --discovery-token-ca-cert-hash sha256:e7600c160a03f29329eda80b7e307ddb39a7714a8ec2f55aa36d08b1cc558996 
```

### 查看集群状态

```sh
kubectl get nodes
```

## 参考

* [containerd](https://github.com/containerd/containerd)

* [kubernetes-containerd](https://kubernetes.io/docs/setup/production-environment/container-runtimes/#containerd)

* [Docker Hub 镜像加速器](https://gist.github.com/y0ngb1n/7e8f16af3242c7815e7ca2f0833d3ea6)
