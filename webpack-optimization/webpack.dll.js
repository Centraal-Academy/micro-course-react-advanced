const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    library: [
      'lodash',
      'react',
      'react-dom'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: '[name]'
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: path.join(__dirname, 'dist/library/[name]-manifest.json')
    })
  ]
}
