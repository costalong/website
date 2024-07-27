import comp from "/Users/costalong/code/web/vuepress-starter/docs/.vuepress/.temp/pages/webs/index.html.vue"
const data = JSON.parse("{\"path\":\"/webs/\",\"title\":\"Webs\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Webs\",\"article\":false,\"feed\":false,\"sitemap\":false,\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://costalong.com/website/webs/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"云原生开发的创新之路\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Webs\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Costa Long\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"Webs\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
