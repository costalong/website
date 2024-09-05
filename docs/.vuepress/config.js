import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { recoTheme } from 'vuepress-theme-reco'
import { themeConfig } from './config/index'
export default defineUserConfig({
  lang: 'en-US',

  title: 'VuePress',
  description: 'My first VuePress Site',
  theme: recoTheme(themeConfig),

  // theme: recoTheme({
  //   // some reco-theme options
  //   viteBundlerOptions: {
  //     // 自动设置分类
  //     autoSetSeries: true,
  //     viteOptions: {},
  //     vuePluginOptions: {},
  //     friendshipLinks: [
  //       {
  //         title: 'vuepress-recovuepress-recovuepress-recovuepress-reco',
  //         logo: 'https://avatars.githubusercontent.com/u/54167020?s=200&v=4',
  //         link: 'https://github.com/vuepress-reco'
  //       }
  //     ],
  //   },
  //   docsDir: '/docs'
  // }),
  bundler: viteBundler(),
  // debug: true,
})
