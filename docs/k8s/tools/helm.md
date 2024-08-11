---
title: helm 使用
category:
  - K8S
---

## helm 使用

### 1.安装 helm

使用脚本安装

```bash
> curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3

> chmod 700 get_helm.sh
> ./get_helm.sh

```

如果想直接执行安装，运行curl

```bash
> curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash
```

## 参考文档：
- [docs](https://helm.sh/zh/docs/intro/install/)
