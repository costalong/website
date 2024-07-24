import comp from "/Users/costalong/code/web/vuepress-starter/docs/.vuepress/.temp/pages/k8s/resource/index.html.vue"
const data = JSON.parse("{\"path\":\"/k8s/resource/\",\"title\":\"Resource\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Resource\",\"article\":false,\"feed\":false,\"sitemap\":false,\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://costalong.com/website/k8s/resource/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"云原生开发的创新之路\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Resource\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Costa Long\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"Resource\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null}")
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
