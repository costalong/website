import { defineClientConfig } from "vuepress/client";
import WeChatLink from "./components/WeChatLink.js";
import GitHubLink from "./components/GitHubLink.js";
export default defineClientConfig({
    enhance: ({ app }) => {
        app.component("GitHubLink", GitHubLink);
        app.component("WeChatLink", WeChatLink);
    },

    setup() {

    },
});
