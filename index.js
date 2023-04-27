module.exports = {
  extends: ['plugin:prettier/recommend'],
  plugin: ['simple-import-sort'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        "singleQuote": true,
        "trailingComma": "all",
        "semi": true,
        "endOfLine": "auto",
      },
    ]
  }
};
