import {readFile, writeFile} from 'fs/promises';
import path from 'path';

const log = console;

async function parseFile(file) {
	try {
	// eslint-disable-next-line security/detect-non-literal-fs-filename
		const content = await readFile(new URL(file, import.meta.url));
		return JSON.parse(content);
	}
	catch (err) {
		log.warn('parseFile failed.', err);
		return {};
	}
}

function redoBuilds(props, builds = []) {
	return [...builds.filter((build) => build.label !== props.label), {
		ref: props.ref,
		label: props.label,
		sha: props.sha,
		updated: new Date().toISOString(),
	}];
}

export default async function catalog(yargs) {
	const props = {
		file: yargs.argv.file,
		repo: yargs.argv.repo,
		homepage: yargs.argv.homepage,
		ref: yargs.argv.ref,
		label: yargs.argv.label,
		sha: yargs.argv.sha,
	};
	log.info('Catalog script has started!', props);

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
		.option('label', {
			required: true,
			type: 'string',
		})
		.option('sha', {
			required: true,
			type: 'string',
		});

	const file = path.resolve(yargs.argv.file);

	const content = parseFile(file);
	log.info('This is the current content:', content);

	const builds = redoBuilds(props, content?.builds);

	const newContent = {
		builds,
		homepage: props.homepage,
		repo: props.repo,
	};

	log.info('This is gonna be new content:', newContent);

	const string = JSON.stringify(newContent);

	// eslint-disable-next-line security/detect-non-literal-fs-filename
	await writeFile(file, string);

	log.info('Catalog script finished.');
}
