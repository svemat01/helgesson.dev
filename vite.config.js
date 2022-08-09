import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
    plugins: [sveltekit()],

    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@use "src/lib/styles/variables.scss" as *;',
            },
        },
    },
};

export default config;
