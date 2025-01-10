import { defineCollection, z } from "astro:content";

const product = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        imageUrl: z.string(),
        price: z.coerce.number(),
        category: z.string(),
    }),
});

const gallery = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        imageUrl: z.string(),
        pubDate: z.coerce.date(),
        category: z.string(),
    }),
});

export const collections = { product, gallery };