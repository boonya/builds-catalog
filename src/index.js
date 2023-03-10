import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import {HelmetProvider} from 'react-helmet-async';
import ErrorBoundary from '@src/components/ErrorBoundary';
import Progressbar from '@src/components/Progressbar';
import App from '@src/modules/App';
import ThemeProvider from '@src/providers/Theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<HelmetProvider>
			<ThemeProvider>
				<ErrorBoundary>
					<Suspense fallback={<Progressbar />}>
						<App />
					</Suspense>
				</ErrorBoundary>
			</ThemeProvider>
		</HelmetProvider>
	</React.StrictMode>
);
