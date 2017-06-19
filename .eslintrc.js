module.exports = {
  extends: ['airbnb-base'],
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    mongo: true
  },
  ecmaFeatures: {
    blockBindings: true,
    templateStrings: true
  },
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
    'no-underscore-dangle': ['error', { allow: ['_id', '_uid', '__v'] }],
    // Line length
    'max-len': ['error', 120, 2, { ignoreComments: false }],
    // Functions
    'func-names': ['error', 'never'],
    'arrow-parens': ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
    'no-param-reassign': ['error', { props: false }]
  },
  plugins: ['html'],
  settings: {
    'import/resolver': {
      webpack: { config: './config/bundler/webpack/base.js' }
    }
  }
};
