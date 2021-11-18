/* 
  生产环境的webpack配置
*/
const cssMinimizer = require('css-minimizer-webpack-plugin')
//使用 terser 来压缩 JavaScript。(webpack@5自带此插件, webpack@4必须下载来用)
const terserWebpack = require('terser-webpack-plugin')

module.exports = {
  output: {
    filename: 'minJS/[name].[contenthash].js',  //多个出口文件配置  根据hash值打包js文件,区别缓存
    publicPath: 'http://localhost:9200/',  //指定公共路径(cdn, 服务器)
  }, 

  optimization: {
    minimize: true,
    minimizer: [new cssMinimizer(), new terserWebpack({
      //UglifyJS 是一款集 JavaScript 解析器，压缩器，美化器于一身的工具集
      minify: terserWebpack.uglifyJsMinify,
        // `terserOptions` options will be passed to `uglify-js`
        // Link to options - https://github.com/mishoo/UglifyJS#minify-options
        terserOptions: {},
    })]
  },

  mode: 'production', //配置环境变量
  //hints项用于取消编译时的提示文件过大的信息
  performance: {
    hints: false
  }
}