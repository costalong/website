---
title: bufio Package
icon: golang2
---
## Scanner

Scanner，用于处理数据读取的简单任务，支持按行、按单词等方式读取，一般用于一些简单的读取场景。注意：Scanner 默认是按行读取，可以调用 Split 方法修改读取方式

函数说明:

`NewScanner(r io.Reader) *Scanner` 创建一个 Scanner 对象  
`Split(split SplitFunc)` 设置 Scanner 的分割函数  
`Scan() bool` 读取下一行数据  
`Text() string` 获取当前行的数据

1. 接收一个标准输入

```go
scanner := bufio.NewScanner(os.Stdin)
for scanner.Scan() {
    fmt.Println(scanner.Text())
}
```

2. 读取文件

```go
func printFile(filename string) {
    file, err := os.Open(filename)
    if err != nil {
        panic(err)
    }
    scanner := bufio.NewScanner(file)
    for scanner.Scan() {
        fmt.Println(scanner.Text())
    }
}

func main() {
    printFile("abc.txt")
}
```

3. 自定义分割函数

```go
package main

import (
 "bufio"
 "bytes"
 "fmt"
 "strings"
)

func main() {
 r := strings.NewReader("ab+c+d+e") // io.Reader
 s := bufio.NewScanner(r)           // bufio.Scanner

 s.Split(CustomSplit)

 // Iterate over the tokens
 for s.Scan() {
  fmt.Println(s.Text())
 }

 //  Check for errors
 if err := s.Err(); err != nil {
  fmt.Println("error:", err)
 }
}
// 自定义分割函数
func CustomSplit(data []byte, atEOF bool) (advance int, token []byte, err error) {
 if atEOF && len(data) == 0 {
  return 0, nil, nil
 }

 if i := bytes.IndexRune(data, '+'); i >= 0 {
  return i + 1, data[0:i], nil
 }

 if atEOF {
  return len(data), data, nil
 }

 return 0, nil, nil
}
```

## 参考

- [深入理解 Go 标准库之 bufio.Scanner](https://studygolang.com/articles/11905)

