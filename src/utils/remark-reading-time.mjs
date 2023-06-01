import getReadingTime from "reading-time";
import { toString } from "mdast-util-to-string";
import path from 'node:path'

export function remarkReadingTime(options) {
    return function (tree, file) {
        // const dir = path.relative(file.cwd, file.dirname);

        // if (typeof options === 'string' && dir !== options) return;

        // if (Array.isArray(options) && !options.includes(dir)) return;

        const textOnPage = toString(tree);
        const readingTime = getReadingTime(textOnPage);
        // readingTime.text will give us minutes read as a friendly string,
        // i.e. "3 min read"
        file.data.astro.frontmatter.minutesRead = readingTime.text;
    };
}