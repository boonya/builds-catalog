import ContextProvider from './ContextProvider';
import useFetch from './useFetch';
import PropTypes from 'prop-types';

export default function DataProvider({children, ...options}) {
	const result = useFetch(options);

	return (
		<ContextProvider {...result}>
			{children}
		</ContextProvider>
	);
}

DataProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
