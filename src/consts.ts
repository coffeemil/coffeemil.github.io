/**
 * 站点全局配置 —— 改这里就能改全站信息
 */
export const SITE = {
  title: 'coffeemil',
  /** 全称 */
  titleFull: 'COFFEEMIL',
  /** 称号 */
  epithet: '像素记事本',
  description:
    'Agent 开发工程师 / 像素记事本。于此收录我的技术札记、踩坑随笔与一点文人气。',
  author: 'coffeemil',
  lang: 'zh-CN',
  url: 'https://coffeemil.github.io',
  /** 题记，会显示在首页 */
  incantation: '把写过的代码、踩过的坑、想明白的事，都记在这里。',
  /** 首页主标题 */
  heroTitle: '像素记事本',
  /** 首页主标题下方的副题 */
  heroSubtitle: '代码开发 · 技术札记 · 造物手记',
  /** 页脚题跋 */
  footerQuote: '「边界之内，皆是 0 与 1 的疆土。」',
  social: {
    github: 'https://github.com/coffeemil',
    email: 'mailto:coffeemil@example.com',
  },
} as const;

export const NAV_LINKS = [
  { href: '/', label: '首页', code: 'HOME' },
  { href: '/posts', label: '文章', code: 'POSTS' },
  { href: '/tags', label: '标签', code: 'TAGS' },
  { href: '/archive', label: '归档', code: 'ARCHIVE' },
  { href: '/works', label: '造物', code: 'WORKS' },
  { href: '/about', label: '关于', code: 'ABOUT' },
] as const;

/** 笔记等级 → 显示文本 */
export const CHUNIBYO_LEVELS: Record<number, string> = {
  1: '随手记',
  2: '草记',
  3: '整理',
  4: '成篇',
  5: '压卷',
};
