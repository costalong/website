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
                    text: "测试",
                    prefix: 'tests/',
                    collapsible: true,
                    link: "tests/",
                    children: [
                        "gomonkey",
                        "gomock"
                    ],
                },
            ],
        }
    ]
)

