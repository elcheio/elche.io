// Webpack output config

const path = require('path');

module.exports = {
    path: path.resolve('./dist'),
    filename: 'js/[name].[chunkhash].js',
    publicPath: '/',
};
