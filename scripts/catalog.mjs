import {readFile} from 'fs/promises';
import path from 'path';

const log = {
	info: (...args) => {
		// eslint-disable-next-line no-console
		console.info(...args);
	},
};

export default async function catalog(yargs) {
	// | [${REF_NAME}](${GH_PAGES_URL}${REF_NAME}) | [\`${SHA}\`](${REPO_URL}/tree/${SHA}) |
	log.info('Catalog script has started!', {
		file: yargs.argv.file,
		repo: yargs.argv.repo,
		homepage: yargs.argv.homepage,
	});

	yargs
		.option('file', {
			describe: 'Path to the catalog file.',
			required: true,
			type: 'string',
		})
		.option('repo', {
			describe: 'GitHub Repository url.',
			required: true,
			type: 'string',
		})
		.option('homepage', {
			describe: 'GitHub Pages url.',
			required: true,
			type: 'string',
		})
		.option('ref', {
			required: true,
			type: 'string',
		})
		.option('refname', {
			required: true,
			type: 'string',
		})
		.option('sha', {
			required: true,
			type: 'string',
		});

	const file = path.resolve(yargs.argv.file);
	// eslint-disable-next-line security/detect-non-literal-fs-filename
	const content = JSON.parse(await readFile(new URL(file, import.meta.url)));
	log.info('This is the content:', content);

	log.info('Catalog script finished.');
}
