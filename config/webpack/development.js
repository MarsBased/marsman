const merge = require('webpack-merge');
const sharedConfig = require('./shared.js');

module.exports = merge(sharedConfig, {
  devtool: 'sourcemap',
  stats: {
    errorDetails: true
  },
  output: {
    pathinfo: true
  },
  node: {
    console: true
  }
});
