module.exports = {
    root: true,
    env: {
      node: true
    },
    globals: { wx: true },
    extends: [],
    parserOptions: {
      ecmaVersion: 2020
    },
    rules: {
      "no-console": process.env.NODE_ENV === "production" ? "off" : "off",
      "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
      "@typescript-eslint/no-explicit-any": ["off"],
      "prefer-const": "off",
      "@typescript-eslint/no-var-requires": 0,
      "@typescript-eslint/camelcase": 0,
      "@typescript-eslint/ban-ts-ignore": "off",
      "@typescript-eslint/no-this-alias": 0,
      "@typescript-eslint/no-empty-function": 0,
      "@typescript-eslint/no-parameter-properties": 0,
      "no-useless-escape": "off"
    },
    overrides: [
      {
        files: ["**/__tests__/*.{j,t}s?(x)", "**/tests/unit/**/*.spec.{j,t}s?(x)"],
        env: {
          mocha: true
        }
      }
    ]
  };
  