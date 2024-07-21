import { arraySidebar } from "vuepress-theme-hope";
export const k8s = arraySidebar([
    {
        text: "k8s的文档",
        icon: "book",
        prefix: '/k8s/',
        collapsible: true,
        children: [
            'home',
            {
                text: "k8s的资源",
                link: "resource/",
                prefix: "resource/",
                icon: "laptop-code",
                collapsible: true,
                children: [
                    "pod",
                    "service",
                ],
            }
        ],
    },
]
)