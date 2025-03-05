import path from 'node:path'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { merge } from 'webpack-merge'

export default merge(require('./webpack.common.js'), {
  mode: 'production',
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.s?(a|c)ss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '/', // 设置你的公共资源路径。按需进行修改
            },
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              // postcssOptions: {
              //   plugins: [require('autoprefixer'), require('cssnano')],
              // },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name][hash:7].css', // 配置输出的 CSS 文件名。可以自定义文件名和路径。
      chunkFilename: 'css/[id].css',
    }),
  ],
})
