export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"\",\"description\":\"\",\"head\":[[\"meta\",{\"name\":\"robots\",\"content\":\"all\"}],[\"meta\",{\"name\":\"author\",\"content\":\"Guide\"}],[\"meta\",{\"name\":\"viewport\",\"content\":\"width=device-width,initial-scale=1,user-scalable=no\"}],[\"link\",{\"rel\":\"icon\",\"href\":\"/favicon.ico\"}]],\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"title\":\"云原生开发的创新之路\",\"description\":\"欢迎来到 Costalong 网站，在这里，您将深入探索 Golang 在云原生开发领域的无限可能。我们专注于为您提供最前沿的云原生开发技术，通过 Golang 语言的强大功能，为您开启高效、创新的开发之旅。\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
