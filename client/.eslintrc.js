module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': 'off',
    'react/button-has-type': 'off',
    'no-param-reassign': 'off',
    'no-use-before-define': 'off',
    'no-undef': 'off',
    'arrow-parens': 'off',
    'no-unused-vars': 'off',
    'object-curly-newline': 'off',
    'react/prop-types': 'off',
    'no-underscore-dangle': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
