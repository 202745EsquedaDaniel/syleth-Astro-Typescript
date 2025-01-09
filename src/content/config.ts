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

export const collections = { product };