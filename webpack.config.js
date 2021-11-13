const path = require('path')
const pkg = require('./package.json')
const rootPath = path.resolve(__dirname,'./')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    mode: 'none',
    // 入口点文件设置
    entry:path.resolve(rootPath,'src','index.js'),
    // 输出文件配置
    output:{
        // 输出文件名
        filename:`${pkg.name}.js`,
        // 输出文件路径
        path:path.resolve(rootPath,'build'),
        // 库名
        library:`${pkg.name}`,
        // 编译为通用的脚本模块
        libraryTarget:'umd'
    },
    // 第三方插件
    plugins: [
        new UglifyJsPlugin({
            uglifyOptions:{
                warnings: false,
                compress:{
                    drop_debugger: true,
                    drop_console: true
                }
            }
        }) // 压缩
    ],
    // 在async函数外部使用await字段
    experiments: {
        topLevelAwait: true
    },
    // 编译后的js版本
    target: ['web', 'es5'],
    // 打包规则
    module:{
        rules:[
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
        
    }
}