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
                text: "安装",
                link: "installs/",
                prefix: "installs/",
                icon: "laptop-code",
                collapsible: true,
                children: [
                    "ubuntu-install",
                    "install-error",
                ],
            },
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
            },
            {
                text: "使用的工具",
                link: "tools/",
                prefix: "tools/",
                icon: "laptop-code",
                collapsible: true,
                children: [
                    "kubecm",
                ],
            }
        ],
    },
]
)