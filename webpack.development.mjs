import webpack from 'webpack'
import { merge } from 'webpack-merge'
import commonConfig from './webpack.common.mjs'

export default merge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    port: 2333,
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
      {
        test: '/\.css$/',
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],
})
