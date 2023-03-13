import PropTypes from 'prop-types';
import {useCatalogContext} from '@src/providers/FetchCatalog/ContextProvider';

function trimEndSlash(string) {
	return string.replace(/(?<path>.*?)\/?$/u, '$1');
}

export default function ListItem({id, label, sha, updated}) {
	const {data} = useCatalogContext();

	const homepage = trimEndSlash(data.homepage);
	const repo = trimEndSlash(data.repo);

	return (
		<>
			<dt><a target="_blank" href={`${homepage}/${id}`} rel="noreferrer">{label}</a></dt>
			<dd>
				<details>
					<summary>Created at {updated.toLocaleString()}</summary>
					<p>{id}</p>
					<p>
						<a target="_blank" href={`${repo}/tree/${sha}`} rel="noreferrer">{sha}</a>
					</p>
				</details>
			</dd>
		</>
	);
}

ListItem.propTypes = {
	id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	sha: PropTypes.string.isRequired,
	updated: PropTypes.instanceOf(Date).isRequired,
};
