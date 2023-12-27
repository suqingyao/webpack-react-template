const { merge } = require('webpack-merge');

module.exports = merge(require('./webpack.common.js'), {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    port: 3000,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.s?(c|a)ss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: []
});
