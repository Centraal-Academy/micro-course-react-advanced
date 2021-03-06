const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const config = (env, args) => {
  return {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['react', 'env'],
              plugins: [
                'syntax-dynamic-import'
              ]
            }
          }
        },
        {
          test: /\.css$/,
          use: [
            args && args.mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader'
          ]
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new HtmlWebPackPlugin({
        template: path.resolve(__dirname, 'src/index.html'),
        filename: './index.html'
      })
    ]
  }
}

module.exports = config
