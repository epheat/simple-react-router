const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: true,
    hot: true
  },
  performance: {
    hints: false
  },
  module: {
    rules: [
      // transpiling for javascript files
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      // css files
      {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
      new HtmlWebPackPlugin({
        hash: true,
        template: './src/index.html',
        filename: 'index.html'
      }),
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin()
  ]
};