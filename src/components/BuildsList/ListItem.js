import PropTypes from 'prop-types';

export default function ListItem({id, label, sha}) {
	return (
		<>
			<dt>{id}</dt>
			<dd>
				<details>
					<summary>{label}</summary>
					<p>{sha}</p>
					<p>{id}</p>
				</details>
			</dd>
		</>
	);
}

ListItem.propTypes = {
	// homepage: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	// repo: PropTypes.string.isRequired,
	sha: PropTypes.string.isRequired,
};
