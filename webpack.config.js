const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: './src/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	entry: './src/scripts/index.js',
	output: {
		path: path.resolve('dist'),
		filename: 'bundle.js'
	},
	devtool: 'inline-source-map',
	module: {
		rules: [
		  {
		    test: /\.js$/,
		    exclude: /(node_modules|bower_components)/,
		    use: {
		      loader: 'babel-loader',
		      options: {
		        presets: ['env']
		      }
		    }
		  }
		]
	},
	resolve: {
	  alias: {
	    vue: 'vue/dist/vue.js'
	  }
	},
	plugins: [HtmlWebpackPluginConfig]
};
