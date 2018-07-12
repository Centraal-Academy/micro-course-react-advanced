const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const config = (env, args) => {
  return {
    entry: {
      app: path.resolve(__dirname, 'client/index.js')
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['react', 'env']
            }
          }
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(['dist'])
    ]
  }
}

module.exports = config
