const merge = require('webpack-merge')
const common = require('./webpack.common')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const WebpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const config = (env, args) => {
  const commonConfig = common(env, args)
  return merge(commonConfig, {
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css'
      })
    ]
  })
}

module.exports = config
