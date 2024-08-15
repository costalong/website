---
title: "golang slices 包"
icon: golang2
---

## slices 库

在 Go 1.21.0 版本中，引入了 切片泛型库，即 `slices` 包。 

### slices 库包含的函数可以分为以下类型

- **搜索**：通过二分查找算法查找指定元素。相关的函数有 `BinarySearch` 和 `BinarySearchFunc`
- **裁剪**：删除切片中未使用的容量。相关的函数有 `Clip`
- **克隆**：浅拷贝一个切片副本。相关的的函数有：`Clone`
- **压缩**：将切片里连续的相同元素替换为一个元素。从而减少了切片的长度，相关的函数有：`Compact` 和 `CompactFunc`
- **大小比较**：比较两个切片的大小。相关的函数有 `Compare` 和 `CompareFunc`
- **包含**：判断切片是否包含指定元素。相关的函数有：`Contains` 和 `ContainsFunc`
- **删除**：从切片中删除一个或多个元素。相关的函数有 `Delete` 和 `DeleteFunc`
- **等价比较**：比较两个切片是否相等。相关的函数有：`Equal` 和 `EqualFunc`
- **扩容**：增加切片的容量。相关的函数有：`Grow`
- **索引查找**：查找指定元素在切片中的索引位置。相关的函数有：`Index` 和 `IndexFunc`
- **插入**：往切片里插入一组值。相关的函数有：`Insert`
- **有序判断**：判断切片是否按照升序排列。相关的函数有：`IsSorted` 和 `IsSortedFunc`
- **最大值**：查找切片里的最大元素。相关的函数有：`Max` 和 `MaxFunc`
- **最小值**：查找切片里的最小元素。相关的函数有：`Min` 和 `MinFunc`
- **替换**：替换切片里的元素。相关的函数有：`Replace`
- **反转**：反转切片的元素。相关的函数有：`Reverse`
- **排序**：对切片里的元素进行升序排列。相关的函数有：`Sort` 和 `SortFunc` 以及 `SortStableFunc`

#### 搜索：BinarySearch 和 BinarySearchFunc

1. 搜索：`BinarySearch`

函数用于在有序的切片中 查找 目标元素，并返回其在切片中的 位置。该函数有两个返回值，第一个是指定元素的下标索引，第二个是一个 bool 值，表示是否在切片中找到指定元素。

   
```go
package main

import (
    "fmt"
    "slices"
)

func main() {
    scores := []int{70, 85, 90, 95, 98, 99, 100}
    idx, b := slices.BinarySearch(scores, 80)
    fmt.Println(idx, b)
    idx, b = slices.BinarySearch(scores, 95)
    fmt.Println(idx, b)
}
```

输出:

```sh
1 false
3 true
```

2. `BinarySearchFunc`

BinarySearchFunc 功能和 BinarySearch 类似，但它更加灵活，在它接收的参数里，其中有一个是 cmp 比较函数，通过该函数我们可以为任何的数据结构定义比较逻辑。

`cmp` 比较函数的介绍如下：

```go
cmp func(E, T) int
```

`E`：切片元素
`T`：目标元素

返回值为 int 类型
当 E 的位置在 T 之前，返回负数；当前 E 等于 T 时，应返回 0，当 E 的位置在 T 的后面时，返回正数。

```go
package main

import (
    "cmp"
    "fmt"
    "slices"
)

func main() {
    type User struct {
       Name string
       Age  int
    }

    users := []User{
       {"Aaron", 20},
       {"Gopher", 24},
       {"Harry", 18},
    }

    idx, b := slices.BinarySearchFunc(users, User{Name: "Gopher"}, func(src User, dst User) int {
       return cmp.Compare(src.Name, dst.Name)
    })
    fmt.Println("Gopher:", idx, b)
}
```

输出:

```sh
Gopher: 1 true
```

#### 裁剪：Clip

Clip 函数用于删除切片中未使用的容量，执行操作后，切片的长度 = 切片的容量。

```go
package main

import (
    "fmt"
    "slices"
)

func main() {
    s := make([]int, 0, 8)
    s = append(s, 1, 2, 3, 4)
    fmt.Printf("len: %d, cap: %d\n", len(s), cap(s))
    s = slices.Clip(s)
    fmt.Printf("len: %d, cap: %d\n", len(s), cap(s))
}
```

输出:

```sh
len: 4, cap: 8
len: 4, cap: 4
```

#### 克隆：Clone

Clone 函数返回一个拷贝的切片副本，元素是赋值复制，因此是浅拷贝,由于是浅拷贝，修改副本切片里的元素，原切片的元素也会更新。

