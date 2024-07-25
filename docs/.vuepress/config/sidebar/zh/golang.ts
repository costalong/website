import { arraySidebar } from "vuepress-theme-hope";
export const golang = arraySidebar(
    [
        {
            text: "golang的文档",
            icon: "golang",
            prefix: 'golang/',
            collapsible: true,
            children: [
                'home',
            ],
        }
    ]
)

