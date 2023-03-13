const {NODE_ENV, APP_PREFIX, CATALOG} = require('./env');
const {
	buildDir,
	htmlEntry,
	jsEntry,
	nodeModulesDir,
	publicDir,
	srcDir,
} = require('./path');
const {description} = require('../package.json');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

const optimization = {
	minimize: true,
	minimizer: [new TerserPlugin()],
};

module.exports = {
	mode: NODE_ENV,
	optimization: NODE_ENV === 'production' ? optimization : undefined,
	resolveLoader: {
		modules: [nodeModulesDir],
	},
	entry: [jsEntry],
	output: {
		path: buildDir,
		filename: 'static/js/[name].[chunkhash:8].js',
		chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
		clean: true,
	},
	plugins: [
		new webpack.DefinePlugin({
			NODE_ENV: JSON.stringify(NODE_ENV),
			APP_PREFIX: JSON.stringify(APP_PREFIX),
			CATALOG: JSON.stringify(CATALOG),
		}),
		new CopyPlugin({patterns: [
			{
				from: `${srcDir}/providers/FetchCatalog/__response__/sample.json`,
				to: `${buildDir}/${CATALOG}`,
			},
			publicDir,
		]}),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: htmlEntry,
			xhtml: true,
			base: APP_PREFIX,
			title: description,
			templateParameters: {
				APP_PREFIX,
			},
		}),
	],
	module: {
		rules: [
			{
				test: /\.(?:js|mjs)$/u,
				exclude: /node_modules/u,
				loader: 'babel-loader',
			},
			{
				test: /\.css$/u,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
};
