# vuepress 安装主题
##  安装 
```sh
npm install vuepress@next vuepress-theme-reco@next --save-dev
# or
yarn add vuepress@next vuepress-theme-reco@next
```

```ts
// .vuepress/config.ts
import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

export default defineUserConfig({
  theme: recoTheme({
    // options
  })
})
```