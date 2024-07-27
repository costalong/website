
export const mdEnhance = {
    align: true,
    attrs: true,
    codetabs: true,
    demo: true,
    figure: true,
    flowchart: true,
    gfm: true,
    breaks: false,
    imgLazyload: true,
    imgSize: true,
    include: true,
    katex: true,
    mark: true,
    mermaid: true,
    presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
    },
    stylize: [
        {
            matcher: "Recommended",
            replacer: ({ tag }) => {
                if (tag === "em")
                    return {
                        tag: "Badge",
                        attrs: { type: "tip" },
                        content: "Recommended",
                    }
            },
        },
    ],
    sub: true,
    sup: true,
    tabs: true,
    vPre: true,
}