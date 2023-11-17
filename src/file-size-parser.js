'use strict';

const fs = require('fs');

module.exports = function ({ maxFileSizeKb, files }) {	
	const SIZE_LIMIT_BYTES = maxFileSizeKb * 1024;
	const SIZE_LIMIT_KB = maxFileSizeKb;
	const filesOverLimit = [];

	for (const file of files) {
		const { size } = fs.statSync(file);
		if (size > SIZE_LIMIT_BYTES) {
			filesOverLimit.push({ name: file, size });
		}
	}

	if (filesOverLimit.length > 0) {

		console.error(
			`The following files are over the size limit (${SIZE_LIMIT_KB}kb):`
		);
		filesOverLimit.forEach((file) =>
			console.error(`\t* ${file.name} - ${Math.round(file.size / 1024)}kb`)
		);

		process.exit(1);
	}
}


