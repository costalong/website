export const themeData = JSON.parse("{\"repo\":\"https://github.com/costa92/vuepress-starter\",\"logo\":\"https://vuejs.press/images/hero.png\",\"docsDir\":\"/docs\",\"navbar\":[\"/\",\"/get-started\",\"/install-vuepress\"]}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
