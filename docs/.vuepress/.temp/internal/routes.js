export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/timeline.html", { loader: () => import(/* webpackChunkName: "timeline.html" */"/home/hellotalk/code/blog/vuepress/vuepress-starter/docs/.vuepress/.temp/pages/timeline.html.js"), meta: {"title":""} }],
  ["/posts.html", { loader: () => import(/* webpackChunkName: "posts.html" */"/home/hellotalk/code/blog/vuepress/vuepress-starter/docs/.vuepress/.temp/pages/posts.html.js"), meta: {"title":""} }],
  ["/friendship-link.html", { loader: () => import(/* webpackChunkName: "friendship-link.html" */"/home/hellotalk/code/blog/vuepress/vuepress-starter/docs/.vuepress/.temp/pages/friendship-link.html.js"), meta: {"title":""} }],
  ["/custom-page.html", { loader: () => import(/* webpackChunkName: "custom-page.html" */"/home/hellotalk/code/blog/vuepress/vuepress-starter/docs/.vuepress/.temp/pages/custom-page.html.js"), meta: {"title":""} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/hellotalk/code/blog/vuepress/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"/home/hellotalk/code/blog/vuepress/vuepress-starter/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/install-vuepress.html", { loader: () => import(/* webpackChunkName: "install-vuepress.html" */"/home/hellotalk/code/blog/vuepress/vuepress-starter/docs/.vuepress/.temp/pages/install-vuepress.html.js"), meta: {"title":"vuepress 安装主题"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/hellotalk/code/blog/vuepress/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
