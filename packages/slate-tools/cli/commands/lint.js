const fs = require('fs');

const runEslint = require('../../tools/eslint');
const runStylelint = require('../../tools/stylelint');
const runPrettierLint = require('../../tools/prettier');
const config = require('../../slate-tools.config');

if (fs.existsSync(config.paths.eslint.rc)) {
  runEslint();
}

if (fs.existsSync(config.paths.stylelint.rc)) {
  runStylelint();
}

// await runPrettierLint();
