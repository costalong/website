import comp from "/Users/costalong/code/web/vuepress-starter/docs/.vuepress/.temp/pages/demo/index.html.vue"
const data = JSON.parse("{\"path\":\"/demo/\",\"title\":\"Features demo\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Features demo\",\"index\":false,\"icon\":\"laptop-code\",\"category\":[\"Guide\"],\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://costalong.com/website/demo/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"云原生开发的创新之路\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Features demo\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Costa Long\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Features demo\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Costa Long\\\",\\\"url\\\":\\\"https://costalong.com\\\"}]}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.04,\"words\":12},\"filePathRelative\":\"demo/README.md\"}")
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
