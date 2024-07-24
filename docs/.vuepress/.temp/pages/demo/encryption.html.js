import comp from "/Users/costalong/code/web/vuepress-starter/docs/.vuepress/.temp/pages/demo/encryption.html.vue"
const data = JSON.parse("{\"path\":\"/demo/encryption.html\",\"title\":\"Encryption Article\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"lock\",\"category\":[\"Guide\"],\"tag\":[\"encryption\"],\"feed\":false,\"seo\":false,\"gitInclude\":[],\"head\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.3,\"words\":90},\"filePathRelative\":\"demo/encryption.md\"}")
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
