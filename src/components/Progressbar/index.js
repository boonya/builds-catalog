import './index.css';
import {forwardRef} from 'react';
import Component from '@src/components/Component';

const Progressbar = forwardRef((props, ref) => {
	return (
		<Component
			ref={ref}
			component="span"
			role="progressbar"
			aria-label="Please wait"
			className="progressbar"
			{...props}
		>
			Please Wait...
		</Component>
	);
});

Progressbar.displayName = 'Progressbar';

export default Progressbar;
