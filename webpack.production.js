const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(require('./webpack.common.js'), {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.s?(a|c)ss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '/' // 设置你的公共资源路径。按需进行修改
            }
          },
          ,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name][hash:7].css', // 配置输出的 CSS 文件名。可以自定义文件名和路径。
      chunkFilename: 'css/[id].css'
    })
  ]
});
