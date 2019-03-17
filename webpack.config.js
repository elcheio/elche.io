// Webpack config

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    devServer: require('./tooling/webpack/dev-server'),
    entry: require('./tooling/webpack/entry'),
    output: require('./tooling/webpack/output'),
    module: {
        rules: require('./tooling/webpack/rules'),
    },
    plugins: require('./tooling/webpack/plugins'),
    resolve: require('./tooling/webpack/resolve'),
};
