import { defineClientConfig } from "vuepress/client";
import CodeTabs from "/Users/costalong/code/web/vuepress-starter/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_flowchart.ts@3.0.0_markdown-it@14.1.0_mathjax-full@3.2_uofu5a4ozyp2f4ty4o7phgg4vi/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import CodeDemo from "/Users/costalong/code/web/vuepress-starter/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_flowchart.ts@3.0.0_markdown-it@14.1.0_mathjax-full@3.2_uofu5a4ozyp2f4ty4o7phgg4vi/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "/Users/costalong/code/web/vuepress-starter/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_flowchart.ts@3.0.0_markdown-it@14.1.0_mathjax-full@3.2_uofu5a4ozyp2f4ty4o7phgg4vi/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import "/Users/costalong/code/web/vuepress-starter/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_flowchart.ts@3.0.0_markdown-it@14.1.0_mathjax-full@3.2_uofu5a4ozyp2f4ty4o7phgg4vi/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import FlowChart from "/Users/costalong/code/web/vuepress-starter/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_flowchart.ts@3.0.0_markdown-it@14.1.0_mathjax-full@3.2_uofu5a4ozyp2f4ty4o7phgg4vi/node_modules/vuepress-plugin-md-enhance/lib/client/components/FlowChart.js";
import "/Users/costalong/code/web/vuepress-starter/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_flowchart.ts@3.0.0_markdown-it@14.1.0_mathjax-full@3.2_uofu5a4ozyp2f4ty4o7phgg4vi/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import { useHintContainers } from "/Users/costalong/code/web/vuepress-starter/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_flowchart.ts@3.0.0_markdown-it@14.1.0_mathjax-full@3.2_uofu5a4ozyp2f4ty4o7phgg4vi/node_modules/vuepress-plugin-md-enhance/lib/client/composables/useHintContainers.js";
import "/Users/costalong/code/web/vuepress-starter/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_flowchart.ts@3.0.0_markdown-it@14.1.0_mathjax-full@3.2_uofu5a4ozyp2f4ty4o7phgg4vi/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";
import "/Users/costalong/code/web/vuepress-starter/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_flowchart.ts@3.0.0_markdown-it@14.1.0_mathjax-full@3.2_uofu5a4ozyp2f4ty4o7phgg4vi/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss"
import "/Users/costalong/code/web/vuepress-starter/node_modules/.pnpm/katex@0.16.11/node_modules/katex/dist/katex.min.css";
import "/Users/costalong/code/web/vuepress-starter/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_flowchart.ts@3.0.0_markdown-it@14.1.0_mathjax-full@3.2_uofu5a4ozyp2f4ty4o7phgg4vi/node_modules/vuepress-plugin-md-enhance/lib/client/styles/katex.scss";
import Mermaid from "/Users/costalong/code/web/vuepress-starter/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_flowchart.ts@3.0.0_markdown-it@14.1.0_mathjax-full@3.2_uofu5a4ozyp2f4ty4o7phgg4vi/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid.js";
import { injectMermaidConfig } from "/Users/costalong/code/web/vuepress-starter/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_flowchart.ts@3.0.0_markdown-it@14.1.0_mathjax-full@3.2_uofu5a4ozyp2f4ty4o7phgg4vi/node_modules/vuepress-plugin-md-enhance/lib/client//index.js";
import Tabs from "/Users/costalong/code/web/vuepress-starter/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_flowchart.ts@3.0.0_markdown-it@14.1.0_mathjax-full@3.2_uofu5a4ozyp2f4ty4o7phgg4vi/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";
import "/Users/costalong/code/web/vuepress-starter/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.52_flowchart.ts@3.0.0_markdown-it@14.1.0_mathjax-full@3.2_uofu5a4ozyp2f4ty4o7phgg4vi/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
    app.component("FlowChart", FlowChart);
    injectMermaidConfig(app);
    app.component("Mermaid", Mermaid);
    app.component("Tabs", Tabs);
  },
  setup: () => {
useHintContainers();
  }
});
