#!/usr/bin/env node
import catalog from './catalog.mjs';
import yargs from 'yargs';
import {hideBin} from 'yargs/helpers';

yargs(hideBin(process.argv))
	.command('catalog', 'Play with catalog file.', catalog)
	.help()
	.option('verbose', {type: 'boolean', describe: 'Print logs'})
	.parse();
