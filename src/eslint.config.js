/**
 * @docs: https://eslint.org/docs/user-guide/configuring/language-options
 * @type {import("eslint").Linter.BaseConfig }
 *
 */

const path = require('path');

function getConfig(options) {
  return {
    env: { node: true, browser: true },
    parser: '@typescript-eslint/parser',
    extends: [path.resolve(__dirname, './rules.js'), 'prettier'],
    plugins: ['react', 'prettier', 'import', '@typescript-eslint'],
    settings: {
      react: { pragma: 'React', version: 'detect' },
      'import/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx'] },
      'import/resolver': options.tsConfigPath
        ? {
            typescript: {
              alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
              project: options.tsConfigPath,
            },
          }
        : undefined,
    },
    parserOptions: { sourceType: 'module', ecmaVersion: 6 },

    // For TS files some other rules added
    overrides: options.tsConfigPath
      ? [
          {
            files: ['*.ts', '*.tsx'],
            extends: [path.resolve(__dirname, './rulesTs.js')],
            parserOptions: { project: [options.tsConfigPath] },
          },
        ]
      : undefined,
  };
}

module.exports = getConfig;
