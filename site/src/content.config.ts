import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Blog collection.
 *
 * `reviewed` is a separate field from `updated` because they mean different
 * things: reviewed is when a person checked the content is still accurate,
 * updated is when it last changed. Both are shown on the page and both are
 * carried into BlogPosting schema.
 *
 * `references` exists so that any factual claim which needs a source has
 * somewhere to put one. Articles that make no such claim leave it empty rather
 * than manufacturing citations.
 */
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().max(70),
      description: z.string().min(80).max(200),
      /** The single search intent this article is written to satisfy. */
      intent: z.string(),
      primaryKeyword: z.string(),
      supportingKeywords: z.array(z.string()).default([]),
      published: z.coerce.date(),
      updated: z.coerce.date(),
      reviewed: z.coerce.date(),
      author: z.string(),
      reviewer: z.string().optional(),
      heroImage: image(),
      heroAlt: z.string().min(20),
      heroCaption: z.string().optional(),
      /** Ordered list of related internal destinations shown after the article. */
      related: z
        .array(z.object({ href: z.string(), label: z.string(), reason: z.string() }))
        .default([]),
      faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
      /**
       * The closing call to action, written for this article's subject. A
       * shared band with one anchor across ten articles is ten identical
       * in-content links to the same URL, which is both weaker for the reader
       * and an over-optimisation signal.
       */
      cta: z.object({
        heading: z.string(),
        body: z.string(),
        label: z.string(),
        whatsapp: z.string(),
      }),
      references: z
        .array(z.object({ label: z.string(), note: z.string() }))
        .default([]),
      draft: z.boolean().default(false),
    }),
});

export const collections = { blog };
