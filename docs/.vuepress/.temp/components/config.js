import { defineClientConfig } from "vuepress/client";
import { hasGlobalComponent } from "/Users/costalong/code/web/vuepress-starter/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.39_vuepress@2.0.0-rc.14/node_modules/@vuepress/helper/lib/client/index.js";

import { useScriptTag } from "/Users/costalong/code/web/vuepress-starter/node_modules/.pnpm/@vueuse+core@10.11.0_vue@3.4.33/node_modules/@vueuse/core/index.mjs";
import FontIcon from "/Users/costalong/code/web/vuepress-starter/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.52_sass-loader@14.2.1_vuepress@2.0.0-rc.14/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import Share from "/Users/costalong/code/web/vuepress-starter/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.52_sass-loader@14.2.1_vuepress@2.0.0-rc.14/node_modules/vuepress-plugin-components/lib/client/components/Share.js";

import "/Users/costalong/code/web/vuepress-starter/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.52_sass-loader@14.2.1_vuepress@2.0.0-rc.14/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    if(!hasGlobalComponent("Share")) app.component("Share", Share);
    
  },
  setup: () => {
    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/brands.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/solid.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/fontawesome.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

  },
  rootComponents: [

  ],
});
