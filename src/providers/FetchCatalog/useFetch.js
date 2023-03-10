import PropTypes from 'prop-types';
import {useEffect, useState} from 'react';

export const BUILD_SHAPE = {
	ref: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	sha: PropTypes.string.isRequired,
	homepage: PropTypes.string.isRequired,
	repo: PropTypes.string.isRequired,
};

export default function useFetch() {
	const [data, setData] = useState();
	const [error, setError] = useState();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		(async () => {
			try {
				setLoading(true);
				const response = await fetch(`${APP_PREFIX}catalog.json`);
				const json = await response.json();
				// eslint-disable-next-line camelcase, babel/camelcase
				setData(json.map(({ref_name, ...rest}) => ({label: ref_name, ...rest})));
			}
			catch (err) {
				setError(err);
				setData(undefined);
			}
			finally {
				setLoading(false);
			}
		})();
	}, []);

	return {data, loading, error};
}
