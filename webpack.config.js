const Path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Webpack = require('webpack');

const loaders = require('./config/webpack.loaders');

const internals = {
  path: {
    dist: Path.resolve(__dirname, './dist/'),
    src: Path.resolve(__dirname, './src/')
  }
};

module.exports = {
  entry: [
    Path.resolve(internals.path.src, 'styles/main.scss'),
    Path.resolve(internals.path.src, 'main.js')
  ],
  output: {
    path: internals.path.dist,
    filename: 'build.js'
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      styles: Path.join(internals.path.src, 'styles'),
      common: Path.join(internals.path.src, 'common')
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: Path.resolve(internals.path.dist, 'index.html'),
      template: Path.resolve(internals.path.src, 'index.html'),
      inject: true
    }),
    new CopyWebpackPlugin([
      { from: 'src/assets', to: 'assets' }
    ])
  ],
  module: { rules: loaders },
  performance: { hints: false },
  devtool: '#eval-source-map'
};

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map';

  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new Webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new Webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new Webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]);
}
