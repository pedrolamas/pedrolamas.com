module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: [`react-app`],
  rules: {
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
      },
    ],
    "@typescript-eslint/no-explicit-any": ["off"],
  },
}
