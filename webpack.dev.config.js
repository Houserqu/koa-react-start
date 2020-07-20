const merge = require('webpack-merge');
const path = require('path');
const commmon = require('./webpack.common.config');
const dist = path.resolve(__dirname, './public');
const WriteFilePlugin = require('write-file-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = merge(commmon, {
  mode: 'development',
  output: {
    filename: 'js/index.js',
    path: path.resolve(dist, './'),
    publicPath: '/',
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: dist,
    compress: true,
    port: 8080,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: 'view/index.html',
    }),
    new CopyPlugin([
      { from: 'view/public', to: './' },
    ]),
    new WriteFilePlugin(),
  ],
});
