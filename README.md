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

本站的 [留言板](https://seija2023.github.io/guestbook/) 和文章底部使用 Waline，访客无需注册即可留言，评论审核后公开。服务端部署于 Vercel，评论数据保存在 Neon PostgreSQL。详细配置参见 [Waline 配置文档](docs/WALINE_SETUP.md)。

## 版权
文章、图片等站点内容请使用自己拥有版权或已获得许可的素材。软件许可详见 `LICENSE`。

本站项目模板来源于 [D-Sketon / Astro Theme Reimu](https://github.com/D-Sketon/astro-theme-reimu)。
