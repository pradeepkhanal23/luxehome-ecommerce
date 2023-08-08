module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": "warn",
    "no-unused-vars": "off",
  },
  overrides: [
    {
      files: ["functions/**/*.js"],
      extends: "./.eslintrc.functions.js",
      // Add any specific rules or overrides for the function files if needed
    },
  ],
};
