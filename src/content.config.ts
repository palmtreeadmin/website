import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const caseStudies = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/case-studies' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    sector: z.string(),
    build: z.enum(['ai', 'pipelines', 'analytics', 'commerce', 'campaigns']),
    sources: z.array(z.enum(['pos', 'ecom', 'ads', 'location', 'docs', 'apis', 'crm', 'db', 'social'])),
    headline: z.string(),
    featured: z.boolean(),
    order: z.number(),
    tools: z.array(z.string()),
  }),
});

export const collections = { 'case-studies': caseStudies };
