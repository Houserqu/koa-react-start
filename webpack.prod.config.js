const path = require('path');
const merge = require('webpack-merge');
const commmon = require('./webpack.common.config');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const dist = path.resolve(__dirname, './public');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(commmon, {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  output: {
    filename: 'js/[name].[chunkhash].js',
    path: path.resolve(dist, './'),
    publicPath: '/',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/view/index.html',
    }),
    new CopyPlugin([
      { from: 'src/view/public', to: './' },
    ]),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
});
