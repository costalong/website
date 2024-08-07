import { defineClientConfig } from "vuepress/client";
import { hasGlobalComponent } from "/home/hellotalk/code/blog/website/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.39_vuepress@2.0.0-rc.14/node_modules/@vuepress/helper/lib/client/index.js";

import { useStyleTag } from "/home/hellotalk/code/blog/website/node_modules/.pnpm/@vueuse+core@10.11.0_vue@3.4.33/node_modules/@vueuse/core/index.mjs";
import FontIcon from "/home/hellotalk/code/blog/website/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.52_sass-loader@14.2.1_vuepress@2.0.0-rc.14/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import Badge from "/home/hellotalk/code/blog/website/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.52_sass-loader@14.2.1_vuepress@2.0.0-rc.14/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import VPCard from "/home/hellotalk/code/blog/website/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.52_sass-loader@14.2.1_vuepress@2.0.0-rc.14/node_modules/vuepress-plugin-components/lib/client/components/VPCard.js";

import "/home/hellotalk/code/blog/website/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.52_sass-loader@14.2.1_vuepress@2.0.0-rc.14/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("VPCard")) app.component("VPCard", VPCard);
    
  },
  setup: () => {
    useStyleTag(`\
@import url("//at.alicdn.com/t/c/font_860724_kuhb2h5w38m.css");
`);
  },
  rootComponents: [

  ],
});
