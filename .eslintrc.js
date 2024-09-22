module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,
      "react-native/react-native": true,
    },
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:react-native/all",
    ],
    parser: "@babel/eslint-parser",
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: "module",
    },
    plugins: ["react", "react-native"],
    rules: {
      "no-unused-vars": ["warn", { vars: "all", args: "after-used", ignoreRestSiblings: true }],
    
    },
  };
  