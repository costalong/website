---
title: "golang 单元测试 gomock"
icon: golang
---
## 简介

GoMock是由Golang官方开发维护的测试框架，实现了较为完整的基于interface的Mock功能，能够与Golang内置的testing包良好集成，也能用于其它的测试环境中。GoMock测试框架包含了GoMock包和mockgen工具两部分，其中GoMock包完成对桩对象生命周期的管理，mockgen工具用来生成interface对应的Mock类源文件。

GoMock官网: [github](https://github.com/golang/mock)

## 安装使用

### 安装 mockgen
**Go version < 1.16**

```sh
GO111MODULE=on go get github.com/golang/mock/mockgen@v1.6.0
```

**Go 1.16+**

```sh
go install github.com/golang/mock/mockgen@v1.6.0
```

### mockgen辅助代码生成工具安装：

```sh
go get github.com/golang/mock/mockgen
```

## 参数说明

自定义mock实现主要包含了自定义参数，自定义返回值，自定义mock调用次数以及调用顺序

### （1）自定义参数

 参数支持Eq,Any,Not,Nil，分别代表一下含义：
 
    Eq(value) 用于参数为固定值的场景。
    Any() 用于任意参数的场景。
    Not(value) 用于表示参数非 value 以外的值场景。
    Nil()  用于表示参数None 值的场景

### （2）自定义返回值

返回值支持如下几种：

    Return 用于返回确定的值的场景
    Do 用于无返回值的场景。
    DoAndReturn 用于可以动态地控制返回值。

### （3）自定义mock调用次数
    mock调用次数支持如下几种场景：

    Times() 断言 Mock 方法被调用的次数, 指定次数。
    MaxTimes() 最大次数。
    MinTimes() 最小次数。
    AnyTimes() 任意次数（包括 0 次）

### （4）自定义mock调用顺序
当存在多个mock之间相互调用的情况时，可以通过一下2种方式定义mock执行的顺序：

    通过After关键字来实现保序
    通过InOrder关键字来实现保序