```go
package main

import (
    "fmt"
    "slices"
)

func main() {
    type User struct {
       Name string
    }
    s := []*User{{Name: "Gopher"}}
    copiedSlice := slices.Clone(s)

    copiedSlice[0].Name = "陈明勇"

    fmt.Println(s[0].Name == copiedSlice[0].Name) // true
}

```

#### 压缩：Compact 和 CompactFunc

`Compact`  函数会将切片里连续的相同元素替换为一个元素。

```go
package main

import (
    "fmt"
    "slices"
)

func main() {
    s := []int{1, 2, 2, 3, 3, 4, 5}
    newSlice := slices.Compact(s)
    fmt.Println(newSlice)
}
```

输出:

```sh
[1 2 3 4 5]
```

`Compact` 的原理是通过移动元素来合并重复项。尽管处理后的切片长度减少了，但其底层数组的实际值仍然包括被“抛弃”的元素，例如 `[1, 2, 3, 4, 5, 4, 5]`。这些尾部的元素 [4, 5] 虽不在新切片中，但仍占用内存。特别是当元素为指针时，这些元素会阻止它们所引用的对象被垃圾回收。为确保这些对象可以被回收，我们应该考虑将这些元素置为 nil。

`CompactFunc` 函数与 `Compact` 函数类似，但可以指定一个函数来比较元素是否相等。

eg: 相同元素合并为一个，比较元素时，忽略大小写

```go
package main

import (
    "fmt"
    "slices"
    "strings"
)

func main() {
    names := []string{"cmy", "CmY", "Gopher", "GOPHER", "Jack"}
    names = slices.CompactFunc(names, func(a, b string) bool {
       return strings.ToLower(a) == strings.ToLower(b)
    })
    fmt.Println(names)
}
```

输出

```sh
[cmy Gopher Jack]
```

#### 大小比较：Compare 和 CompareFunc

`Compare` 函数是一个比较函数，内部使用 `cmp` 包的 `Compare` 函数对 s1 和 s2 的每对元素进行比较。元素按顺序从索引 0 开始进行比较，直到有一对元素不相等。返回第一对不匹配元素的比较结果。如果两个切片在某一个切片结束之前都保持相等，那么长度较短的切片被认为小于较长的切片。

如果 s1 == s2，结果为 0；如果 s1 < s2，结果为 -1；如果 s1 > s2，结果为 +1。

```go
package main

import (
    "fmt"
    "slices"
)

func main() {
    names := []string{"Aaron", "Bob", "Gopher"}
    fmt.Println("相等: ", slices.Compare(names, []string{"Aaron", "Bob", "Gopher"}))
    fmt.Println("G < F, 第一个的切片小于第二个的切片:", slices.Compare(names, []string{"Aaron", "Bob", "Frida"}))
    fmt.Println("G > H, 第一个的切片大于第二个的切片:", slices.Compare(names, []string{"Aaron", "Bob", "Harry"}))
    fmt.Println("3 > 2, 第一个的切片大于第二个的切片:", slices.Compare(names, []string{"Aaron", "Bob"}))
}
```

输出:

```sh
相等:  0
G < F, 第一个的切片小于第二个的切片: 1
G > H, 第一个的切片大于第二个的切片: -1
3 > 2, 第一个的切片大于第二个的切片: 1
```

CompareFunc 和 Compare 函数的功能类似，但它对每对元素使用自定义的比较函数进行比较。比较函数在 BinarySearchFunc 小节里已经介绍过，这里就不多介绍。

案例：使用自定义的比较函数来比较两个切片中的元素，此比较函数基于字符串的长度而不是字典顺序。比较规则是：更短的字符串被认为是较小的。

```sh
package main

import (
    "fmt"
    "slices"
)

func main() {
    s1 := []string{"apple", "banana", "cherry"}
    s2 := []string{"apple", "blueberry", "date"}
    result := slices.CompareFunc(s1, s2, func(s string, s2 string) int {
       if len(s) < len(s2) {
          return -1
       } else if len(s) > len(s2) {
          return 1
       }
       return 0
    })
    fmt.Println("第一个切片比第二个切片小：", result) // -1
}

```

输出:

```sh
第一个切片比第二个切片小： -1
```

#### 包含：Contains 和 ContainsFunc

Contains 函数用于判断切片里是否包含指定元素。

eg: 判断切片中是否包含元素 3

```go
package main

import (
    "fmt"
    "slices"
)

func main() {
    numbers := []int{1, 5, -1, 3, 2}
    hasNegativeOne := slices.Contains(numbers,  3)
    fmt.Println("包含 3：", hasNegativeOne)
}

```

