import { sidebar } from "vuepress-theme-hope";
import { books } from "./zh/books.js";
import { k8s } from "./zh/k8s.js";
import { golang } from "./zh/golang.js";

export const zhSidebar = sidebar({
    "//": [
        "",
        "portfolio",
        {
            text: "案例",
            icon: "laptop-code",
            prefix: "demo/",
            link: "demo/",
            children: "structure",
        },
        {
            text: "文档",
            icon: "book",
            prefix: "guide/",
            children: "structure",
        },
        {
            text: "幻灯片",
            icon: "person-chalkboard",
            link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
        },
    ],
    '/golang/': golang,
    '/k8s/': k8s,
    "/books/": books,
});
