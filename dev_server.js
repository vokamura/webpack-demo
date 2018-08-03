const express = require('express');
const { resolve } = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const PORT = process.env.PORT || 3000;
//process.env.PORT is an environment variable if someone wants to use another port.  Otherwise default to 3000
const app = express();
const config = require('./webpack.config');
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
    contentBase: resolve(__dirname, 'dist'),
    publicPath: '/',
    historyApiFallback: true
}));

app.get('*', (req, res) => {
    res.sendFile(resolve(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log('\nDev Server Running on PORT: ', PORT, '\n');
});