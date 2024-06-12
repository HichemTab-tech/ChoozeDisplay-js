// noinspection WebpackConfigHighlighting

const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require("webpack");

// noinspection JSUnresolvedReference
let bannerPlugin = new webpack.BannerPlugin({
    banner: `/*!
 * ChoozeDisplay-js v1.0.0
 * (c) HichemTech
 * Released under the MIT License.
 * Github: github.com/HichemTab-tech/ChoozeDisplay-js
 */
`,
    raw: true,
});

let module_ = {
    rules: [
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        },
    ],
};

module.exports = [
    {
        mode: 'production',
        entry: './index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'ChoozeDisplay.js',
            library: 'ChoozeDisplay-js',
            libraryTarget: 'umd', // or 'umd2'
            globalObject: 'this',
        },
        optimization: {
            minimize: false,
        },
        plugins: [
            bannerPlugin
        ],
        module: module_
    },
    {
        mode: 'production',
        entry: './index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'ChoozeDisplay.min.js',
            library: 'ChoozeDisplay-js',
            libraryTarget: 'umd', // or 'umd2'
            globalObject: 'this',
        },
        optimization: {
            minimize: true,
            minimizer: [
                new TerserPlugin({
                    extractComments: false,
                }),
            ],
        },
        plugins: [
            new TerserPlugin({
                extractComments: false,
            }),
            bannerPlugin
        ],
        module: module_
    },
];
