module.exports = {
  extends: 'lffg',
  overrides: [
    {
      files: 'src/{pages,layouts,templates}/**/*',
      rules: {
        'import/prefer-default-export': 1,
        'import/no-default-export': 0
      }
    }
  ],
  rules: {
    'react/jsx-pascal-case': [1, { allowAllCaps: true }]
  }
};
