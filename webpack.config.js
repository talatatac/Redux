'use strict';

const webpack = require('webpack');
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

    entry: './src/index.js',

    output: {
        path         : path.resolve(__dirname, 'public'),
        publicPath   : '/',
        jsonpFunction: 'Hebelek',
        filename     : 'bundle/[name].js',
        chunkFilename: 'bundle/[id].js',
    },

    module: {
        rules: [{
            test   : /\.js$/,
            exclude: /node_modules/,
            use : {
                loader: 'babel-loader'
            }

        }]
    },

    plugins: [
        new HtmlWebpackPlugin({template: "./public/index.html"})
    ],


    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, "public"),
        port              :3000,
        headers           : {
            'Access-Control-Allow-Origin'     : '*',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Max-Age'          : '86400',
        },
        hot               : true,
        compress          : true,
        host              : 'localhost',

    },
}
