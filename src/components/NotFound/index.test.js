import NotFound from '.';
import {screen} from '@testing-library/react';
import {renderComponent} from '@test/render';

it('should render component.', () => {
	renderComponent(<NotFound />);

	screen.getByRole('heading', {name: 'Not Found.'});
});
