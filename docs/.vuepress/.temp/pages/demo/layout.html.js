import comp from "/home/hellotalk/code/blog/website/docs/.vuepress/.temp/pages/demo/layout.html.vue"
const data = JSON.parse("{\"path\":\"/demo/layout.html\",\"title\":\"Layout\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Layout\",\"icon\":\"object-group\",\"order\":2,\"category\":[\"Guide\"],\"tag\":[\"Layout\"],\"description\":\"The layout contains: Navbar Sidebar Footer Also each page can contain: BreadCrumb Title and information TOC (Table of Contents) Meta information including update time and contri...\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://costalong.com/website/demo/layout.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"云原生开发的创新之路\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Layout\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"The layout contains: Navbar Sidebar Footer Also each page can contain: BreadCrumb Title and information TOC (Table of Contents) Meta information including update time and contri...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Costa Long\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Layout\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Layout\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Costa Long\\\",\\\"url\\\":\\\"https://costalong.com\\\"}]}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.35,\"words\":105},\"filePathRelative\":\"demo/layout.md\",\"autoDesc\":true,\"excerpt\":\"<p>The layout contains:</p>\\n<ul>\\n<li><a href=\\\"https://theme-hope.vuejs.press/guide/layout/navbar.html\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">Navbar</a></li>\\n<li><a href=\\\"https://theme-hope.vuejs.press/guide/layout/sidebar.html\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">Sidebar</a></li>\\n<li><a href=\\\"https://theme-hope.vuejs.press/guide/layout/footer.html\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">Footer</a></li>\\n</ul>\"}")
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
