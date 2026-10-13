import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    category: z.string().default('未分类'),
    /** 笔记等级：1-5，越高越完整 */
    chunibyo: z.number().min(1).max(5).default(3),
    draft: z.boolean().default(false),
    /** 首页置顶 */
    featured: z.boolean().default(false),
  }),
});

export const collections = { posts };
