var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var { CleanWebpackPlugin } = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry:{
        main:[
            //'react-hot-loader/path',
            'babel-polyfill',
            path.resolve(__dirname, 'src/index.js')
        ],
    },
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'[name].js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader'
                }

            },
            {
                test:/\.css$/,
                include:path.resolve(__dirname,'src/containers'),
                use: ['style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]-[local]-[hash:base64:5]',
                            importLoaders: 1
                        }
                    },
                    'postcss-loader'
                ]
            },
            {
                test:/\.css$/,
                exclude:path.resolve(__dirname,'src/containers'),
                use:['style-loader','css-loader','postcss-loader']
            },
            {
                test: /\.(png|jpg|svg|gif)$/,  // 正则匹配图片格式名
                use: [
                    {
                        loader: 'url-loader',  // 使用url-loader
                        options:{
                            limit:1000
                        }
                    }
                ]
            },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'src/template.html')
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV':JSON.stringify(process.env.NODE_ENV)
        }),
        new ExtractTextPlugin('css/style.css')
    ]
}