module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 7,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react", "prettier"],
  env: {
    browser: true,
    jasmine: true,
    jest: true,
  },
  extends: [
    "airbnb-typescript",
    // "plugin:jest/recommended",
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  rules: {
    indent: "off",
    "linebreak-style": "off",
    "require-await": "error",
    "arrow-parens": "off",
    "comma-dangle": "off",
    // "jest/no-standalone-expect": "off",
    "import/prefer-default-export": "off",
    "react/no-unescaped-entities": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-curly-newline": "off",
    "react/jsx-filename-extension": [1, { extensions: [".tsx", ".jsx"] }],
    "react/jsx-one-expression-per-line": "off",
    "react/require-default-props": "off",
    "jsx-a11y/label-has-associated-control": [
      2,
      {
        required: {
          every: ["id"],
        },
      },
    ],
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/no-empty-interface": ["error"],
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/no-unused-expressions": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
    react: {
      pragma: "React",
      version: "detect",
    },
  },
};