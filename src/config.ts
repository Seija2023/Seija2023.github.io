export default {
  site: {
    title: "Seija's Blog",
    subtitle: "技术 · 生活 · 思考",
    description: "个人技术分享、项目实践与生活记录",
    keywords: "Seija2023, 技术博客, 科研, 生活记录, Astro",
    author: "Seija",
    language: "zh-CN",
  },

  sidebar: {
    avatar: "/images/avatar.svg",
    position: "right", // left or right
  },

  widgets: ["recent_posts", "category", "tag", "tagcloud"],

  menu: [
    { name: "首页", url: "/" },
    { name: "技术分享", url: "/tech" },
    { name: "生活记录", url: "/life" },
    { name: "项目作品", url: "/projects" },
    { name: "文章归档", url: "/archives" },
    { name: "留言板", url: "/guestbook" },
    { name: "关于", url: "/about" },
  ],

  banner: "/images/hero.svg", // which means themes/reimu/source/images/banner.webp
  // You can also write it in the form of the following url
  // banner: "https://example.com"

  // If you want to use the srcset attribute, please enable it
  banner_srcset: {
    enable: false,
    srcset: [],
  },

  footer: {
    since: 2026, // first year of the blog
    powered: false,
    count: false,
    busuanzi: false,
    icp: {
      icpnumber: "",
      beian: "",
      recordcode: "",
    },
    moe_icp: {
      icpnumber: "",
    }
  },

  analytics: {
    baidu_analytics: false,
    google_analytics: false,
    clarity: false,
  },

  social: {
    github: "https://github.com/Seija2023",
  },

  // https://valine.js.org
  valine: {
    enable: false, // if you want to use valine,please set this value is true
    appId: "", // leancloud application app id
    appKey: "", // leancloud application app key
    pageSize: 10, // comment list page size
    avatar: "mp", // gravatar style https://valine.js.org/#/avatar
    lang: "zh-cn", // i18n: zh-cn/en
    placeholder: "Just go go", // valine comment input placeholder(like: Please leave your footprints )
    guest_info: "nick,mail,link", //valine comment header info
    recordIP: true, // whether to record the IP address of the commenters
    highlight: true, // whether to highlight the code blocks
    visitor: false, // whether to display the number of visitors
    serverURLs: "", // leancloud server url
  },

  // https://waline.js.org/
  waline: {
    // Set serverURL to your Waline backend URL and enable after deploying the backend.
    enable: false,
    serverURL: "",
    lang: "zh-CN",
    locale: {}, // https://waline.js.org/guide/features/i18n.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E8%AF%AD%E8%A8%80
    emoji: [],
    meta: ["nick", "mail", "link"],
    requiredMeta: ["nick"],
    wordLimit: 1000,
    pageSize: 10,
    pageview: false,
  },

  // https://github.com/gitalk/gitalk/blob/master/readme-cn.md
  gitalk: {
    enable: false,
    clientID: "",
    clientSecret: "",
    repo: "",
    owner: "",
    admin: [],
  },

  // https://giscus.app/zh-CN
  giscus: {
    enable: false,
    repo: "",
    repoId: "",
    category: "",
    categoryId: "",
    mapping: "pathname",
    strict: 0,
    reactionsEnabled: 1,
    emitMetadata: 0,
    inputPosition: "bottom",
  },

  // https://utteranc.es
  utterances: {
    enable: false,
    repo: "owner/repo", // Change this to "Your GitHub Username/The Repository Name" used for storing blog comments
    issue_term: "title",
    theme: "auto", // auto means to automatically adapt to dark and light themes, you can also use specific themes like github-light, github-dark, preferred-color-scheme, etc.
  },

  // https://twikoo.js.org
  twikoo: {
    enable: false,
    envId: "", // 腾讯云环境填 envId；Vercel 环境填地址（https://xxx.vercel.app）
    region: "",
  },

  // https://disqus.com
  disqus: {
    enable: false,
    shortname: "", // your disqus shortname
    count: true,
  },

  friend: [],

  copyright: {
    enable: false,
    content: {
      author: true,
      link: true,
      title: true,
      date: false,
      updated: false,
      license: true,
      license_type: 'by-nc-sa',
    },
  },

  preloader: {
    enable: false,
    text: "Loading...",
    rotate: true, // whether to rotate the icon
  },

  // see https://github.com/D-Sketon/mouse-firework
  firework: {
    enable: false,
    disable_on_mobile: false,
    options: {
      excludeElements: ["a", "button"],
      particles: [
        {
          shape: "circle",
          move: ["emit"],
          easing: "easeOutExpo",
          colors: [
            "var(--red-1)",
            "var(--red-2)",
            "var(--red-3)",
            "var(--red-4)",
          ],
          number: 20,
          duration: [1200, 1800],
          shapeOptions: {
            radius: [16, 32],
            alpha: [0.3, 0.5],
          },
        },
        {
          shape: "circle",
          move: ["diffuse"],
          easing: "easeOutExpo",
          colors: ["var(--red-0)"],
          number: 1,
          duration: [1200, 1800],
          shapeOptions: {
            radius: 20,
            alpha: [0.2, 0.5],
            lineWidth: 6,
          },
        },
      ],
    },
  },
  // show categories card on home page
  home_categories: {
    enable: false,
    content: [
      {
        categories: ""
      },
    ]
  },
  triangle_badge: {
    enable: false,
    type: "github",
    link: "https://github.com/Seija2023/Seija2023.github.io",
  },
  // whether to display the notification when the article is outdated
  outdate: {
    enable: false,
    daysAgo: 180, // The number of days after which the article is considered outdated
  },

  share: ["weixin", "twitter"],

  sponsor: {
    enable: false,
    qr: [
      // { name: "支付宝", src: "/sponsor/alipay.jpg" },
      // { name: "微信", src: "/sponsor/wechat.png" },
    ],
  },
};
