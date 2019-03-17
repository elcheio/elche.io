// Webpack SCSS rules config

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const globImporter = require('node-sass-glob-importer');

module.exports = {
    test: /\.scss$/,
    use: [
        {
            loader: MiniCssExtractPlugin.loader,
        }, {
            loader: 'css-loader',
            options: {
                sourceMap: true,
            }
        }, {
            loader: 'postcss-loader',
            options: {
                sourceMap: true,
            },
        }, {
            loader: 'sass-loader',
            options: {
                importer: [
                    globImporter(),
                ],
                sourceMap: true,
            },
        }
    ],
    exclude: /node_modules/,
};
