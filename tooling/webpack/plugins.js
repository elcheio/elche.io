const VueLoaderPlugin = require('vue-loader/lib/plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = [
    new VueLoaderPlugin(),
    new WebpackMd5Hash(),
    new MiniCssExtractPlugin({
        filename: 'css/[name].css',
        chunkFilename: 'css/[id].css',
    }),
    new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
    }),
    new CopyPlugin([
        {
            context: './src/content/',
            from: '**/*',
            to: './content/'
        },
    ]),
];
