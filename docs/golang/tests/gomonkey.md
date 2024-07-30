---
title: "golang 单元测试 gomonkey"
icon: golang2
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

### 安装 gomonkey

```sh
go get github.com/agiledragon/gomonkey/v2@v2.11.0
```

### 例子

1. 为函数打桩

简单的例子，为函数 Sum 打桩，返回 2，nil


```go 
package demo_one

import (
	"encoding/json"
	"github.com/agiledragon/gomonkey/v2"
	. "github.com/smartystreets/goconvey/convey"
	"github.com/stretchr/testify/assert"
	"testing"
)

func Sum(a, b int) (int, error) {
	// do something in remote computer
	c := a + b
	return c, nil
}

func Compute(a, b int) (int, error) {
	sum, err := Sum(a, b)
	return sum, err
}

func ComputeTow(a, b, c int) (int, error) {
	sum, err := Sum(a, b)
	if err != nil {
		// do something
		return 0, err
	}

	rs, err := Compute(c, sum)
	if err != nil {
		return 0, err
	}
	return rs, nil
}

func TestCompute(t *testing.T) {
	patches := gomonkey.ApplyFunc(Sum, func(a, b int) (int, error) {
		return 2, nil
	})

	defer patches.Reset()
	sum, err := Compute(1, 1)
	assert.NoError(t, err)
	assert.Equal(t, 2, sum)
}

func TestComputeConvey(t *testing.T) {
	Convey("one func for success", t, func() {
		patches := gomonkey.ApplyFunc(Sum, func(a, b int) (int, error) {
			return 2, nil
		})

		defer patches.Reset()
		sum, err := Compute(1, 1)
		So(err, ShouldBeNil)
		So(sum, ShouldEqual, 2)
	})

	Convey("one func for fail", t, func() {
		patches := gomonkey.ApplyFunc(Sum, func(a, b int) (int, error) {
			return 2, nil
		})

		defer patches.Reset()
		sum, err := Compute(1, 2)
		So(err, ShouldBeNil)
		So(sum, ShouldEqual, 3)
	})

	Convey("two func for success", t, func() {
		patches := gomonkey.ApplyFunc(Sum, func(a, b int) (int, error) {
			return 6, nil
		})
		defer patches.Reset()
		patches.ApplyFunc(ComputeTow, func(a, b, c int) (int, error) {
			return 4, nil
		})

		sum, err := ComputeTow(1, 1, 2)
		So(err, ShouldBeNil)
		So(sum, ShouldEqual, 4)

	})

	Convey("input and output param", t, func() {
		patches := gomonkey.ApplyFunc(json.Unmarshal, func(data []byte, v interface{}) error {
			if data == nil {
				panic("input param is nil!")
			}
			p := v.(*map[int]int)
			*p = make(map[int]int)
			(*p)[1] = 2
			(*p)[2] = 4
			return nil
		})
		defer patches.Reset()
		var m map[int]int
		err := json.Unmarshal([]byte("123"), &m)

		So(err, ShouldEqual, nil)
		So(m[1], ShouldEqual, 2)

	})
}

```

### 为变量打桩

简单的例子，为变量 num 打桩，返回 150, 

```go
package demo_one

import (
	"github.com/agiledragon/gomonkey/v2"
	. "github.com/smartystreets/goconvey/convey"
	"testing"
)

var num = 10 //全局变量

func TestApplyGlobalVar(t *testing.T) {
	Convey("TestApplyGlobalVar", t, func() {

		// 测试将全局变量 num 修改为 150。
		Convey("change", func() {
			patches := gomonkey.ApplyGlobalVar(&num, 150)
			defer patches.Reset()
			So(num, ShouldEqual, 150)
		})
		// 测试将全局变量 num 恢复到原始值。
		Convey("recover", func() {
			So(num, ShouldEqual, 10)
		})
	})
}

```

### 成员方法打桩

```go
package demo_one

import (
	"fmt"
	"github.com/agiledragon/gomonkey/v2"
	"github.com/agiledragon/gomonkey/v2/test/fake"
	. "github.com/smartystreets/goconvey/convey"
	"testing"
)

type UserService struct {
}

func NewUserService() *UserService {
	return &UserService{}
}

func (s *UserService) GetUserById(id int) string {
	var res string
	if id == 1 {
		res = "1"
	} else {
		res = "2"
	}
	return res
}

func (s *UserService) Update(id int, data interface{}) (string, error) {
	str := s.GetUserById(id)
	return str, nil
}

type Etcd struct {
}

func (e *Etcd) Retrieve(url string) (string, error) {
	output := fmt.Sprintf("%s, %s!", "Hello", "Etcd")
	return output, nil
}

func TestApplyMethod_One(t *testing.T) {
	userSrv := NewUserService()

	patches := gomonkey.ApplyMethodReturn(userSrv, "GetUserById", "mock")
	defer patches.Reset()
	str := userSrv.GetUserById(222)
	fmt.Println(str)

}

func TestApplyMethod_Two(t *testing.T) {
	userSrv := NewUserService()
	Convey("TestApplyMethodReturn", t, func() {
		patches := gomonkey.ApplyMethodReturn(userSrv, "GetUserById", "mock")
		defer patches.Reset()
		str := userSrv.GetUserById(1)
		So(str, ShouldEqual, "mock")
	})
}

func TestApplyMethodReturn(t *testing.T) {
	e := &fake.Etcd{}
	Convey("TestApplyMethodReturn", t, func() {
		Convey("declares the values to be returned", func() {
			info1 := "hello cpp"
			patches := gomonkey.ApplyMethodReturn(e, "Retrieve", info1, nil)
			defer patches.Reset()
			for i := 0; i < 10; i++ {
				output1, err1 := e.Retrieve("")
				So(err1, ShouldEqual, nil)
				So(output1, ShouldEqual, info1)
			}

			patches.Reset() // if not reset will occur:patch has been existed
			info2 := "hello golang"
			patches.ApplyMethodReturn(e, "Retrieve", info2, nil)
			for i := 0; i < 10; i++ {
				output2, err2 := e.Retrieve("")
				So(err2, ShouldEqual, nil)
				So(output2, ShouldEqual, info2)
			}
		})
	})
}

```

## 注意

gomonkey，在 mac  M1 and M2 上，经常失败，需要使用
使用命令需要时加上 `-gcflags="all=-l -N"` 参数

如果是是goland 的idea，可以设置template 配置模板，如下：

1. 点击 Run -> Edit Configurations...里面可以添加运行配置，	
2. 编辑配置，选择go test，添加参数 `-gcflags="all=-l -N"`

![20240729235418](https://costa92.oss-cn-hangzhou.aliyuncs.com/Blog/20240729235418.png)

## 参考文档

[gomonkey调研文档和学习](https://blog.csdn.net/u013276277/article/details/104993370)

[xgo](https://github.com/xhd2015/xgo)

[gomonkey用户如何对泛型打桩](https://www.jianshu.com/p/8a52eae7f786)