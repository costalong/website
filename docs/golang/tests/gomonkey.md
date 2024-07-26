---
title: "golang 单元测试 gomonkey"
icon: golang
---
## 简介

Gomonkey 是一个在 Go 语言中非常有用的测试工具库。

Gomonkey 的主要作用是用于在测试中动态地修改函数的行为。这使得测试能够更加灵活和全面，能够模拟各种不同的情况和边界条件。它提供了多种功能，包括方法、函数和全局变量的打桩（Stub），函数的 Monkey Patch，方法和函数调用的参数与返回值验证等。


## gomonkey支持的特性以及使用方法

* 支持为函数/ 接口打一个桩
* 支持为函数/ 接口打一个特定的桩序列
* 支持为成员方法打一个桩
* 支持为成员方法打一个特定的桩序列
* 支持为函数变量打一个桩
* 支持为函数变量打一个特定的桩序列
* 支持为全局变量打一个桩

| 方法  | 作用 | 函数使用说明 |
|---|---|---|
| ApplyFunc(target, double interface{}  | 为函数/ 接口打一个桩 | target表示函数名，第二个参数表示桩函数 |
| ApplyFuncSeq(target interface{}, outputs []OutputCell）   | target表示函数名，第二个参数表示桩序列参数（返回值需序列） |
| ApplyMethod(target reflect.Type, methodName string, double interface{}） | 为成员方法打一个桩 | target表示对象类型，对象的方法名，第三个参数表示桩函数|
| ApplyMethodSeq(target reflect.Type, methodName string, outputs []OutputCell）|为成员方法打一个特定的桩序列 | target表示对象类型，对象的方法名，第三个参数表示桩序列参数（返回值需序列）|
| ApplyFuncVar(target, double interface{}）| 为函数变量打一个桩 | target表示函数变量，第二个参数表示桩函数 |
| ApplyFuncVarSeq(target interface{}, outputs []OutputCell）|为函数变量打一个特定的桩序列 | target表示函数变量，第二个参数表示桩序列参数（返回值需序列） |
| ApplyGlobalVar(target, double interface{}) | 为全局变量打一个桩 | target表示函数变量，第二个参数表示桩函数 |
| Reset() | 删除桩 | |

## 使用

## 参考文档

[gomonkey调研文档和学习](https://blog.csdn.net/u013276277/article/details/104993370)
