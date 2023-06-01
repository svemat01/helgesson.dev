import { defineCollection, z } from "astro:content";

const blog = defineCollection({
    schema: z.object({
        title: z.string().min(1),
        description: z.string().min(1),
        author: z.string().min(1),
        date: z
            .string()
            .or(z.date())
            .transform((val) => new Date(val)),
        tags: z.array(z.string()),
        draft: z.boolean(),
    }),
});

const wiki = defineCollection({
    schema: z.object({
        title: z.string().min(1),
        description: z.string().min(1),
    }),
});

export const collections = { blog, wiki };
