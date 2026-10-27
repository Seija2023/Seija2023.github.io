# Seija's Blog

个人博客：技术分享、生活记录与项目作品。

**网站**：https://seija2023.github.io/  
**项目**：https://github.com/Seija2023/Seija2023.github.io

## 发布文章
在 `src/content/blog/` 下新增 Markdown 文件，按现有文章设置 `title`、`description`、`pubDate` 和 `categories`，提交到 `main` 即自动发布。

## 栏目
- 首页、技术分享、生活记录、项目作品、文章归档、留言板、关于。
- 技术分享与生活记录的文章通过 `categories` 分类。
- 所有文章和页面都使用 Astro 构建，通过 GitHub Actions 发布到 GitHub Pages。

## 匿名评论
已预留 Waline 评论系统接口。要真正开放访客免注册留言，需先部署 Waline 服务端和数据库并设置反垃圾措施，然后将 `src/config.ts` 内 `waline.serverURL` 填为实际地址、将 `waline.enable` 设为 `true`。**未部署服务端时网站不会接受评论，也不会展示虚假的可用输入框。**

## 版权
文章、图片等站点内容请使用自己拥有版权或已获得许可的素材。软件许可详见 `LICENSE`。

本站项目模板来源于 [D-Sketon / Astro Theme Reimu](https://github.com/D-Sketon/astro-theme-reimu)。
