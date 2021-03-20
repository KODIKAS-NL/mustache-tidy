const path = require('path');
var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');
var filename = 'mustache-tidy.js';
var plugins = [
    new webpack.IgnorePlugin(/jsdom/)
];

module.exports = function (env) {
    if (env.prod) {
        filename = 'mustache-tidy.min.js';
    };

    return {
        mode: env.prod ? 'production' : 'development',
        entry: './index.js',
        externals: [nodeExternals()],
        optimization: {
            minimize: env.prod,
        },
        output: {
            path: path.resolve(__dirname, 'assets'),
            filename: filename,
            library: 'mustacheTidy'
        },
        module: {
            rules: [{
                test: /\.json$/,
                use: 'json-loader'
            }]
        },
        plugins: plugins
    };
}
