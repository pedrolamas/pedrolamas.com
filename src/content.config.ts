import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Ids drive the public URLs
const generateId = ({ entry }: { entry: string }): string => entry.replace(/\.md$/, '');

const posts = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/posts', generateId }),
  schema: ({ image }) =>
    z.looseObject({
      title: z.string(),
      date: z.coerce.date(),
      last_modified_at: z.coerce.date().optional(),
      categories: z.array(z.string()).default([]),
      tags: z.array(z.string()).default([]),
      image: z.preprocess((value) => (typeof value === 'string' ? value.replace(/^\/wp-content\//, '@wp-content/') : value), image().optional()),
    }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages', generateId }),
  schema: z.looseObject({
    title: z.string(),
  }),
});

export const collections = { posts, pages };
