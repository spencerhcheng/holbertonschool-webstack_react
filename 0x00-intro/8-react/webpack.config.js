const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')

module.exports = {
	entry: './src/index.js',
	devServer: {
		content: './dist',
		hot: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Holberton School webpack',
			tempalte: './src/index.html'
		}),
		new webpack.HotModuleReplacementPlugin()
	],
	watchOptions: {
		poll: 1000
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.bundle.js',
	},
	module: {
		loaders: [
			{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
			{ test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
		]
	}
};
