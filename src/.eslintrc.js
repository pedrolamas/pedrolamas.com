module.exports = {
  extends: ['plugin:@typescript-eslint/recommended', 'react-app', 'prettier/@typescript-eslint', 'plugin:prettier/recommended'],
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
      },
    ],
    '@typescript-eslint/prefer-interface': 'off',
    'react/display-name': [
      'warn',
      {
        ignoreTranspilerName: true,
      },
    ],
  },
};
