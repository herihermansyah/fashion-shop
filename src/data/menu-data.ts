export interface MenuDataType {
  title: string;
  content: {
    subTitle: string;
    href: string;
  }[];
}

export const helpMenuData: MenuDataType[] = [
  {
    title: "need help",
    content: [
      {subTitle: "contact us", href: "/t"},
      {subTitle: "trach order", href: "/t"},
      {subTitle: "return & refunds", href: "/t"},
      {subTitle: "FAQ's", href: "/t"},
      {subTitle: "careeer", href: "/t"},
    ],
  },
];

export const companyMenuData: MenuDataType[] = [
  {
    title: "company",
    content: [
      {subTitle: "about us", href: "/t"},
      {subTitle: "euphoria blog", href: "/t"},
      {subTitle: "euphoriastan", href: "/t"},
      {subTitle: "collaboration", href: "/t"},
      {subTitle: "media", href: "/t"},
    ],
  },
];

export const infoMenuData: MenuDataType[] = [
  {
    title: "more info",
    content: [
      {subTitle: "terms & conditions", href: "/t"},
      {subTitle: "privacy policy", href: "/t"},
      {subTitle: "shipping policy", href: "/t"},
      {subTitle: "sitemap", href: "/t"},
    ],
  },
];

export const locationMenuData: MenuDataType[] = [
  {
    title: "location",
    content: [
      {subTitle: "support@euphoria.in", href: "/t"},
      {subTitle: "eklingpura chouraha", href: "/t"},
      {subTitle: "shipping policy", href: "/t"},
      {
        subTitle: "(NH 8- Near mahadev hotel)",
        href: "/t",
      },
    ],
  },
];
