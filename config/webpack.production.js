const path = require('path');
const { commonPackConfig } = require('./webpack.common');
const mode = 'production';

module.exports = {
  ...commonPackConfig,
  entry: './src/index.js',
  mode,
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'data.js',
    libraryTarget: 'umd',
  },
}
