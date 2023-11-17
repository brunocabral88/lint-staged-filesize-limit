# lint-staged-filesize-limit

A lint-staged plugin that checks the size of specified files against a maximum file size limit.

## Prerequisites

This plugin assumes you have [lint-staged](https://github.com/lint-staged/lint-staged) installed and working. If you don't, please follow the instructions in their documentation to get it set up first.

## Installation

To use this lint-staged plugin, you can install it using npm/yarn:

```bash
npm install lint-staged-filesize-limit --save-dev
```

OR 

```bash
yarn add -D lint-staged-filesize-limit
```

## Examples

Add the following configuration to your lint-staged configuration object in your package.json (or .lintstagedrc):

- Prevent any .js file over 500KB from being committed

```
"lint-staged": {
  "*.js": ["lint-staged-filesize-limit"]
}
```

- Prevent any .js file over 1MB from being committed

```
"lint-staged": {
  "*.js": ["lint-staged-filesize-limit --maxFileSizeKb 1000"]
}
```

- Prevent any image file over 1MB from being committed

```
"lint-staged": {
  "*.{png,jpg,gif}": ["lint-staged-filesize-limit --maxFileSizeKb 1000"]
}
```

## Options

- (Optional) `--maxFileSizeKb` (or `-m`): The maximum file size limit in kilobytes. Defaults to 500KB.

## How It Works

This plugin calculates the size of each specified file and compares it against the provided maximum file size limit (default 500KB). If any file exceeds the limit, it logs an error message and exits the process with a non-zero code, indicating a failed pre-commit hook.