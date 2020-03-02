var merge = require('webpack-merge');
var common = require('./webpack.common.js');

module.exports = merge(common,{
    devServer:{
        contentBase:'./build',
        port:'8080',
        inline:true,
        historyApiFallback:true,
        hot:true,
        open:true
    },
    devtool:'inline-source-map'
})