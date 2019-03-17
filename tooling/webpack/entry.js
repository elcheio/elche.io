// Webpack entry config

const glob = require('glob');

module.exports = {
    main: glob.sync('./src/**/index.js').concat(
        [
            './src/main.js',
            './src/main.scss',
        ],
    ),
};
