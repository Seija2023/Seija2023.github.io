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

## 匿名评论：两个网址有什么区别？

本站使用 Waline 提供免注册留言功能，Vercel 运行服务端、Neon PostgreSQL 保存评论数据。

| 地址 | 定位 | 用途 |
| --- | --- | --- |
| [博客留言板](https://seija2023.github.io/guestbook/) | **访客留言入口（推荐）** | 博客正式页面，供读者公开留言、交流；显示属于留言板这一路径的评论。 |
| [Waline Example](https://seija-waline.vercel.app/) | **评论服务端的默认演示首页** | 部署 Waline 时自动生成的示例页面，用于确认服务可访问；它不是第二个博客，也不是本站留言板。 |
| [Waline 管理后台](https://seija-waline.vercel.app/ui) | **站长管理入口** | 登录后审核、管理、删除评论，不是访客留言地址。 |

**重要区别：** Waline Example 和博客留言板使用**同一套 Waline 服务及 Neon 数据库**，但 Waline 按页面路径区分评论。因此，在 `seija-waline.vercel.app/` 演示首页留下的评论，**不会自动出现在** `seija2023.github.io/guestbook/` 的留言列表中；博客各篇文章的评论也分别归属于对应文章页面。

**访客请使用博客留言板或文章底部的评论区**，无需注册 GitHub 账号，填写昵称即可留言；评论需审核后公开。日常维护只需打开 Waline 管理后台，不需要在示例首页发表内容。

评论服务端的代码单独存放于私有仓库 `Seija2023/seija-waline`，与本博客的公开仓库分开管理。管理、反垃圾和数据库配置参见 [Waline 配置文档](docs/WALINE_SETUP.md)。

## 版权
文章、图片等站点内容请使用自己拥有版权或已获得许可的素材。软件许可详见 `LICENSE`。

本站项目模板来源于 [D-Sketon / Astro Theme Reimu](https://github.com/D-Sketon/astro-theme-reimu)。
