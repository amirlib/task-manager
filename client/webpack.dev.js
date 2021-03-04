const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const config = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },
};

module.exports = merge(common, config);
