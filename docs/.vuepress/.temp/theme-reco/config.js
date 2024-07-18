
  import { defineAsyncComponent } from 'vue'
import { defineClientConfig } from 'vuepress/client'

import { applyClientSetup } from '/Users/costalong/code/web/vuepress-starter/node_modules/.pnpm/vuepress-theme-reco@2.0.0-rc.16_@algolia+client-search@4.24.0_search-insights@2.15.0_vuepress@2.0.0-rc.13/node_modules/vuepress-theme-reco/lib/client/clientSetup.js'
import { applyClientEnhance } from '/Users/costalong/code/web/vuepress-starter/node_modules/.pnpm/vuepress-theme-reco@2.0.0-rc.16_@algolia+client-search@4.24.0_search-insights@2.15.0_vuepress@2.0.0-rc.13/node_modules/vuepress-theme-reco/lib/client/clientEnhance.js'

import * as layouts from '/Users/costalong/code/web/vuepress-starter/node_modules/.pnpm/vuepress-theme-reco@2.0.0-rc.16_@algolia+client-search@4.24.0_search-insights@2.15.0_vuepress@2.0.0-rc.13/node_modules/vuepress-theme-reco/lib/client/layouts/index.js'

  const layoutsFromDir = {}
export default defineClientConfig({
  enhance(...args) {
    applyClientEnhance(...args)
  },
  setup() {
    applyClientSetup()
  },
  // @ts-ignore
  layouts: { ...layouts, ...layoutsFromDir },
})
