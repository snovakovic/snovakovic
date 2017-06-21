const path = require('path');
const webpack = require('webpack');

const loaders = require('./config/webpack.loaders');

const internals = {
  path: {
    src: (subPath) => path.resolve('./src/', subPath)
  },
  loader: {
    scss: 'vue-style-loader!css-loader!sass-loader'
  }
}

module.exports = {
  entry: [
    internals.path.src('styles/main.scss'),
    internals.path.src('main.js')
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: loaders
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      styles: internals.path.src('styles/'),
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
