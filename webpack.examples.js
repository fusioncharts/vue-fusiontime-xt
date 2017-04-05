const path = require('path');
const webpack = require('webpack');

const moduleConfig = {
  rules: [{
    test: /\.vue$/,
    loader: 'vue-loader',
    options: {
      loaders: {
        'scss': 'vue-style-loader!css-loader!sass-loader',
        'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
      }
    }
  }, {
    test: /\.js$/,
    loader: 'babel-loader',
    exclude: /node_modules/
  }]
};

const resolveConfig = {
  alias: {
    'vue$': 'vue/dist/vue.esm.js'
  }
};

module.exports = {
  entry: './examples/main.js',
  output: {
    path: path.resolve(__dirname, './examples'),
    publicPath: '/examples/',
    filename: 'build.js'
  },
  module: moduleConfig,
  resolve: resolveConfig,
  devtool: '#eval-source-map'
};

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map';
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
  ]);
}
