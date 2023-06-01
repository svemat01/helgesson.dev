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

const sites_services = defineCollection({
    type: 'data',
    schema: z.object({
        title: z.object({
            pre: z.string().optional(),
            main: z.string().min(1),
            post: z.string().optional(),
        }),
        description: z.string().min(1),
        link: z.object({
            href: z.string().url(),
            newTab: z.boolean().default(true),
        })
    }),
});

export const collections = { blog, wiki, sites_services };
