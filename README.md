# coffeemil.github.io

> 把写过的代码、踩过的坑、想明白的事，都记在这里。

个人博客 —— **像素记事本**。基于 **Astro** 静态生成，部署在 GitHub Pages。

## 特性

- 🎨 **水墨视觉系统** —— 宣纸底 + 墨色笔触 + 朱砂点缀，纯 CSS/Canvas 实现，零图片依赖
- ⚡ **零 JS 优先** —— 页面默认输出纯 HTML，只有墨点背景和导航菜单发送少量脚本
- 📝 **类型安全的内容** —— Content Collections + Zod 校验 frontmatter
- 🏷️ **完整博客功能** —— 文章列表、详情、标签、归档、RSS、404
- 🎮 **造物入口** —— 收录「Redline1612N」Canvas 小游戏，可直接试玩（个人作品，保留所有权利）
- 📱 **响应式** —— 移动端汉堡菜单、自适应排版
- ♿ **无障碍** —— 尊重 `prefers-reduced-motion`，语义化标签，键盘可导航

## 快速开始

```bash
npm install
npm run dev      # 开发服务器 http://localhost:4321
npm run build    # 构建到 dist/
npm run preview  # 预览构建产物
```

## 项目结构

```
├── public/
│   └── favicon.svg             # 云纹 / 回纹图标（与 Sigil 同源）
├── src/
│   ├── components/
│   │   ├── Nav.astro        # 导航栏（含移动端菜单）
│   │   ├── Footer.astro     # 页脚
│   │   ├── PostCard.astro   # 文章卡片
│   │   ├── Sigil.astro      # 云纹 / 回纹 SVG（全站图标唯一来源）
│   │   └── Starfield.astro  # 墨点飘浮 Canvas
│   ├── content/posts/       # Markdown 文章
│   ├── layouts/
│   │   └── BaseLayout.astro # 基础布局（SEO / 背景层 / 动画）
│   ├── pages/
│   │   ├── index.astro      # 首页
│   │   ├── about.astro      # 关于
│   │   ├── archive.astro    # 归档
│   │   ├── works.astro      # 造物列表页
│   │   ├── game.astro       # 游戏详情页
│   │   ├── 404.astro        # 404
│   │   ├── rss.xml.ts       # RSS 订阅
│   │   ├── posts/           # 文章列表 + 详情
│   │   └── tags/            # 标签列表 + 详情
│   ├── styles/global.css    # 主题系统
│   ├── consts.ts            # 站点配置
│   └── content.config.ts    # 内容 schema
└── .github/workflows/deploy.yml
```

## 写一篇新文章

在 `src/content/posts/` 下新建 `.md` 文件：

```markdown
---
title: '文章标题'
description: '一句话摘要，会显示在卡片和 SEO 里'
pubDate: 2026-10-11
updatedDate: 2026-10-12   # 可选，最后修订日期
tags: ['TypeScript', 'CSS']
category: '前端'
chunibyo: 3        # 笔记等级 1-5，越高越完整（随手记 → 压卷）
featured: false    # 是否在首页置顶
draft: false       # true 则不发布
---

正文内容……
```

文件名即 URL slug，例如 `my-post.md` → `/posts/my-post/`。

字段定义见 [src/content.config.ts](src/content.config.ts)，笔记等级 1-5 对应的文案见 [src/consts.ts](src/consts.ts) 中的 `CHUNIBYO_LEVELS`。

## 自定义

站点信息集中在 [src/consts.ts](src/consts.ts)：

```ts
export const SITE = {
  title: 'coffeemil',
  titleFull: 'COFFEEMIL',
  epithet: '像素记事本',
  description: 'Agent 开发工程师 / 像素记事本。……',
  author: 'coffeemil',
  lang: 'zh-CN',
  url: 'https://coffeemil.github.io',
  incantation: '把写过的代码、踩过的坑、想明白的事，都记在这里。',
  heroTitle: '像素记事本',
  heroSubtitle: '代码开发 · 技术札记 · 造物手记',
  footerQuote: '「边界之内，皆是 0 与 1 的疆土。」',
  social: {
    github: 'https://github.com/coffeemil',
    email: 'mailto:coffeemil@example.com',
  },
};
```

导航项在同文件的 `NAV_LINKS` 中维护。主题色在 [src/styles/global.css](src/styles/global.css) 顶部的 `:root` 变量里。

## 部署

推送到 `main` 分支后，GitHub Actions 会自动构建并部署。

首次部署前，需要在仓库 **Settings → Pages → Build and deployment** 中把 Source 设为 **GitHub Actions**。

## 技术栈

- [Astro](https://astro.build/) 5.x —— 静态站点生成
- [@astrojs/rss](https://docs.astro.build/en/guides/rss/) —— RSS 订阅
- [@astrojs/check](https://docs.astro.build/en/guides/typescript/) + TypeScript —— 类型检查（`npm run astro check`）
- 原生 Canvas 2D —— 墨点背景与游戏
- 无 CSS 框架，手写主题系统

## License

内容版权归作者所有，代码部分可自由参考。

「Redline1612N」为个人作品，保留所有权利，不得商用。
