const path = require('path');

module.exports = {
  extends: ['stylelint-prettier/recommended', path.resolve(__dirname, './stylelint-rules.js')],
  plugins: ['stylelint-scss'],
};
