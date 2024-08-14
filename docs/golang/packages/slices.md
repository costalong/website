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


## 参考

- [doc](https://cloud.tencent.com/developer/article/2354722)