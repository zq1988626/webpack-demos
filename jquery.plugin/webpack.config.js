const path = require("path");
const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
    mode:"production",
    entry:{
        "jquery.plugin1":"./src/jquery.plugin1.js"
    },
    output: {
        libraryTarget:"umd",
        filename: '[name].js'
    },
    externals: {
        jquery: 'jQuery'
    },
    plugins:[
        new CleanWebpackPlugin()
    ]
}