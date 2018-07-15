
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const path = require('path')

const config = {
  entry: {
    app: path.resolve(__dirname, 'server.js')
  },
  output: {
    path: path.resolve(__dirname, 'server'),
    filename: 'index.js'
  },
  target: 'node',
  externals: nodeExternals(),
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
      },
      {
        test: /\.css$/,
        use: ['css-loader']
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: `'production'`
      }
    })
  ]
}

module.exports = config
