import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./config/navbar/";
import { zhSidebar } from "./config/sidebar";
import { ThemeLocaleOptions } from "vuepress-theme-hope";

export default hopeTheme(
    {
        hostname: "https://costalong.com",
        author: {
            name: "Costa Long",
            url: "https://costalong.com",
        },
        iconPrefix: "fas fa-",
        // 建议替换为自建 CDN，否则部分浏览器可能无法正确显示图标。2024.07 开始，uBlock Origin 将拦截公有 CDN 的 js 请求。
        // iconAssets: ["https://cdn.staticfile.net/font-awesome/6.5.2/js/all.min.js"],
        iconAssets: [
            "fontawesome",
            "https://cdn.staticfile.net/font-awesome/6.5.2/js/all.min.js",
        ],
        favicon: "/favicon.ico",
        logo: "https://theme-hope-assets.vuejs.press/logo.svg",
        repo: "vuepress-theme-hope/online-demo",
        docsDir: "docs",
        locales: {
            "/": {
                // Navbar
                navbar: zhNavbar,
                // Sidebar
                sidebar: zhSidebar,
                footer: "Default footer",
                displayFooter: true,
                metaLocales: {
                    editLink: "Edit this page on GitHub",
                },
            }
        },
        encrypt: {
            config: {
                // eslint-disable-next-line @typescript-eslint/naming-convention
                "/demo/encryption": ["1234"],
            },
        },
        plugins: {
            // You should generate and use your own comment service
            comment: {
                provider: "Giscus",
                repo: "https://github.com/costa92/giscus",
                repoId: "R_kgDOMZJYug",
                category: "Announcements",
                categoryId: "DIC_kwDOMZJYus4ChDGG",
            },
            components: {
                components: ["Badge", "VPCard"],
            },
            mdEnhance: {
                align: true,
                attrs: true,
                codetabs: true,
                component: true,
                demo: true,
                figure: true,
                imgLazyload: true,
                imgSize: true,
                include: true,
                mark: true,
                spoiler: true,
                stylize: [
                    {
                        matcher: "Recommended",
                        replacer: ({ tag }) => {
                            if (tag === "em")
                                return {
                                    tag: "Badge",
                                    attrs: { type: "tip" },
                                    content: "Recommended",
                                };
                        },
                    },
                ],
                sub: true,
                sup: true,
                tabs: true,
                tasklist: true,
                vPre: true,
            },
        }
    },
    { custom: true }
);