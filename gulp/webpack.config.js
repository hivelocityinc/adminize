var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: {
    'adminize': './src/js/adminize.js',
    'adminize.min': './src/js/adminize.js'
  },
  output: {
    path: path.join(__dirname, './js'),
    filename: '[name].js'
  },
  resolve: {
    extenstions: ['', '.js']
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, '../src')
    }]
  }
};
