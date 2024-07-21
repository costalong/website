import comp from "/Users/costalong/code/web/vuepress-starter/docs/.vuepress/.temp/pages/k8s/resource/index.html.vue"
const data = JSON.parse("{\"path\":\"/k8s/resource/\",\"title\":\"k8s 资源\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"k8s 资源\",\"icon\":\"lightbulb\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.03,\"words\":8},\"filePathRelative\":\"k8s/resource/README.md\"}")
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
