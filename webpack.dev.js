var merge = require('webpack-merge');
var common = require('./webpack.common.js');

module.exports = merge(common,{
    mode:'development',
    devServer:{
        contentBase:'./build',
        port:'3000',
        inline:true,
        historyApiFallback:true,
        hot:true,
        hotOnly:true
    },
    devtool:'inline-source-map'
})