import { defineConfig } from 'vite';
import path from 'path';

const aliasesStrings = ['js', 'scss', 'images'];

const aliases = {};
aliasesStrings.forEach(alias => {
    aliases[`@${alias}`] = path.resolve(__dirname, `src/${alias}/`);
});

export default defineConfig(() => {

    return {
        server: {
            port: 5001
        },
        resolve: {
            alias: {
                ...aliases
            }
        }
    };
});
