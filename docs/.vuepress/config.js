import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import theme from "./theme.ts";
import { head } from './config/head';
export default defineUserConfig({
  base: "/website/",
  dest: "docs/.vuepress/dist",
  locales: {
    "/": {
      lang: "zh-CN",
      title: '云原生开发的创新之路',
      description: '欢迎来到 Costalong 网站，在这里，您将深入探索 Golang 在云原生开发领域的无限可能。我们专注于为您提供最前沿的云原生开发技术，通过 Golang 语言的强大功能，为您开启高效、创新的开发之旅。',
    },
  },
  head: head,
  theme: theme,
  pagePatterns: ["**/*.md", "!**/*.snippet.md", "!.vuepress", "!node_modules"],
  bundler: viteBundler(),
  shouldPrefetch: false,
})
