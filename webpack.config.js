const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const extractCSS = new ExtractTextPlugin('css/[name].css');
module.exports = {
  mode: process.env.NODE_ENV,
  context: path.resolve(__dirname, 'src'),
  entry: {
    index: './js/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  devServer: {
    compress: true,
    port: 3000,
    stats: {
    assets: true,
    cached: false,
    chunkModules: false,
    chunkOrigins: false,
    chunks: false,
    colors: true,
    hash: false,
    modules: false,
    reasons: false,
    source: false,
    version: false,
    warnings: false
    },
  },
  module: {
    rules: [
      {
        test: /\.(html|gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              }
            }
          },
        ],
      },
      {
        test: /\.json$/,
        use: [
          { loader: 'json-loader' }
        ]
      },
      {
        test: /\.(js)$/,
        use: 'babel-loader'
      },
      {
        test: /\.(css|sass|scss)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      }
      // {
      //   test: /\.(css|sass|scss)$/,
      //   use: extractCSS.extract(['css-loader', 'postcss-loader', 'sass-loader'])
      // },
    ]
  },
  plugins: [
    // extractCSS,
    new CopyWebpackPlugin([
      { from: 'assets', to: 'assets' },
    ])
  ]
};