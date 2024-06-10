import { defineConfig } from 'vite';
import path from 'path';
import { terser } from 'rollup-plugin-terser';
import banner from 'vite-plugin-banner';

const bannerText = `/*!
 * GITHUB_REPO_NAME v1.0.0
 * (c) HichemTech
 * Released under the MIT License.
 * Github: github.com/HichemTab-tech/GITHUB_REPO_NAME
 */
`;

const aliasesStrings = ['js', 'scss', 'images'];

const aliases = {};
aliasesStrings.forEach(alias => {
    aliases[`@${alias}`] = path.resolve(__dirname, `src/${alias}/`);
});

export default defineConfig(({ command }) => {
    const isProduction = command === 'build';

    return {
        build: {
            lib: {
                entry: path.resolve(__dirname, 'index.js'),
                name: 'LIBRARY_MAIN_SCRIPT_NAME',
                fileName: (format) => `LIBRARY_MAIN_SCRIPT_NAME${format === 'es' ? '' : '.min'}.js`,
                formats: ['umd'],
            },
            rollupOptions: {
                output: {
                    globals: {
                        this: 'this',
                    },
                },
                plugins: [
                    banner(bannerText),
                    isProduction && terser({
                        format: {
                            comments: false,
                        },
                    }),
                ],
            },
        },
        plugins: [
            banner(bannerText),
        ],
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