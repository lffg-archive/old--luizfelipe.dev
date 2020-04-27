module.exports = {
  extends: 'lffg',
  overrides: [
    {
      files: 'src/{pages,layouts}/**/*',
      rules: {
        'import/prefer-default-export': 1,
        'import/no-default-export': 0
      }
    }
  ]
};