输出:

```sh
包含 3： true
```

ContainsFunc 和 Contains 函数功能类似，但它使用一个相等性函数来确定被包含的元素。

例如我们要在一个切片中判断是否包含负数元素：

```go
package main

import (
    "fmt"
    "slices"
)

func main() {
    numbers := []int{1, 5, -1, 3, 2}
    containNegative := slices.ContainsFunc(numbers, func(i int) bool {
       return i < 0
    })
    fmt.Println("包含负数：", containNegative)
}
```

输出:

```sh
包含负数： true
```

#### 删除：Delete 和 DeleteFunc

##### Delete

`Delete` 函数的功能是从指定切片 s 中删除指定范围 `s[i:j]` 的元素，并返回新的的切片。

使用注意事项：

- 如果 s[i:j] 不是一个有效的范围，则会 panic
- 相比于逐个删除的行为，一次性删除多个元素，效率会更好
- 由于该函数底层是通过索引范围去构建新的切片，并没有操作被 “抛弃”的元素。它们仍然存在于底层的数组中。因此当元素为指针时，这些元素会阻止它们所引用的对象被垃圾回收。为确保这些对象可以被回收，我们应该考虑将这些元素置为 nil。

下面是使用该函数的一个例子：

```go

import (
    "fmt"
    "slices"
)

func main() {
    numbers := []int{1, 2, 3, 4, 5}
    newNumbers := slices.Delete(numbers, 1, 3)
    fmt.Println(newNumbers)
}
```

输出:

```sh
[1 4 5]
```

结论: 删除位置范围 1 ～ 3 的元素，不包含位置 3。

##### DeleteFunc

DeleteFunc 和 Delete 函数功能类似，但它使用一个相等性函数来确定需要删除的元素。

eg: 从切片中删除奇数元素

```go
package main

import (
 "fmt"
 "slices"
)

func main() {
 numbers := []int{1, 2, 3, 4, 5}
 newNumbers := slices.DeleteFunc(numbers, func(i int) bool {
  return i%2 != 0
 })
 fmt.Println(newNumbers)
}

```

输出:

```sh
[2 4]
```

### 等价比较：Equal 和 EqualFunc

#### Equal

`Equal` 函数用于比较两个切片是否相等，要求切片的元素类型必须是可比较(comparable)的。

其工作原理如下：

首先检查两个切片的长度，如果长度不同，则直接返回 false，表示这两个切片不相等。如果长度相同，函数会逐个比较元素，按照递增的顺序进行比较。需要注意的是，对于浮点数，函数会忽略 NaN 值，不将其视为相等

```go
package main

import (
    "fmt"
    "slices"
)

func main() {
    numbers := []int{0, 1, 2}
    fmt.Println(slices.Equal(numbers, []int{0, 1, 2}))
    fmt.Println(slices.Equal(numbers, []int{3}))
}
```

输出:

```sh
true
false
```

#### EqualFunc

`EqualFunc` 函数的功能和 `Equal` 函数类似，但它使用一个相等性函数来确定两个切片是否相等。

eg: 忽略大小写比较

```go
package main

import (
 "fmt"
 "slices"
)

func main() {
  numbers := []string{"a", "b", "c"}
  equal :=slices.EqualFunc(numbers, []string{"A", "B", "C"}, func(i, j int) bool {
    return strings.ToLower(numbers[i]) == strings.ToLower(numbers[j])
 })
  fmt.Println(equal)
}
```

```sh
true
```

## 扩容：Grow

`Grow` 函数会根据需要增加切片的容量，以确保可以容纳另外 n 个元素。在调用 `Grow(n)` 后，至少可以追加 n 个元素到切片中而无需再次分配内存。如果 n 为负数或者需要分配的内存太大，`Grow` 会引发异常。

```go
package main

import (
    "fmt"
    "slices"
)

func main() {
    s := make([]int, 4, 5)
    fmt.Printf("len=%d, cap=%d\n", len(s), cap(s))
    grow := slices.Grow(s, 4)
    fmt.Printf("len=%d, cap=%d\n", len(grow), cap(grow))
}
```

输出:

```sh
len=4, cap=5
len=4, cap=10
```

在调用 Grow 函数扩容之前，切片 s 可用容量只有 1，在扩容之后，可用容量为 6，可确保能至少能容纳 4 个元素。

## 索引查找：Index 和 IndexFunc

### Index

`Index` 函数返回指定元素在切片里第一次出现的下标索引值，如果元素不存在，则返回 -1 。

