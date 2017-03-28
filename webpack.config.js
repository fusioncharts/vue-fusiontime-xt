const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const moduleConfig = {
  rules: [{
    test: /\.vue$/,
    loader: 'vue-loader',
    options: {
      loaders: {
        // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
        // the "scss" and "sass" values for the lang attribute to the right configs here.
        // other preprocessors should work out of the box, no loader config like this necessary.
        'scss': 'vue-style-loader!css-loader!sass-loader',
        'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
      }
    }
  }, {
    test: /\.js$/,
    loader: 'babel-loader',
    exclude: /node_modules/
  }, {
    test: /\.(png|jpg|gif|svg)$/,
    loader: 'file-loader',
    options: {
      name: '[name].[ext]?[hash]'
    }
  }]
};

const resolveConfig = {
  alias: {
    'vue$': 'vue/dist/vue.esm.js'
  }
};

const devServerConfig = {
  contentBase: path.join(__dirname, './'),
  historyApiFallback: true,
  noInfo: true
};

const performanceConfig = {
  hints: false
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
  devServer: devServerConfig,
  performance: performanceConfig,
  devtool: '#eval-source-map'
  // plugins: [
  //   new CopyWebpackPlugin([
  //     { from: './src/VueFusionTime.vue', to: './../dist/VueFusionTime.vue' }
  //   ])
  // ]
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
