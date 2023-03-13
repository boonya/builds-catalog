import Component from '.';
import {rest} from 'msw';
import RESPONSE from '@src/providers/FetchCatalog/__response__/sample.json';

export default {
	component: Component,
	parameters: {msw: {handlers: [
		rest.get(CATALOG, (req, res, ctx) => {
			return res(ctx.json(RESPONSE));
		}),
	]}},
};

export function App(args) {
	return <Component {...args} />;
}
