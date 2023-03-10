import App from '.';
import {screen} from '@testing-library/react';
import {renderComponent} from '@test/render';

it('should render an App', () => {
	renderComponent(<App />);

	screen.getByRole('heading', {name: 'My own version of Create React App'});
});
