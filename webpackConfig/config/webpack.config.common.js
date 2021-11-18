/** 
  提取公共配置
*/

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const cssMinimizer = require('css-minimizer-webpack-plugin')
//使用 terser 来压缩 JavaScript。(webpack@5自带此插件, webpack@4必须下载来用)
const terserWebpack = require('terser-webpack-plugin')
const toml = require('toml')
const yaml = require('yaml')
const json5 = require('json5')

//配置环境变量,导出一个函数  (控制台使用:npx webpack --env production --env goal=local)
module.exports = {
  // entry: {//多个入口文件配置
  //   app: './src/app.js',
  //   lod: './src/lod.js'
  // },

  entry: {//多个入口文件配置,使用SplitChunksPlugin进行去重和代码分离
    app: './src/app.js',
    lod: './src/lod.js'
  },

  // entry: {//多个入口文件配置,并且共享同一函数库
  //   app: {
  //     import: './src/app.js',
  //     dependOn: 'shared'
  //   },
  //   lod: {
  //     import: './src/lod.js',
  //     dependOn: 'shared' 
  //   },
  //   shared: 'lodash' 
  // },

  output: {
    path: path.resolve(__dirname, '../dist'),
    assetModuleFilename: './imgs/[contenthash][ext]',
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          miniCssExtractPlugin.loader,
          'css-loader'
        ]
      },

      {
        test: /\.(png|jpg|webp|ico)$/,
        type: 'asset/resource',
        // generator: {
        //   //自动重命名图片
        //   // filename: './images/Ali.webp',
        //   //根据哈希值自动重命名图片
        //   filename: './pictures/[contenthash][ext]',
        // }
      },

      {
        test: /\.(csv|tsv)$/,
        use: 'csv-loader'
      },

      {
        test: /\.xml$/,
        use: 'xml-loader'
      },

      {
        test: /\.toml$/,
        type: 'json',
        parser: {
          parse: toml.parse
        }
      },

      {
        test: /\.yaml$/,
        type: 'json',
        parser: {
          parse: yaml.parse
        }
      },

      {
        test: /\.json5$/,
        type: 'json',
        parser: {
          parse: json5.parse
        }
      },

      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: ['@babel/preset-env'],
      //       plugins: ['@babel/plugin-transform-runtime']
      //     }
      //   }
      // }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/public/views/app.html',
      filename: 'prtapp.html',
      inject: 'body'
    }),
    new miniCssExtractPlugin({filename: 'css/[contenthash].css'}),
  ],

  optimization: {
    splitChunks: {
      //{chunks: 'all'}, //代码简单分离时用这个即可
      cacheGroups: {//客户端长期缓存第三方工具库代码,无需每次都请求重新加载
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }

    }
  }
}