```go
package main

import (
 "fmt"
 "slices"
)

func main() {
 numbers := []int{0, 1, 2}
 fmt.Println("找到元素位置：", slices.Index(numbers, 2))
 fmt.Println("未找到元素位置：", slices.Index(numbers, 3))
}
```

输出:

```sh
找到元素位置： 2
未找到元素位置： -1
```

### IndexFunc

`IndexFunc` 函数的功能和 `Index` 函数类似，但它使用一个函数来确定元素是否在切片中。

```go
package main

import (
 "fmt"
 "slices"
)

func main() {
 numbers := []int{1, 5, -1, 3, 2}
 idx := slices.IndexFunc(numbers, func(i int) bool {
  return i < 0
 })
 fmt.Println("负数的索引：", idx)
}
```

eg:

```sh
负数的索引： 2
```

### 插入：Insert

`Insert` 函数用于在一个切片 s 中的指定位置 i 处插入一组值 v...，然后返回修改后的切片。如果指定的索引 i 越界了，则会发生错误。

```go
package main

import (
 "fmt"
 "slices"
)

func main() {
 numbers := []int{1, 3, 4}
 numbers = slices.Insert(numbers, 1, 2)
 numbers = slices.Insert(numbers, len(numbers), 5, 6)
 fmt.Println(numbers)
}
```

输出:

```sh
[1 2 3 4 5 6]
```

### 有序判断：IsSorted 和 IsSortedFunc

#### IsSorted

`IsSorted` 函数用于判断切片是按升序排列。

```go
package main

import (
 "fmt"
 "slices"
)

func main() {
 fmt.Println("是升序排列：", slices.IsSorted([]int{1, 2, 3, 4, 5}))
 fmt.Println("不是升序排列：", slices.IsSorted([]int{1, 2, 3, 5, 4}))
}
```

输出:

```sh
是升序排列： true
不是升序排列： false
```

#### IsSortedFunc

`IsSortedFunc` 和 `IsSorted` 函数功能类似，但它对每对元素使用自定义的比较函数进行比较。比较函数在 BinarySearchFunc 小节里已经介绍过，这里就不多介绍。

```go
package main

import (
 "cmp"
 "fmt"
 "slices"
 "strings"
)

func main() {
 names := []string{"aaron", "Bob", "GOPHER"}
 isSortedInsensitive := slices.IsSortedFunc(names, func(a, b string) int {
  return cmp.Compare(strings.ToLower(a), strings.ToLower(b))
 })
 fmt.Println("是升序排列：", isSortedInsensitive)
 fmt.Println("不是升序排列：", slices.IsSorted(names))
}
```

输出:

```sh
是升序排列： true
不是升序排列： false
```

### 最大值：Max 和 MaxFunc

#### Max

`Max` 函数返回切片中最大的元素，如果切片为空，则 panic。对于浮点数类型，如果切片中包含 NaN（非数字）值，那么结果将是 NaN。 NaN 是一种特殊的浮点数值，表示不是一个数字或无效数字。如果切片包含 NaN，那么最大值也将是 NaN，这是因为 NaN 不可比较大小。

```go
package main

import (
"fmt"
 "slices"
)

func main() {
 fmt.Println("最大的元素：", slices.Max([]int{1, 2, 5, 3, 4}))
}
```


输出:

```sh
最大的元素： 5
```

#### MaxFunc

`MaxFunc` 和 `Max` 函数功能类似，但它使用一个相等性函数来比较元素。

```go
package main

import (
 "cmp"
 "fmt"
 "slices"
)

func main() {
 type User struct {
  Name string
  Age  int
 }

 users := []User{
  {"Aaron", 20},
  {"Gopher", 24},
  {"Harry", 18},
	}
	maxUser := slices.MaxFunc(users, func(a, b User) int {
		return cmp.Compare(a.Age, b.Age)
	})
	fmt.Println("最大的元素：", maxUser)
}
```

输出:

```sh
最大的元素： {Gopher 24}
```

### 最小值：Min 和 MinFunc

#### Min

Min 函数返回切片中最小的元素，如果切片为空，则 panic。对于浮点数类型，如果切片中包含 NaN（非数字）值，那么结果将是 NaN。 NaN 是一种特殊的浮点数值，表示不是一个数字或无效数字。如果切片包含 NaN，那么最小值也将是 NaN，这是因为 NaN 不可比较大小。

```go
package main

import (
	"fmt"
	"slices"
)

func main() {
	fmt.Println("最小的元素：", slices.Max([]int{1, 2, 5, 3, 4}))
}

```

输出:

```sh
最小的元素： 1
```

#### MaxFunc

