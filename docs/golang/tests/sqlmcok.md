---
title: "golang 单元测试 sqlmock"
icon: golang2
---

go-sqlmock 是一个实现 sql/driver 的模拟库

在 Go 语言中，使用 sqlmock 进行单元测试是一种常见且有效的方式。sqlmock 库可以帮助模拟数据库操作，从而能够独立地测试与数据库交互的代码逻辑，而无需实际连接到真实的数据库。
以下是一个简单的示例，展示如何使用 sqlmock 进行单元测试：

## 安装

```sh
go get github.com/DATA-DOG/go-sqlmock
```

## 案例

1. 使用sql查询用户的信息

新建文件 `user_dao.go`

```go
// 被测试的函数，从数据库中获取用户信息
func getUserInfo(db *sql.DB, userId int) (string, error) {
	var name string
	err := db.QueryRow("SELECT name FROM users WHERE id = $1", userId).Scan(&name)
	return name, err
}

``
新建测试文件 user_dao_test.go
```go
package main

import (
	"github.com/DATA-DOG/go-sqlmock"
	"testing"
)

func TestGetUserInfo(t *testing.T) {
	// 创建数据库连接模拟对象
	db, mock, err := sqlmock.New()
	if err != nil {
		t.Fatalf("an error '%s' was not expected when opening a stub database connection", err)
	}
	defer db.Close()

	// 预期的查询行为和结果
	expectedId := 1
	expectedName := "John Doe"
	rows := sqlmock.NewRows([]string{"name"}).AddRow(expectedName)
	mock.ExpectQuery("^SELECT name FROM users WHERE id = \\$1").WithArgs(expectedId).WillReturnRows(rows)

	// 调用被测试的函数
	name, err := getUserInfo(db, expectedId)
	if err != nil {
		t.Errorf("error occurred: %v", err)
	}

	// 验证结果
	if name != expectedName {
		t.Errorf("expected name %s, but got %s", expectedName, name)
	}
	// 确保所有预期的操作都已完成
	if err := mock.ExpectationsWereMet(); err != nil {
		t.Errorf("there were unfulfilled expectations: %s", err)
	}

}
```
```sh
go test -gcflags="all=-l -N" -v -run TestGetUserInfo   
输出：
=== RUN   TestGetUserInfo
--- PASS: TestGetUserInfo (0.00s)
PASS
ok      github.com/costalong/blog-code-go/unit-test/sqlmock-demo/demo-one       3.058s

```

## 参考文档

[go-sqlmock](https://github.com/DATA-DOG/go-sqlmock)

[使用 go-sqlmock 模拟数据库驱动编写单元测试用例](https://piaohua.github.io/post/golang/20220813-go-sqlmock/)

[Go单测测试 — 数据库 CRUD 的 Mock 测试](https://mp.weixin.qq.com/s?__biz=MzUzNTY5MzU2MA==&mid=2247493173&idx=1&sn=ef47fc8591a1976e0e254ed76cb1e144&chksm=fa8337a2cdf4beb45a1b55c0e231fa3f340afc4d37f590b237faedce720e2a0a51ae7c2d50a9&token=363190209&lang=zh_CN&poc_token=HFljqmajyAleVnOJw0Brf3paLJ6ivBgPXejwWARd)