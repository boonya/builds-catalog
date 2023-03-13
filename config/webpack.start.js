const {DEV_SERVER_PORT, CATALOG} = require('./env');
const {buildDir, srcDir} = require('./path');
const common = require('./webpack.common');
const CopyPlugin = require('copy-webpack-plugin');
const {merge} = require('webpack-merge');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		static: buildDir,
		compress: true,
		port: DEV_SERVER_PORT,
		historyApiFallback: {
			rewrites: [
				{from: /./u, to: '/index.html'},
			],
		},
		hot: true,
		client: {
			progress: true,
		},
	},
	plugins: [
		new CopyPlugin({patterns: [
			{
				from: `${srcDir}/providers/FetchCatalog/__response__/sample.json`,
				to: `${buildDir}/${CATALOG}`,
			},
		]}),
	],
});
