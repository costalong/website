---
title: k8s 安装的常见的错误
icon: error
category:
  - K8S
---

## 1. master 一直处于 NotReady 状态

安装后查询 master 节点状态:

```bash
kubectl get nodes
```

如果 master 节点一直处于 NotReady 状态,请排查以下方法:

1. 检查 kubelet 的日志,查看是否有报错信息

```sh
journalctl -u kubelet
```

或查询 kubelet 状态，

```sh
systemctl status kubelet
```

2. 检查 查看 node 

```sh
 kubectl describe node node -n kube-system | grep -A 20 "Conditions"    
```

输出：

```bash
Conditions:
  Type             Status  LastHeartbeatTime                 LastTransitionTime                Reason                       Message
  ----             ------  -----------------                 ------------------                ------                       -------
  MemoryPressure   False   Wed, 07 Aug 2024 23:56:24 +0800   Mon, 05 Aug 2024 22:19:19 +0800   KubeletHasSufficientMemory   kubelet has sufficient memory available
  DiskPressure     False   Wed, 07 Aug 2024 23:56:24 +0800   Mon, 05 Aug 2024 22:19:19 +0800   KubeletHasNoDiskPressure     kubelet has no disk pressure
  PIDPressure      False   Wed, 07 Aug 2024 23:56:24 +0800   Mon, 05 Aug 2024 22:19:19 +0800   KubeletHasSufficientPID      kubelet has sufficient PID available
  Ready            False   Wed, 07 Aug 2024 23:56:24 +0800   Mon, 05 Aug 2024 22:19:19 +0800   KubeletNotReady              container runtime network not ready: NetworkReady=false reason:NetworkPluginNotReady message:Network plugin returns error: cni plugin not initialized
Addresses:
  InternalIP:  10.0.12.8
  Hostname:    node
Capacity:
  cpu:                4
  ephemeral-storage:  185653816Ki
  hugepages-1Gi:      0
  hugepages-2Mi:      0
  memory:             7607692Ki
  pods:               110
Allocatable:
  cpu:                4
  ephemeral-storage:  171098556543
  hugepages-1Gi:      0
```

如果出现错误信息：`NetworkReady=false reason:NetworkPluginNotReady message:Network plugin returns error: cni plugin not initialized`，请检

查网络插件是否安装成功。如果没有安装，安装网络插件（Flannel）。

安装命令

```sh
 kubectl apply -f https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml
```

注意：如果无法访问外网的情况，可以下载 flannel.yaml 文件，然后修改镜像地址，然后执行安装命令。[Docker Hub 镜像加速器](https://gist.github.com/y0ngb1n/7e8f16af3242c7815e7ca2f0833d3ea6)

如果无法安装成功，可以查看 kube-flannel 的日志，查看是否有报错信息

```sh
kubectl logs -n kube-system kube-flannel-ds-amd64-24495
```


## kubernets的报错：0/2 nodes are available: 1 node(s) had taint {env_role: }, that the pod didn't tolerate, 1 node(s) had taint {node-role.kubernetes.io/master: }, that the pod didn't tolerate

查看 pod 的状态

```sh
kubectl describe pod pod-name -n namespace
```
```sh
...
 Type     Reason            Age   From               Message
  ----     ------            ----  ----               -------
  Warning  FailedScheduling  39m   default-scheduler  0/2 nodes are available: 1 node(s) had taint {env_role: }, 
that the pod didn't tolerate, 1 node(s) had taint {node-role.kubernetes.io/master: }, that the pod didn't tolerate.
```

看看node是否被打污点了

```sh
kubectl describe node node01 |grep Taint

Taints:             env_role:NoSchedule
```

**污点值有三个**

- NoSchedule：一定不被调度
- PreferNoSchedule：尽量不被调度【也有被调度的几率】
- NoExecute：不会调度，并且还会驱逐Node已有Pod

去掉污点:

```sh
kubectl taint nodes node01 env_role-
```