`MaxFunc` 和 `Max` 函数功能类似，但它使用一个相等性函数来比较元素。

```go
package main

import (
	"cmp"
	"fmt"
	"slices"
)

func main() {
	type User struct {
		Name string
		Age  int
	}

	users := []User{
		{"Aaron", 20},
		{"Gopher", 24},
		{"Harry", 18},
	}
	maxUser := slices.MaxFunc(users, func(a, b User) int {
		return cmp.Compare(a.Age, b.Age)
	})
	fmt.Println("最小的元素：", maxUser)
}
```

输出:

```sh
最小的元素： {Harry 18}
```

## 替换：Replace

`Replace` 函数用于将切片s 中的元素 s[i:j] 替换为给定的元素组 v，然后返回修改后的切片。如果 s[i:j] 不是 s 的有效切片范围，函数会引发 panic。


```go
package main

import (
	"fmt"
	"slices"
)

func main() {
	numbers := []int{1, 0, 0, 5}
	numbers = slices.Replace(numbers, 1, 3, 2, 3, 4)
	fmt.Println(numbers)
}
```

输出:

```sh
[1 2 3 4 5]
```

### 反转：Reverse

`Reverse` 函数用于反转切片 s 的元素顺序，然后返回修改后的切片。如果 s 是一个空切片，函数会返回一个空切片。

```go
package main

import (
	"fmt"
	"slices"
)

func main() {
	numbers := []int{1, 2, 3, 4}
	slices.Reverse(numbers)
	fmt.Println(numbers)
}

```

输出:

```sh
[4 3 2 1]
```

### 排序：Sort 和 SortFunc 以及 SortStableFunc

#### Sort

`Sort` 函数用于对切片 s 进行升序排序，然后返回修改后的切片。如果 s 是一个空切片，函数会返回一个空切片。如果 s 中的元素类型实现了 `sort.Interface` 接口，那么 `Sort` 函数会使用该接口的 `Len`、`Less` 和 `Swap` 方法对元素进行排序。否则，`Sort` 函数会使用反射来对元素进行排序。

 注意: 当对浮点数进行排序时，NaN 值会被排在其他值的前面。这意味着在排序浮点数时，NaN 值会被视为最小值，排在结果的最前面。

```go
package main

import (
	"fmt"
	"math"
	"slices"
)

func main() {
	ints := []int{1, 2, 5, 3, 4}
	slices.Sort(ints)
	floats := []float64{2.0, 3.0, math.NaN(), 1.0}
	slices.Sort(floats)
	fmt.Println(ints)
	fmt.Println(floats)
}
```

输出:

```sh
[1 2 3 4 5]
[NaN 1 2 3]

```

#### SortFunc

`SortFunc` 和 `Sort` 函数功能类似，但它对每对元素使用自定义的比较函数进行比较。比较函数在 BinarySearchFunc 小节里已经介绍过，这里就不多介绍。

```go
package main

import (
	"cmp"
	"fmt"
	"slices"
	"strings"
)

func main() {
	names := []string{"Bob", "Aaron", "GOPHER"}
	slices.SortFunc(names, func(a, b string) int {
		return cmp.Compare(strings.ToLower(a), strings.ToLower(b))
	})
	fmt.Println(names)
}
```

输出:

```sh
[1 2 3 4 5]
[NaN 1 2 3]
```

#### SortStableFunc

`SortStableFunc` 和 `SortFunc` 函数功能类似，但它进行的是稳定排序，它会保持相等元素的原始顺序。

定排序意味着当有多个相等的元素时，它们的相对顺序在排序后会保持不变。例如，如果有两个元素 A 和 B，它们的值相等，且在原始切片中 A 出现在 B 之前，那么在排序后 A仍然会出现在 B 之前，不会改变它们的相对位置。

```go
package main

import (
	"cmp"
	"fmt"
	"slices"
)

func main() {
	type User struct {
		Name string
		Age  int
	}

	users := []User{
		{"Aaron", 20},
		{"Gopher", 16},
		{"Harry", 16},
		{"Burt", 18},
	}
	slices.SortStableFunc(users, func(a, b User) int {
		return cmp.Compare(a.Age, b.Age)
	})
	fmt.Println(users)
}
```

输出:

```sh
[{Gopher 16} {Harry 16} {Burt 18} {Aaron 20}]
```


排序之前，Harry 在 Gopher 后面，排序之后，也是同样的相对位置。

## 参考

- [slices 源码](https://github.com/golang/exp/tree/master/slices)
- [doc](https://cloud.tencent.com/developer/article/2354722)
- [golang doc](https://golang.google.cn/pkg/slices/)