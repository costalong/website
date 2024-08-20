---
title: gvm安装及go版本管理
category: golang
icon: "computer"
---

## 介绍

GVM是Go Version Manager的缩写，是一个用于管理Go语言版本的工具。通过GVM，我们可以轻松地安装、切换和卸载不同版本的Go语言。GVM会在用户的home目录下创建一个名为.gvm的隐藏文件夹，其中包含已安装的Go版本和相关的配置文件。

通过GVM安装Go的好处在于，不同的项目可能需要使用不同版本的Go语言进行开发，而GVM可以让我们方便地管理这些不同的版本，避免版本冲突等问题。同时，GVM也可以方便地升级和回退Go语言的版本。

## 安装

### Linux(ubuntu)

#### Step 1. 安裝相依套件

```sh
sudo apt-get install -y binutils bison gcc make 
```

#### Step 2. 安裝 gvm

安装命令

```sh
bash < <(curl -s -S -L https://raw.githubusercontent.com/moovweb/gvm/master/binscripts/gvm-installer)
# or
zsh < <(curl -s -S -L https://raw.githubusercontent.com/moovweb/gvm/master/binscripts/gvm-installer)

```

安装完成后，需要执行以下命令，使gvm生效

```sh
source /home/$(whoami)/.gvm/scripts/gvm 
```

#### Step 3.环境变量

```sh
vim ~/.zshrc
vim ~/.bash_profile
```

添加内容:

```sh
# 配置 Golang 软件包镜像
export GO111MODULE=on
export GOPROXY=https://goproxy.cn,direct
# 下载 Golang 的二进制文件或源码压缩包进行安装
export GO_BINARY_BASE_URL=https://mirrors.aliyun.com/golang/
# 根据软件的实际安装情况来选择性加载 gvm
[[ -s "$HOME/.gvm/scripts/gvm" ]] && source "$HOME/.gvm/scripts/gvm"
# 确保 Golang 使用源码编译安装时，不会出错（golang 1.14后需要 ）
export GOROOT_BOOTSTRAP=$GOROOT

```

```sh
# 生效配置
source ~/.zshrc
source ~/.bash_profile
```

> 官方国内镜像：<https://golang.google.cn/dl/>  
> 阿里云镜像：<https://mirrors.aliyun.com/golang/>  
> 中科大镜像：<http://mirrors.ustc.edu.cn/golang/>  

#### Step 4.先安装版本

1. 安装命令
  
```sh
gvm install go1.17.6
```

2. 查看已安装版本

```sh
gvm listall
```

3. 切换版本

```sh
gvm use go1.17.6 --default

```

使用 `--default` 选项，可以将当前版本设置为默认版本。

 
4. 查看当前版本

```sh
go version
```

#### 常用命令

```sh
# 查看可安装版本
gvm listall
# 查看已安装版本
gvm list
# 安装 Go 版本（1.4>版本，需要加上-B）
gvm install go1.21.2 -B
# 使用指定版本
gvm use go1.21.2
# 设置默认版本
gvm use go1.21.2 --default
# 卸载 Go 版本
gvm uninstall go1.21.2
# 要完全删除 gvm 以及所有已安装的 Go 版本和软件包
gvm implode
```

#### 安装完最新版，不需用到旧版本可以卸载

```sh
gvm uninstall go1.17.6
```


#### 查看 go 环境变量

```sh
go env
```

| 名称  |  说明 |
|---|---|
| CGO_ENABLED |指明cgo工具是否可用的标识。 |
| GOARCH | 程序构建环境的目标计算架构。 |
| GOBIN  | 存放可执行文件的目录的绝对路径。 |
| GOCHAR |程序构建环境的目标计算架构的单字符标识。 |
| GOEXE  | 可执行文件的后缀。 |
| GOHOSTARCH| 程序运行环境的目标计算架构。 |
| GOOS | 程序构建环境的目标操作系统。 |
| GOHOSTOS | 程序运行环境的目标操作系统。 |
| GOPATH | 工作区目录的绝对路径。 |
| GORACE | 用于数据竞争检测的相关选项。 |
| GOROOT | Go 语言的安装目录的绝对路径。 |
| GOTOOLDIR | Go 工具目录的绝对路径。 |

#### pkgset工具

```sh
# 查看当前go版本环境下的pkgset，默认global
gvm pkgset list
# 创建pkgset
gvm pkgset create example
# 切换/使用对应的pkgset，相对应的 GOPATH 也会改变
gvm pkgset use example

```

## 参考

- [github](https://github.com/moovweb/gvm)
