import PropTypes from 'prop-types';

export default function ListItem({id, label, sha}) {
	return (
		<>
			<dt>{label}</dt>
			<dd>
				<details>
					<summary>{sha}</summary>
					{id}
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
