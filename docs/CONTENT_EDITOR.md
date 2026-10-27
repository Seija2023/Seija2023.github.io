# Pages CMS：博客文章管理指南

本博客采用 Astro + GitHub Pages。文章以 Markdown 文件形式保存在 `src/content/blog/`，通过 GitHub Actions 自动部署。Pages CMS 是 GitHub 仓库的可视化内容编辑器，**不需要再配置数据库、Vercel 或服务器**。

## 初次开启后台（只需一次 GitHub 账号授权）

1. 打开 **https://app.pagescms.org/**，选择 **Sign in with GitHub**。
2. 根据 Pages CMS 页面提示，安装/授权其 **GitHub App**。可以选择 **Only select repositories**，仅授予 `Seija2023/Seija2023.github.io` 仓库访问权限，不必授权 `seija-waline` 或其他项目。
3. 打开仓库 `Seija2023/Seija2023.github.io`，选择 `main` 分支。
4. 根目录已有 `.pages.yml`，应显示 **博客文章** 集合，以及现有的三篇 Markdown 文章。**不需要重新创建 .pages.yml。**

授权须在你的 GitHub 账户里由你本人完成。不要把密码、GitHub Token 发给任何人。

## 日常新建与编辑文章

1. 进入 **博客文章**，点击新建文章或打开现有文章。
2. 填写标题、简介、发布日期、分类、标签、摘要（可选）、封面（可选）及正文。
3. **新建文件名建议使用英文或拼音**，如 `power-electronics-notes.md`；文件名决定公开文章的 URL，一旦发布，尽量不要随意改名，以免旧链接及 Waline 页面评论路径失效。
4. 选择 **保存/提交**，Pages CMS 会将 Markdown 修改提交到 GitHub `main` 分支，现有 GitHub Actions 会自动重新构建博客。保存不是仅存在草稿箱：正常情况下它会触发公开发布。
5. 打开 https://seija2023.github.io/ 检查最终页面和排版。

**分类名称非常重要：** 博客的 `/tech` 只聚合 `技术分享` 分类，`/life` 只聚合 `生活记录` 分类。新分类与标签可在 CMS 中输入，但**新增顶部独立导航栏目**需要另行修改 `src/config.ts` 和 Astro 页面，单独添加分类不会自动增加顶栏按钮。

## 图片和技术内容

- CMS 上传的文章图片存放到仓库 `public/images/posts/`，公开引用路径是 `/images/posts/文件名`。
- 一般生活随笔可以在 **Editor（可视化）** 模式编辑，插入图片或普通 Markdown。
- 数学公式（LaTeX）、Mermaid 流程图、代码块及复杂语法，建议在 **Source（源码）** 模式下编写和检查。富文本编辑器可能改变特殊语法；编辑复杂技术文章前可以利用 GitHub 历史记录查看差异。
- `.pages.yml` 配置了 `settings.content.merge: true`，以尽量保留编辑器之外的既有 frontmatter 字段（例如 `updatedDate`）。对复杂 MDX 页面和主题代码不建议直接使用这套文章表单。

## 修改哪些内容需要代码？

| 修改需求 | 操作方式 |
| --- | --- |
| 新增、编辑、删除文章 | Pages CMS |
| 标题、分类、标签、封面、正文 | Pages CMS |
| 技术分享、生活记录分类归档 | 在文章中填写对应 `categories` 值 |
| 新的顶部菜单、独立栏目、项目展示页面 | 修改 Astro 页面与 `src/config.ts` |
| 网站主题、功能、评论系统 | 修改代码，Waline 在独立服务端仓库中管理 |

### 相关链接

- [Pages CMS 管理后台](https://app.pagescms.org/)
- [Pages CMS 官方配置文档](https://pagescms.org/docs/configuration/)
- [博客仓库](https://github.com/Seija2023/Seija2023.github.io)
- [本站博客](https://seija2023.github.io/)
