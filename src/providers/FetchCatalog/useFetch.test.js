import DATA from './__data__/sample';
import RESPONSE from './__response__/sample.json';
import useFetch from './useFetch';
import {waitFor} from '@testing-library/react';
import {renderHook} from '@test/render';

const json = jest.fn(async () => RESPONSE);
global.fetch = jest.fn(async () => ({json}));

function render(...args) {
	return renderHook(() => useFetch(...args));
}

it('should return loading.', async () => {
	const {result} = render();

	await waitFor(() => expect(fetch).toBeCalled());

	expect(result.current).toEqual({loading: true});
});

it('should return data.', async () => {
	const {result} = render();

	await waitFor(() => expect(json).toBeCalled());

	expect(result.current).toEqual({data: DATA, loading: false});
});

it('should return an error if request failed.', async () => {
	fetch.mockImplementation(async () => {
		throw new Error('Test');
	});

	const {result} = render();

	await waitFor(() => expect(fetch).toBeCalled());

	expect(result.current).toEqual({loading: false, error: new Error('Test')});
});

it('should return an error if response broken.', async () => {
	const _json = jest.fn(async () => ({}));
	fetch.mockImplementation(async () => ({json: _json}));

	const {result} = render();

	await waitFor(() => expect(_json).toBeCalled());

	expect(result.current).toEqual({
		loading: false,
		error: new TypeError("Cannot read properties of undefined (reading 'map')"),
	});
});
