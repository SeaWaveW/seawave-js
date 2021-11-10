const path = require('path')
const pkg = require('../package.json')
// cnpm install uglifyjs-webpack-plugin
const uglify = require('uglifyjs-webpack-plugin');

// path.join只是简单的将该路径片段进行拼接
// path.resolve将以/开始的路径片段作为根目录
// __dirname为当前目录
// 设置上级目录为根目录
// __dirname:'E:/seawave-js/configs'
// 设置rootPath:'E:/seawave-js'
const rootPath = path.resolve(__dirname,'../')
// const rootPath = __dirname

const config = {
    // mode:'production'
    // 入口点文件设置 development
    entry:path.resolve(rootPath,'src','index.js'),
    devtool:'inline-source-map',
    // 输出文件配置
    output:{
        // 输出文件名
        // filename: '${pkg.name}.js'
        filename:`${pkg.name}.js`,
        // 输出文件路径
        path:path.resolve(rootPath,'build'),
        // 库名
        // library: '${pkg.name}'
        library:'sw-js',
        // 编译为通用的脚本模块
        libraryTarget:'umd'
    },
    // 配置压缩
    plugins:[
        new uglify()
    ],
    mode: "production"
}

module.exports = config