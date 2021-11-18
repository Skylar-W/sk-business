/* 
  开发环境的webpack配置
*/

//开发环境控制台运行 npx webpack --config(或者 -c) ./config/webpack.config.dev.js

//开发环境下启动服务器也可以运行 npx webpack serve -c ./config/webpack.config.dev.js
module.exports = {
  output: {
    filename: 'minJS/[name].js',  //多个出口文件配置  开发环境不需要改名
  },

  devtool: 'inline-source-map',
  mode: 'development',
  devServer: {
    static: './dist',
    port: 9200,
    open: true
  }  
}