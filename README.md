# Seija's Blog

个人博客：技术分享、生活记录与项目作品。

**网站**：https://seija2023.github.io/  
**项目**：https://github.com/Seija2023/Seija2023.github.io

## 发布与管理文章

本站已经配置 [Pages CMS](https://app.pagescms.org/) 可视化文章管理。首次使用请用 GitHub 登录并授权访问此仓库；详细说明见 [Pages CMS 使用指南](docs/CONTENT_EDITOR.md)。

文章继续存储在 `src/content/blog/` 中。你可以在 Pages CMS 直接创建、编辑、上传图片、设置分类及标签；保存后提交到 `main`，GitHub Actions 自动更新博客。高级 Markdown / LaTeX / Mermaid 内容建议使用源码模式。

也可以直接在 GitHub 编辑 Markdown 文件，不必使用 CMS。

## 栏目
- 首页、技术分享、生活记录、项目作品、文章归档、留言板、关于。
- 技术分享与生活记录的文章通过 `categories` 分类。
- 所有文章和页面都使用 Astro 构建，通过 GitHub Actions 发布到 GitHub Pages。

## 匿名评论

本站的 [留言板](https://seija2023.github.io/guestbook/) 和文章底部使用 Waline，访客无需注册即可留言，正常评论提交后直接公开（垃圾评论仍可能被系统拦截）。服务端部署于 Vercel，评论数据保存在 Neon PostgreSQL。详细配置参见 [Waline 配置文档](docs/WALINE_SETUP.md)。

## 版权
文章、图片等站点内容请使用自己拥有版权或已获得许可的素材。软件许可详见 `LICENSE`。

本站项目模板来源于 [D-Sketon / Astro Theme Reimu](https://github.com/D-Sketon/astro-theme-reimu)。
