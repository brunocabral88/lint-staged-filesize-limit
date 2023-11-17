'use strict';

const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');
const fileSizeParser = require('./file-size-parser');

const args = yargs(hideBin(process.argv))
	.usage('Usage: $0 --max-file-size-kb <number> [files...]')
	.option('max-file-size-kb', {
		alias: 'm',
		describe: 'The maximum file size in kilobytes',
		type: 'number',
		default: 500
	})
	.demandCommand(1)
	.argv;

fileSizeParser({ files: args._, maxFileSizeKb: args.maxFileSizeKb }); 