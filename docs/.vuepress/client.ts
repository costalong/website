import { defineClientConfig } from "vuepress/client";
import { setupRunningTimeFooter } from "vuepress-theme-hope/presets/footerRunningTime.js";
import { setupTransparentNavbar } from "vuepress-theme-hope/presets/transparentNavbar.js";
import WeChatLink from "./components/WeChatLink.js";
import GitHubLink from "./components/GitHubLink.js";
export default defineClientConfig({
    enhance: ({ app }) => {
        app.component("GitHubLink", GitHubLink);
        app.component("WeChatLink", WeChatLink);
    },

    setup() {
        setupRunningTimeFooter(
            new Date("2024-01-01"),
            {
                // "/": "Running time: :day days :hour hours :minute minutes :second seconds",
                "/": "已运行 :day 天 :hour 小时 :minute 分钟 :second 秒",
            },
            true,
        );
        setupTransparentNavbar({ type: "homepage", light: "#333", dark: "#bbb" });
    },
});
