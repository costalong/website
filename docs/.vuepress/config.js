import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import theme from "./theme.ts";
import { head } from './config/head';
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
    // base: 网站域名前缀对应自己的GitHub仓库名称
  // 一定要以/开头结尾，不然会出现资源找不到
  base: "/website/",
  dest: "docs/.vuepress/dist",
  locales: {
    "/": {
      lang: "zh-CN",
      title: '云原生开发的创新之路',
      description: '欢迎来到 Costalong 网站，在这里，您将深入探索 Golang 在云原生开发领域的无限可能。我们专注于为您提供最前沿的云原生开发技术，通过 Golang 语言的强大功能，为您开启高效、创新的开发之旅。',
    },
  },
  //是否开启页面预拉取，如果服务器宽带足够，可改为 true，会提升其他页面加载速度
  shouldPrefetch: false,
  // page meta
  metaLocales: {
      editLink: "在 GitHub 上编辑此页",
  },
  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => page.frontmatter.category,
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag || [],
          formatter: "标签：$content",
        },
      ],
    }),
  ],
  head: head,
  theme: theme,
  bundler: viteBundler(),
  pagePatterns: ["**/*.md", "!**/*.snippet.md", "!.vuepress", "!node_modules"],
})
