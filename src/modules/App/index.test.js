import App from '.';
import {screen} from '@testing-library/react';
import {Helmet} from 'react-helmet-async';
import BuildsList from '@src/components/BuildsList';
import {renderComponent} from '@test/render';

jest.mock('react-helmet-async');
jest.mock('@src/components/BuildsList');

beforeEach(() => {
	Helmet.mockImplementation(() => null);
	BuildsList.mockImplementation((props) => <ul data-testid="fake-list" {...props} />);
});

it('should render an App', () => {
	renderComponent(<App />);

	screen.getByRole('heading', {name: 'Storybook builds'});
	screen.getByRole('list', {name: 'Storybook builds'});
});
