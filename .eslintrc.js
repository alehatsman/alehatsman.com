module.exports = {
  extends: [
    "standard-with-typescript",
    "plugin:react/recommended",
    "plugin:jest/recommended",
    "plugin:react-hooks/recommended",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  parserOptions: {
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/strict-boolean-expressions": 0,
    "@typescript-eslint/restrict-template-expressions": 0,
    "@typescript-eslint/no-base-to-string": 0,
    "react/prop-types": 0,
    "react/display-name": 0
  },
}
