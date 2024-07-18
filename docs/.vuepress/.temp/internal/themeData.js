export const themeData = JSON.parse("{\"logo\":\"https://vuejs.press/images/hero.png\",\"pages\":[{\"path\":\"/custom-page.html\",\"layout\":\"CustomLayout\"}],\"docsDir\":\"/docs\",\"navbar\":[\"/\",\"/get-started\",\"/install-vuepress\"]}")

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
