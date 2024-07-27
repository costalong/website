import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./config/navbar/";
import { zhSidebar } from "./config/sidebar";
import { comment, components, mdEnhance } from "./plugins/index";
export default hopeTheme(
    {
        hostname: "https://costalong.com",
        author: {
            name: "Costa Long",
            url: "https://costalong.com",
        },
        // iconPrefix: "fas fa-",
        // 建议替换为自建 CDN，否则部分浏览器可能无法正确显示图标。2024.07 开始，uBlock Origin 将拦截公有 CDN 的 js 请求。
        // iconAssets: ["https://cdn.staticfile.net/font-awesome/6.5.2/js/all.min.js"],
        // iconAssets: "//at.alicdn.com/t/font_2410206_vuzkjonf4s9.css",
        // iconAssets: "iconify",
        // iconAssets: "https://at.alicdn.com/t/c/font_3748819_l4201g8napn.css",
        iconAssets: 'fontawesome-with-brands',

        favicon: "/favicon.ico",
        logo: "https://theme-hope-assets.vuejs.press/logo.svg",
        repo: "costalong/website",
        docsDir: "docs",

        copyright: "基于 MIT 协议，© 2024-至今 Mr.Hope",
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
                // navbarLayout: {
                //     start: ["Brand"],
                //     center: ["Links"],
                //     end: ["Repo", "Search"],
                // },
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
            comment: comment,
            components: components,
            mdEnhance: mdEnhance,
        }
    },
    { custom: true }
);