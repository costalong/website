---
title: gitcus 使用
category: web
icon: "computer"
head:
  - - meta
    - name: keywords
      content: giscus
---

## 使用 github 安装 giscus

安装地址：  [giscus 安装地址](https://github.com/apps/giscus/installations/new)

![安装](./images/gisucs-one.png)

选择使用项目

![安装](./images/giscus-two.png)

开启 Discussions 功能

* 点击项目 Setting 功能

![设置](https://costa92.oss-cn-hangzhou.aliyuncs.com/Blog/20240725233134.png)

* 往下滑动到 Features 部分，找到 Discussions 多选择，把复选框选中,

![20240725233240](https://costa92.oss-cn-hangzhou.aliyuncs.com/Blog/20240725233240.png)

* 获取项目的分类与分类id

[点击进入](https://giscus.app/zh-CN) 滑动“仓库”位置，输入你开启的discussion 的仓库信息

![20240725233726](https://costa92.oss-cn-hangzhou.aliyuncs.com/Blog/20240725233726.png)
 
在往下滑找到 启用 giscus 找到

```script
<script src="https://giscus.app/client.js"
        data-repo="[在此输入仓库]"
        data-repo-id="[在此输入仓库 ID]"  
        data-category="[在此输入分类名]"
        data-category-id="[在此输入分类 ID]"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="preferred_color_scheme"
        data-lang="zh-CN"
        crossorigin="anonymous"
        async>
</script>
```

找相应的信息后，在配置 giscus 评论系统

## 参考我文档

[官方地址](https://giscus.app/zh-CN)
