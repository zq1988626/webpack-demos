const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require("webpack-merge");
const webpack = require('webpack');
const config = require("./webpack.config");

module.exports = merge(config,{
    mode:"development",
    entry:{
        "demo":"./src/demo.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "dist_dev"),
        hot: true,
        inline: true,
        compress: true, // 启用gzip压缩
        host: 'localhost',
        port: 8090,
        open: true,
        openPage: 'demo.html'
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    output: {
        libraryTarget:"umd",
        filename: '[name].js'
    },
    externals: {
        jquery: 'jQuery'
    },
    /* 输出代码分割 
	optimization: {
		splitChunks: {
            chunks: 'all'
        },
        runtimeChunk: {
            name: 'runtime'
        }
    },
    */
    plugins: [
        // 自动生成html
        new HtmlWebpackPlugin({
            template: './src/demo.html',
            filename: 'demo.html'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
})