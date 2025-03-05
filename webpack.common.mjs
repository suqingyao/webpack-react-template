// import { createRequire } from 'node:module'
import path, { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import HtmlWebpackPlugin from 'html-webpack-plugin'
// import NodePolyfillPlugin from 'node-polyfill-webpack-plugin'
// import webpack from 'webpack'

// const require = createRequire(import.meta.url)
const __dirname = dirname(fileURLToPath(import.meta.url))

export default {
  entry: './src/main.tsx',
  devtool: 'source-map',
  output: {
    filename: '[name][contenthash].js',
    path: path.join(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    fullySpecified: false, // 关闭严格模块扩展检查
    fallback: {
      // process: require.resolve('process/browser'),
      // buffer: require.resolve('buffer/'),
      // stream: require.resolve('stream-browserify'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              [
                '@babel/preset-react',
                {
                  runtime: 'automatic',
                },
              ],
              '@babel/preset-typescript',
            ],
          },
        },
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024 * 8, // 8KB 以下的图片将会被转为 base64
              fallback: 'file-loader',
              name: '[name][hash:7].[ext]',
              publicPath: 'images/',
              outputPath: 'images/',
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        include: path.resolve(__dirname, 'src/assets/fonts'),
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'css/fonts/',
              publicPath: 'css/fonts/',
              esModule: false,
            },
          },
        ],
        type: 'javascript/auto',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
      publicPath: '/',
    }),
  ],
}
