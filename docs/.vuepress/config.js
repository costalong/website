import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { recoTheme } from 'vuepress-theme-reco'

export default defineUserConfig({
  lang: 'en-US',

  title: 'VuePress111',
  description: 'My first VuePress Site',

  theme: recoTheme({
    logo: 'https://vuejs.press/images/hero.png',
    pages: [
      {
        path: '/custom-page.html',
        layout: 'CustomLayout',
      },
    ],
    docsDir: '/docs',
    navbar: ['/', '/get-started', '/install-vuepress'],
  }),

  

  bundler: viteBundler(),
})
