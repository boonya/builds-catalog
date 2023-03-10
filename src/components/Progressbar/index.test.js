import Progressbar from '.';
import {screen} from '@testing-library/react';
import {renderComponent} from '@test/render';

it('should render component.', () => {
	renderComponent(<Progressbar />);

	const progressbar = screen.getByRole('progressbar', {name: 'Please wait'});
	expect(progressbar).toHaveTextContent('Please Wait...');
});
