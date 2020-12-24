const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { commonPackConfig } = require('./webpack.common');
const mode = 'development';

module.exports = {
  ...commonPackConfig,
  entry: './src/browser.js',
  mode,
  devtool: "source-map",
  devServer: {
    contentBase: '../dist',
    port: 8080,
    hot: false,
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'data.js',
  },
  plugins: [new HtmlWebpackPlugin({ title: 'sand-box-html' })],
}
