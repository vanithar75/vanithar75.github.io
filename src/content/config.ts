import { defineCollection, z } from 'astro:content';

const blogs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    sourceUrl: z.string().url(),
    description: z.string().optional(),
    coverImage: z.string().optional(),
  }),
});

export const collections = { blogs };
