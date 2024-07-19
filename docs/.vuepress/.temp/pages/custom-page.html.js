import comp from "/home/hellotalk/code/blog/vuepress/vuepress-starter/docs/.vuepress/.temp/pages/custom-page.html.vue"
const data = JSON.parse("{\"path\":\"/custom-page.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"layout\":\"CustomLayout\"},\"headers\":[],\"git\":{},\"filePathRelative\":null}")
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
