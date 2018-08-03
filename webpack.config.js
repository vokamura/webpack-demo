const { resolve } = require('path');

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    output: {
        filename: 'main.js',
        path: resolve(__dirname, 'dist')
    },
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|giv|jpe?g)/,
                use: {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'images/'
                    }
                }
            }
        ]
    }
}