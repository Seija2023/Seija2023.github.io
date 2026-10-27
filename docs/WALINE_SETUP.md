# 启用匿名评论：Waline 配置指南

博客已部署 Waline v3：服务端 `https://seija-waline.vercel.app/`，管理后台 `https://seija-waline.vercel.app/ui`，数据库为 Neon PostgreSQL `neon-aero-xylophone`。文章底部与 `/guestbook` 已启用评论组件。

## 1. 部署服务端（需要网站管理员自己的第三方账户）

依据 [Waline 官方指南](https://waline.js.org/guide/get-started/) 将 Waline 服务端部署到 Vercel，并按照官方指引连接 Neon PostgreSQL 数据库。免费的个人方案存在资源与用途限制，请保持在免费额度内。

部署后，访问 `https://你的-waline-地址/ui/register` 注册第一个管理员（该管理员拥有评论审核权限），并妥善保存密码。无需向任何第三方透露数据库密码或服务端密钥。

## 2. 配置反垃圾（在 Vercel 后台设置服务端环境变量）

| 变量 | 建议值 | 用途 |
| --- | --- | --- |
| `SITE_NAME` | `Seija's Blog` | 网站名称 |
| `SITE_URL` | `https://seija2023.github.io` | 博客地址 |
| `SECURE_DOMAINS` | `seija2023.github.io,你的-waline-服务域名` | 允许访问的站点域名 |
| `COMMENT_AUDIT` | `true` | 先审核、后公开 |
| `IPQPS` | `60` | 同一 IP 评论发送间隔（秒） |
| `LOGIN` | 不设置为 `force` | 允许访客免注册发表评论 |
| `TURNSTILE_KEY` | 申请的 Turnstile 网站密钥 | 验证码前端公钥 |
| `TURNSTILE_SECRET` | 申请的 Turnstile 密钥 | 验证码服务端密钥（机密） |
| `AKISMET_KEY` | 有效的 Akismet 密钥或按官方默认配置 | 垃圾评论识别 |

请根据 [Waline 环境变量文档](https://waline.js.org/reference/server/env.html) 配置，确认变量生效后重新部署。不要把 `TURNSTILE_SECRET`、数据库连接串或任何访问令牌放进公开的 GitHub 仓库。

## 3. 激活本博客的评论组件

修改 `src/config.ts` 的 Waline 区块：

```ts
waline: {
  enable: true,
  serverURL: "https://你的-waline-地址.vercel.app",
  // 其余参数保持原样
},
```

如果启用 Turnstile，GitHub 仓库 **Settings → Secrets and variables → Actions → Variables** 可设置非机密的 `PUBLIC_TURNSTILE_SITE_KEY`，同时把该变量通过 Pages 工作流的构建环境传递给 Astro（工作流现已支持传递此变量）；也可以在项目构建环境设置后再编译。真正的 `TURNSTILE_SECRET` 只能存放在 Waline 服务端。

## 4. 验收清单

- 文章评论区和留言板均加载正常，手机端和电脑端均可显示。
- 普通访客无需账号，只填写昵称即可提交。
- 邮箱可选；新评论进入后台审核，不立即公开。
- 短时间大量提交被限流，Turnstile 验证由服务端完成。
- 管理员可以在 `/ui` 通过审核、删除垃圾评论。
- 定期备份 Neon 数据库；GitHub 文章备份不包括数据库评论。

> 注：未完成外部服务端配置时，前端不会接受评论。这是网站安全设计，并非网页部署故障。
