import {initialize, mswDecorator} from 'msw-storybook-addon';
import {HelmetProvider} from 'react-helmet-async';
import withStyle from '@sb/decorators/withStyle';
import withTheme, {getThemeToolbar} from '@sb/decorators/withTheme';
import wrapper from '@sb/decorators/wrapper';

initialize({
	serviceWorker: {url: `${APP_PREFIX}mockServiceWorker.js`},
	onUnhandledRequest: 'bypass',
});

export const decorators = [
	wrapper(undefined, HelmetProvider),
	withStyle(),
	withTheme(),
	mswDecorator,
];

export const parameters = {
	actions: {argTypesRegex: '^on[A-Z].*'},
	controls: {
		matchers: {
			color: /(?:background|color)$/iu,
			date: /(?:date|dateTime|time)$/iu,
		},
	},
	backgrounds: {disable: true},
};

export const globalTypes = {
	theme: getThemeToolbar(),
};
