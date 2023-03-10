import {Helmet} from 'react-helmet-async';
import BuildsList from '@src/components/BuildsList';
import BuildsProvider from 'src/providers/FetchCatalog/DataProvider';

export default function App() {
	return (
		<BuildsProvider>
			<Helmet><title>Storybook builds</title></Helmet>
			<h1 id="top-headline">Storybook builds</h1>
			<BuildsList aria-labelledby="top-headline" />
		</BuildsProvider>
	);
}
