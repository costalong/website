import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
    {
        text: "Linux",
        icon: "cloud",
        link: "/linux/",
    },
    {
        text: "云原生",
        icon: "cloud",
        link: "/k8s/",
    },
    {
        text: "Golang",
        icon: "golang2",
        link: "/golang/",
    },
    { text: "技术书籍", icon: "book", link: "/books/" },
    { text: "网站技术", icon: "code", link: "/webs/" },
]);
