import { arraySidebar } from "vuepress-theme-hope";
export const golang = arraySidebar(
    [
        {
            text: "golang的文档",
            icon: "golang2",
            prefix: '/golang/',
            collapsible: true,
            children: [
                'home',
                {
                    text: "监控",
                    prefix: 'performance/',
                    icon: "performance",
                    collapsible: true,
                    link: "performance/",
                    children: [
                        "sentry",
                    ],
                },
                {
                    text: "go 常用的包",
                    prefix: 'packages/',
                    icon: "Package",
                    collapsible: true,
                    link: "packages/",
                    children: [
                        "slices",
                    ],
                },
                {
                    text: "测试",
                    prefix: 'tests/',
                    icon: "test",
                    collapsible: true,
                    link: "tests/",
                    children: [
                        "gomonkey",
                        "gomock",
                        "goconvey",
                    ],
                },
            ],
        }
    ]
)

