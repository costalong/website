---
title: "golang 单元测试 goconvey"
icon: golang2
---

## goconvey 是什么

goconvey 是一个 golang 的单元测试框架，它提供了丰富的断言，可以方便的进行单元测试。
goconvey 的官网是 [http://goconvey.co/](http://goconvey.co/)，这里就不做介绍了。
这里主要介绍 goconvey 的使用方法。

## goconvey 的使用

### 安装

```bash
go get github.com/smartystreets/goconvey
```

### 使用

#### 1. 在项目根目录下创建 goconvey 的配置文件 goconvey.conf
```bash
# goconvey.conf
port = 8080
basepath = /goconvey
```

