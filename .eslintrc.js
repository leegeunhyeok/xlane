const { resolve } = require('node:path');

const project = resolve(__dirname, 'tsconfig.json');

module.exports = {
  root: true,
  extends: [
    require.resolve('@vercel/style-guide/eslint/node'),
    require.resolve('@vercel/style-guide/eslint/typescript'),
    require.resolve('@vercel/style-guide/eslint/react'),
  ],
  parserOptions: {
    project,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  overrides: [
    {
      files: ['src/**/*.ts', 'src/**/*.tsx'],
      rules: { 'import/no-named-as-default-member': 'off' },
    },
  ],
};