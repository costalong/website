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
                icon: "installs",
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
                icon: "k8s",
                collapsible: true,
                children: [
                    "pod",
                    "service",
                ],
            },
            {
                text: "网关",
                link: "gateway/",
                prefix: "gateway/",
                icon: "gateway",
                collapsible: true,
                children: [
                    "traefik",
                    "apisix",
                ],
            },
            {
                text: "使用的工具",
                link: "tools/",
                prefix: "tools/",
                icon: "tools",
                collapsible: true,
                children: [
                    "kubecm",
                ],
            }
        ],
    },
]
)