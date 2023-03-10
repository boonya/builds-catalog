const {NODE_ENV} = require('../config/env');
const webpackConfig = require('../config/webpack.common');

const loadersToExclude = [
	/\.css$/u,
	/\.svg$/u,
].map((item) => item.toString());

const appRules = webpackConfig.module.rules.filter(({test}) => !loadersToExclude.includes(test.toString()));

module.exports = {
	stories: [
		'../src/**/*.stories.mdx',
		'../src/**/*.stories.@(js|jsx|ts|tsx)',
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-a11y',
	],
	staticDirs: [{
		from: '../public/',
		to: '/',
	}, {
		from: './public/',
		to: '/',
	}],
	framework: '@storybook/react',
	core: {
		builder: '@storybook/builder-webpack5',
	},
	webpackFinal: ({module, ...config}) => {
		return {
			...config,
			mode: NODE_ENV || config.mode,
			plugins: [
				...config.plugins,
				webpackConfig.plugins[0],
			],
			module: {
				...module,
				rules: [
					...module.rules,
					...appRules,
				],
			},
		};
	},
};
