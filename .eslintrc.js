module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  "plugins": ["react", "@typescript-eslint", "prettier","react-hooks"
],
  "env": {
    "browser": true,
    "jasmine": true,
    "jest": true
  },
  "rules": {
    "@typescript-eslint/no-explicit-any": 0,
    "prettier/prettier": ["error", { "singleQuote": true }],
    "@typescript-eslint/explicit-member-accessibility": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "react/prop-types": 0,
    "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "no-console": "off"
  },
  "settings": {
    "react": {
      "pragma": "React",
      "version": "detect"
    }
  },
  "parser": "@typescript-eslint/parser"
};

