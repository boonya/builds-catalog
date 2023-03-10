import ListItem from './ListItem';
import GeneralError from '@src/components/GeneralError';
import Progressbar from '@src/components/Progressbar';
import {useCatalogContext} from '@src/providers/FetchCatalog/ContextProvider';

export default function BuildsList(props) {
	const {data, loading, error} = useCatalogContext();

	if (loading) {
		return <Progressbar />;
	}

	if (error) {
		return <GeneralError />;
	}

	if (!data?.length) {
		return <GeneralError>There is no any build info.</GeneralError>;
	}

	return (
		<ul {...props}>
			{data.map(({ref, ...rest}) => <ListItem key={ref} id={ref} {...rest} />)}
		</ul>
	);
}
