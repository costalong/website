import comp from "/Users/costalong/code/web/vuepress-starter/docs/.vuepress/.temp/pages/k8s/home.html.vue"
const data = JSON.parse("{\"path\":\"/k8s/home.html\",\"title\":\"k8s 的介绍\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"creative\",\"title\":\"k8s 的介绍\",\"description\":\"11111\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://costalong.com/website/k8s/home.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"云原生开发的创新之路\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"k8s 的介绍\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"11111\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Costa Long\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"k8s 的介绍\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Costa Long\\\",\\\"url\\\":\\\"https://costalong.com\\\"}]}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.03,\"words\":8},\"filePathRelative\":\"k8s/home.md\",\"autoDesc\":true}")
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
