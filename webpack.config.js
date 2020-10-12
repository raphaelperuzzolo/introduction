/* eslint-disable no-undef */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    historyApiFallback: true,
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [].concat('src', ['node_modules']),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('public/index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        exclude: /node_modules/,
        use: [
          { loader: 'file-loader' },
        ],
      },
    ],
  },
}