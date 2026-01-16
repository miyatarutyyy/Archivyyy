// src/data/refGroups.ts
export const refGroups = [
  {
    title: "【外部】",
    ariaLabel: "外部リンク",
    links: [
      {
        href: "https://x.com/MIYATAstudyyyne",
        label: "Twitter / X",
        desc: "@MIYATAstudyyyne",
        rel: "me",
        icon: "x",
      },
      {
        href: "https://github.com/miyatarutyyy",
        label: "GitHub",
        desc: "@miyatarutyyy",
        rel: "me",
        icon: "github",
      },
    ],
  },
  {
    title: "【相互】",
    ariaLabel: "相互リンク",
    links: [
      {
        href: "",
        label: "Friend A",
        desc: "Technology & Arts Blog",
        icon: "globe",
      },
    ],
  },
] as const;
