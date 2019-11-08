var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: path.join(__dirname, 'src/Main.js'),
    output: {
        path: path.join(__dirname, 'build/'),
        filename: 'index.js',
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: [{
                loader: 'babel-loader'
            }]
        }]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map',
    mode: "development"
};