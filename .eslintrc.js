module.exports = {
  extends: ['airbnb-base'],
  env: {
    browser: true,
    es6: true,
  },
  // ecmaFeatures: {
  //   blockBindings: true,
  //   templateStrings: true
  // },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    allowImportExportEverywhere: true,
    ecmaFeatures: { impliedStrict: true, }
  },
  globals: {
    expect: true,
    sinon: true,
    EDX_URI: true,
    MATTERMOST_URI: true
  },
  rules: {
    'no-console': 'error',
    'comma-dangle': ['error', 'never'],
    // Line length
    'max-len': ['error', 100, 2, { ignoreComments: true }],
    // Functions
    'func-names': ['error', 'never'],
    'arrow-parens': ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
    'no-param-reassign': ['error', { props: false }]
  },
  plugins: ['html'],
  settings: {
    'import/resolver': {
      webpack: { config: './webpack.config.js' }
    }
  }
};
