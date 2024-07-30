export const themeData = JSON.parse("{\"encrypt\":{\"config\":{\"/demo/encryption\":[\"$2a$10$wLC/gEWUwwnnidk1/vwEo.Uj6awDgLB.S5ACCCZou1oApipA8wZl2\"]}},\"author\":{\"name\":\"Costa Long\",\"url\":\"https://costalong.com\"},\"logo\":\"/logo.png\",\"repo\":\"costalong/website\",\"docsDir\":\"docs\",\"copyright\":\"基于 MIT 协议，© 2024-至今 Mr.Hope\",\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"navbarLocales\":{\"langName\":\"简体中文\",\"selectLangAriaLabel\":\"选择语言\"},\"metaLocales\":{\"author\":\"作者\",\"date\":\"写作日期\",\"origin\":\"原创\",\"views\":\"访问量\",\"category\":\"分类\",\"tag\":\"标签\",\"readingTime\":\"阅读时间\",\"words\":\"字数\",\"toc\":\"此页内容\",\"prev\":\"上一页\",\"next\":\"下一页\",\"lastUpdated\":\"上次编辑于\",\"contributors\":\"贡献者\",\"editLink\":\"Edit this page on GitHub\",\"print\":\"打印\"},\"outlookLocales\":{\"themeColor\":\"主题色\",\"darkmode\":\"外观\",\"fullscreen\":\"全屏\"},\"encryptLocales\":{\"iconLabel\":\"文章已加密\",\"placeholder\":\"输入密码\",\"remember\":\"记住密码\",\"errorHint\":\"请输入正确的密码\"},\"routeLocales\":{\"skipToContent\":\"跳至主要內容\",\"notFoundTitle\":\"页面不存在\",\"notFoundMsg\":[\"这里什么也没有\",\"我们是怎么来到这儿的？\",\"这 是 四 零 四 !\",\"看起来你访问了一个失效的链接\"],\"back\":\"返回上一页\",\"home\":\"带我回家\",\"openInNewWindow\":\"Open in new window\"},\"navbar\":[\"/demo/\",{\"text\":\"云原生\",\"icon\":\"cloud\",\"link\":\"/k8s/\"},{\"text\":\"Golang\",\"icon\":\"golang2\",\"link\":\"/golang/\"},{\"text\":\"技术书籍\",\"icon\":\"book\",\"link\":\"/books/\"},{\"text\":\"网站技术\",\"icon\":\"code\",\"link\":\"/webs/\"},{\"text\":\"V2 文档\",\"icon\":\"books\",\"link\":\"https://theme-hope.vuejs.press/zh/\"}],\"sidebar\":{\"//\":[\"\",\"portfolio\",{\"text\":\"案例\",\"icon\":\"laptop-code\",\"prefix\":\"demo/\",\"link\":\"demo/\",\"children\":\"structure\"},{\"text\":\"文档\",\"icon\":\"book\",\"prefix\":\"guide/\",\"children\":\"structure\"},{\"text\":\"幻灯片\",\"icon\":\"person-chalkboard\",\"link\":\"https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html\"}],\"/golang/\":[{\"text\":\"golang的文档\",\"icon\":\"golang2\",\"prefix\":\"/golang/\",\"collapsible\":true,\"children\":[\"home\",{\"text\":\"测试\",\"prefix\":\"tests/\",\"icon\":\"test\",\"collapsible\":true,\"link\":\"tests/\",\"children\":[\"gomonkey\",\"gomock\",\"goconvey\"]}]}],\"/k8s/\":[{\"text\":\"k8s的文档\",\"icon\":\"book\",\"prefix\":\"/k8s/\",\"collapsible\":true,\"children\":[\"home\",{\"text\":\"k8s的资源\",\"link\":\"resource/\",\"prefix\":\"resource/\",\"icon\":\"laptop-code\",\"collapsible\":true,\"children\":[\"pod\",\"service\"]}]}],\"/books/\":[{\"text\":\"计算机基础\",\"link\":\"cs-basics\",\"icon\":\"computer\"}],\"/webs/\":[{\"text\":\"前端\",\"link\":\"web\",\"icon\":\"computer\"}]},\"footer\":\"Default footer\",\"displayFooter\":true}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
