module.exports = [{
  test: /\.vue$/,
  loader: 'vue-loader',
  options: {
    loaders: {
      scss: 'vue-style-loader!css-loader!sass-loader'
    }
  }
}, {
  test: /\.scss$/,
  loader: 'vue-style-loader!css-loader!sass-loader',
  exclude: /node_modules/
}, {
  test: /\.css$/,
  use: ['style-loader', 'css-loader']
}, {
  test: /\.js$/,
  loader: 'babel-loader',
  exclude: /node_modules/
}, {
  test: /node_modules\/js-flock/,
  loader: 'babel-loader',
  include: '/',
  query: { presets: [['es2015', { modules: false }]] }
}, {
  test: /\.(png|jpg|gif|svg)$/,
  loader: 'file-loader',
  options: {
    name: '[name].[ext]?[hash]'
  }
}, {
  test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
  loader: 'url-loader',
  options: {
    limit: 10000,
    mimetype: 'application/font-woff'
  }
}, {
  test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
  loader: 'url-loader',
  options: {
    limit: 10000,
    mimetype: 'application/font-woff'
  }
}, {
  test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
  loader: 'url-loader',
  options: {
    limit: 10000,
    mimetype: 'application/octet-stream'
  }
}, {
  test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
  use: 'file-loader'
}, {
  test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
  loader: 'url-loader',
  options: {
    limit: 10000,
    mimetype: 'application/image/svg+xml'
  }
}];
