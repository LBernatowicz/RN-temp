module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'prettier/prettier': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        'comma-dangle': 'off',
        semi: 'off',
        'jsx-quotes': 'off',
        'react-native/no-inline-styles': 'off',
        quotes: 'off',
      },
    },
  ],
};
