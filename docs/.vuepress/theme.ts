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
        iconAssets: "fontawesome-with-brands",
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
                repo: "vuepress-theme-hope/giscus-discussions",
                repoId: "R_kgDOG_Pt2A",
                category: "Announcements",
                categoryId: "DIC_kwDOG_Pt2M4COD69",
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