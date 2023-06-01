
import path from 'node:path'
// import type {Transformer} from 'unified'

// type Plugin = (...args: any[]) => Transformer;

// type Options = Record<string, Plugin | [Plugin, unknown]>;
export const conditionalRehype = () => (options) => {
    return function (...args) {
        const file = args[1];
        const dir = path.relative(file.cwd, file.dirname);
        // console.log({args, dir});

        const plugin = options[dir];

        if (plugin) {
            // console.log({plugin});
            if (Array.isArray(plugin)) {
                const fn = plugin[0](plugin[1]);
                return fn(...args);
            } else {
                return plugin()(...args);
            }
        }
    };
}

export const conditionalRemark = () => (options) => {
    return function (...args) {
        const file = args[1];
        const dir = path.relative(file.cwd, file.dirname);
        // console.log({args, dir});

        const plugin = options[dir];

        if (plugin) {
            // console.log({plugin});
            if (Array.isArray(plugin)) {
                const fn = plugin[0](plugin[1]);
                return fn(...args);
            } else {
                return plugin()(...args);
            }
        }
    };
}