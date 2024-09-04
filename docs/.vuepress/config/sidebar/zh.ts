import { sidebar } from "vuepress-theme-hope";
import { books } from "./zh/books.js";
import { k8s } from "./zh/k8s.js";
import { golang } from "./zh/golang.js";
import { webs } from "./zh/web.js";

export const zhSidebar = sidebar({
    '/golang/': golang,
    '/k8s/': k8s,
    "/books/": books,
    "/webs/": webs,
});
