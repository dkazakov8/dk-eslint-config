/**
 * @docs: https://eslint.org/docs/user-guide/configuring/language-options
 *
 */

const path = require('path');

const { getEslintConfig } = require('./src');

const eslintConfig = getEslintConfig({ tsConfigPath: path.resolve(__dirname, './tsconfig.json') });

module.exports = eslintConfig;
