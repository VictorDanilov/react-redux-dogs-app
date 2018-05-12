const merge = require('webpack-merge');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    new HtmlWebPackPlugin({
      inject: true,
      template: './public/index.html',
    }),
  ],
});
