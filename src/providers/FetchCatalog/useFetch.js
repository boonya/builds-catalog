import PropTypes from 'prop-types';
import {useEffect, useState} from 'react';

export const BUILD_SHAPE = {
	ref: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	sha: PropTypes.string.isRequired,
	updated: PropTypes.instanceOf(Date).isRequired,
};

export const CATALOG_SHAPE = {
	builds: PropTypes.arrayOf(PropTypes.shape(BUILD_SHAPE)).isRequired,
	homepage: PropTypes.string.isRequired,
	repo: PropTypes.string.isRequired,
};

function extract(data) {
	const builds = data.builds.map(({updated, ...rest}) => ({
		updated: updated && new Date(updated),
		...rest,
	}));
	return {
		builds,
		homepage: data.homepage,
		repo: data.repo,
	};
}

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
				setData(extract(json));
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
