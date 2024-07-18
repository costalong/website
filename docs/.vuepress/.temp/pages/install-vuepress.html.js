import comp from "/Users/costalong/code/web/vuepress-starter/docs/.vuepress/.temp/pages/install-vuepress.html.vue"
const data = JSON.parse("{\"path\":\"/install-vuepress.html\",\"title\":\"vuepress 安装主题\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"安装\",\"slug\":\"安装\",\"link\":\"#安装\",\"children\":[]}],\"git\":{\"createdTime\":null,\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"install-vuepress.md\"}")
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
