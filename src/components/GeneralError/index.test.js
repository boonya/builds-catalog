import GeneralError from '.';
import {screen} from '@testing-library/react';
import {renderComponent} from '@test/render';

it('should render component.', () => {
	renderComponent(<GeneralError />);

	screen.getByRole('heading', {name: 'An error occurred.'});
});
