import { defineCollection, z } from 'astro:content';

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    displayDate: z.string(),
    pubDate: z.date(),
    category: z.string(),
    excerpt: z.string().optional(),
  }),
});

export const collections = { news };
