import {CATALOG_SHAPE} from './useFetch';
import PropTypes from 'prop-types';
import {createContext, useContext} from 'react';

const CatalogContext = createContext();

export function useCatalogContext() {
	return useContext(CatalogContext);
}

export default function ContextProvider({children, ...props}) {
	return (
		<CatalogContext.Provider value={props}>
			{children}
		</CatalogContext.Provider>
	);
}

ContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
	data: PropTypes.shape(CATALOG_SHAPE),
	error: PropTypes.instanceOf(Error),
	loading: PropTypes.bool,
};

ContextProvider.defaultProps = {
	data: undefined,
	error: undefined,
	loading: false,
};
