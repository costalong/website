import { arraySidebar } from "vuepress-theme-hope";
export const linux = arraySidebar(
  [
    {
      text: "Linux",
      prefix: '/linux/',
      icon: "computer",
      collapsible: true,
      children: [
        {
          text: "命令",
          prefix: 'commands/',
          icon: "commands",
          collapsible: true,
          link: "commands/",
          children: [
            "common",
          ],
        },
      ]
    },
  ]
)