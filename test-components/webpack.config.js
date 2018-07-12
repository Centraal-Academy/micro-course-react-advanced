const merge = require('webpack-merge')
const common = require('./webpack.common')
// const WebpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const config = (env, args) => {
  const commonConfig = common(env, args)
  return merge(commonConfig, {
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            name: 'commons',
            chunks: 'all',
            minChunks: 2
          }
        }
      }
    }
  })
}

module.exports = config
