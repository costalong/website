import comp from "/Users/costalong/code/web/vuepress-starter/docs/.vuepress/.temp/pages/demo/page.html.vue"
const data = JSON.parse("{\"path\":\"/demo/page.html\",\"title\":\"Page Config\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Page Config\",\"icon\":\"file\",\"order\":3,\"author\":\"Ms.Hope\",\"date\":\"2020-01-01T00:00:00.000Z\",\"category\":[\"Guide\"],\"tag\":[\"Page config\",\"Guide\"],\"sticky\":true,\"star\":true,\"footer\":\"Footer content for test\",\"copyright\":\"No Copyright\",\"description\":\"Content before more comment is regarded as page excerpt. Page Title The first H1 title in Markdown will be regarded as page title. You can also set title in Markdown's Frontmatt...\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://costalong.com/website/demo/page.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"云原生开发的创新之路\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Page Config\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Content before more comment is regarded as page excerpt. Page Title The first H1 title in Markdown will be regarded as page title. You can also set title in Markdown's Frontmatt...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Ms.Hope\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Page config\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Guide\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2020-01-01T00:00:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Page Config\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2020-01-01T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Ms.Hope\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"Page Title\",\"slug\":\"page-title\",\"link\":\"#page-title\",\"children\":[]},{\"level\":2,\"title\":\"Page Information\",\"slug\":\"page-information\",\"link\":\"#page-information\",\"children\":[]},{\"level\":2,\"title\":\"Page Content\",\"slug\":\"page-content\",\"link\":\"#page-content\",\"children\":[]},{\"level\":2,\"title\":\"Components\",\"slug\":\"components\",\"link\":\"#components\",\"children\":[]}],\"readingTime\":{\"minutes\":1.14,\"words\":341},\"filePathRelative\":\"demo/page.md\",\"localizedDate\":\"2020年1月1日\",\"autoDesc\":true}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
