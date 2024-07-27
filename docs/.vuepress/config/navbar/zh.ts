import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
    "/demo/",
    {
        text: "云原生",
        icon: "cloud",
        link: "/k8s/",
    },
    {
        text: "Golang",
        icon: "golang",
        link: "/golang/",
    },
    { text: "技术书籍", icon: "book", link: "/books/" },
    { text: "网站技术", icon: "code", link: "/webs/" },
    {
        text: "V2 文档",
        icon: "book",
        link: "https://theme-hope.vuejs.press/zh/",
    },
]);
