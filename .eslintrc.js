module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "class-methods-use-this": "off",
    "no-param-reassign":"off",
    "camelcase": "off",
    "no-unused-vars": ["error", {"argsIgnorePattern": "next"}],
    "linebreak-style": 0,
    "arrow-body-style": 0,
    "comma-dangle": ["off"],
    "no-confusing-arrow": 0
  },
};
