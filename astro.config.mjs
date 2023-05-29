import { defineConfig } from "astro/config";
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkSectionize from "remark-sectionize";
import remarkEmoji from "remark-emoji";

import mdx from "@astrojs/mdx";
import { remarkReadingTime } from './src/utils/remark-reading-time.mjs';

// https://astro.build/config
export default defineConfig({
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "src/styles/variables.scss" as *;',
                },
            },
        },
    },
    markdown: {
        rehypePlugins: [rehypeHeadingIds, rehypeAutolinkHeadings],
        remarkPlugins: [remarkSectionize, remarkEmoji, [remarkReadingTime, 'src/content/blog']],
    },
    integrations: [mdx()],
});
