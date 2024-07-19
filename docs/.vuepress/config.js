import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { recoTheme } from 'vuepress-theme-reco'

export default defineUserConfig({
  lang: 'en-US',

  // 网站标题和描述
  title: '云原生开发的创新之路',
  description: '欢迎来到 Costalong 网站，在这里，您将深入探索 Golang 在云原生开发领域的无限可能。我们专注于为您提供最前沿的云原生开发技术，通过 Golang 语言的强大功能，为您开启高效、创新的开发之旅。',

  theme: recoTheme({
    // 
    repo: 'https://github.com/costa92/vuepress-starter',
    logo: 'https://vuejs.press/images/hero.png',

    docsDir: '/docs',
    // 菜单
    navbar: ['/', '/get-started', '/install-vuepress'],
  }),

  

  bundler: viteBundler(),
})
