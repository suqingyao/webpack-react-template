const { merge } = require('webpack-merge');

module.exports = merge(require('./webpack.common.js'), {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    port: 3000,
    open: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.s?(c|a)ss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
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
  plugins: [],
});
