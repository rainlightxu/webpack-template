//由于webpack是基于node构建的，所以在webpack的配置文件中，任何合法的node代码都是允许的
const path = require('path')
//声明html-webpack-plugin插件的变量
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode:'production',
    entry: path.join(__dirname,'./src/main.js'),
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    plugins:[  //所有第三方插件的配置节点
        new htmlWebpackPlugin({
            template: path.join(__dirname,'./src/index.html'),
            filename:'index.html'
        })
    ],
    module:{    //所有第三方laoder模块的配置节点
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            {test:/\.(jpg|png|bmp|jpeg|gif)$/,use:['url-loader?limit=821040&name=[hash:8]-[name].[ext]']},//limit参数小于图片大小，则不进行base64编码;为了防止同名图片不能正常引用，加上hash值
            {test:/\.(ttf|eot|svg|woff|woff2)$/,use:['url-loader']},
            {test:/\.js$/,use:['babel-loader'],exclude:/node_modules/}
        ]
    }
      
    
}