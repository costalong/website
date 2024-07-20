import { defineClientConfig } from "vuepress/client";
import CodeTabs from "/Users/costalong/code/web/vuepress-starter/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.44_markdown-it@14.1.0_vuepress@2.0.0-rc.12/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import CodeDemo from "/Users/costalong/code/web/vuepress-starter/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.44_markdown-it@14.1.0_vuepress@2.0.0-rc.12/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "/Users/costalong/code/web/vuepress-starter/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.44_markdown-it@14.1.0_vuepress@2.0.0-rc.12/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import "/Users/costalong/code/web/vuepress-starter/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.44_markdown-it@14.1.0_vuepress@2.0.0-rc.12/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import { useHintContainers } from "/Users/costalong/code/web/vuepress-starter/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.44_markdown-it@14.1.0_vuepress@2.0.0-rc.12/node_modules/vuepress-plugin-md-enhance/lib/client/composables/useHintContainers.js";
import "/Users/costalong/code/web/vuepress-starter/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.44_markdown-it@14.1.0_vuepress@2.0.0-rc.12/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";
import Tabs from "/Users/costalong/code/web/vuepress-starter/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.44_markdown-it@14.1.0_vuepress@2.0.0-rc.12/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";
import "/Users/costalong/code/web/vuepress-starter/node_modules/.pnpm/@mdit+plugin-spoiler@0.12.0_markdown-it@14.1.0/node_modules/@mdit/plugin-spoiler/spoiler.css";
import "/Users/costalong/code/web/vuepress-starter/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.44_markdown-it@14.1.0_vuepress@2.0.0-rc.12/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
    app.component("Tabs", Tabs);
  },
  setup: () => {
useHintContainers();
  }
});
