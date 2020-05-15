const path = require("path");
const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
    mode:"none",
    entry:{
        "jquery.plugin1":"./src/jquery.plugin1.js"
    },
    output: {
        libraryTarget:"umd",
        filename: 'js/[name].js'
    },
    externals: {
        jquery: 'jQuery'
    },
    
    module: {
    },
    plugins:[
        new CleanWebpackPlugin()
        /*
        // 单独打包css
        new ExtractTextPlugin({
            filename: (getPath) => {
                return getPath('[name]') == 'vendor' ? getPath('vendor/[name].css') : getPath('[name].css');
            }
        })
        */
    ]
}