module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/essential",
    "@vue/standard"
  ],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    quotes: ["warn", "double"],
    semi: ["error", "always"],
    "space-before-function-paren": ["error", "never"],
    "object-curly-spacing": ["error", "never"],
    "spaced-comment": ["off"],
    "no-useless-return": ["off"],
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  }
};
