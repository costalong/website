---
title: kubecm 使用
category:
  - K8S
---

## kubecm 使用

通过kubecm管理k8s多集群, 方便切换集群, 以及集群配置的统一管理。 

### 1.安装 kubecm

```bash
# 从 github 下载
VERSION=v0.27.1 # replace with the version you want, note the "v" prefix!
# linux x86_64
curl -Lo kubecm.tar.gz https://github.com/sunny0826/kubecm/releases/download/${VERSION}/kubecm_${VERSION}_Linux_x86_64.tar.gz
# macos
curl -Lo kubecm.tar.gz https://github.com/sunny0826/kubecm/releases/download/${VERSION}/kubecm_${VERSION}_Darwin_x86_64.tar.gz
# windows
curl -Lo kubecm.tar.gz https://github.com/sunny0826/kubecm/releases/download/${VERSION}/kubecm_${VERSION}_Windows_x86_64.tar.gz

# linux & macos
tar -zxvf kubecm.tar.gz kubecm
cd kubecm
sudo mv kubecm /usr/local/bin/

# windows
# Unzip kubecm.tar.gz
# Add the binary in to your $PATH

# curl -Lo kubecm.tar.gz https://github.com/sunny0826/kubecm/releases/download/v0.27.1/kubecm_v0.27.1_Linux_x86_64.tar.gz

```

### 2.配置 kubecm

添加 KubeConfig 到 `$HOME/.kube/config`

```bash
# 配置集群
# Merge test.yaml with $HOME/.kube/config
kubecm add -f test.yaml 
```

### 3.kubecm 使用

- 查看集群

```sh
kubecm list
```

- 切换集群
  
```sh
kubecm switch test
```

- 切换namespace

```sh
kubecm namespace  # 切换到默认的 namespace
```

- 重新命名
  
```sh
kubecm rename
```

更多的命令可以查看帮助

```sh
kubecm -h
```

### 文档

- [kubecm](https://kubecm.cloud/en-us/introduction)