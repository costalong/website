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

        iconPrefix: "iconfont icon-",
        // : "https://at.alicdn.com/t/c/font_3748819_l4201g8napn.css",
        iconAssets: "//at.alicdn.com/t/c/font_860724_0v5z7pmsqza.css",

        favicon: "/favicon.ico",
        logo: "/logo.png",
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
            shiki: {
                theme: "nord",
                themes: {
                    light: "one-light",
                    dark: "one-dark-pro",
                },
            },
            copyCode: {
                showInMobile: true
            },
        }
    },
    { custom: true }
);