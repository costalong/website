import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
    "/demo/",
    {
        text: "k8s",
        icon: "laptop-code",
        prefix: "/k8s/",
        children: [
            {
                text: "资源",
                icon: "lightbulb",
                prefix: "resource/",
                children: ["", "pod", "service", "volume", "configmap", "secret"],
            },
        ],
    },
    {
        text: "V2 文档",
        icon: "book",
        link: "https://theme-hope.vuejs.press/zh/",
    },
]);
