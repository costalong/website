import comp from "/Users/costalong/code/web/vuepress-starter/docs/.vuepress/.temp/pages/k8s/index.html.vue"
const data = JSON.parse("{\"path\":\"/k8s/\",\"title\":\"K8s\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"K8s\",\"index\":false,\"icon\":\"laptop-code\",\"category\":[\"K8S\"],\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.04,\"words\":11},\"filePathRelative\":\"k8s/README.md\"}")
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
