import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
    "/demo/",
    {
        text: "k8s",
        icon: "laptop-code",
        prefix: "/k8s/",
        link: "/k8s/",
    },

    {
        text: "V2 文档",
        icon: "book",
        link: "https://theme-hope.vuejs.press/zh/",
    },
]);
