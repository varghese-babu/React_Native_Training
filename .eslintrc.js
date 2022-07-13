module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true
  },
  extends: ['@react-native-community', 'airbnb-typescript', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2020,
    sourceType: 'module',
    project: 'tsconfig.eslint.json'
  },
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    'no-tabs': 0,
    quotes: 'off',
    'react/destructuring-assignment': 'off',
    'comma-dangle': ['error', 'never'],
    'no-param-reassign': 'off',
    'react/jsx-props-no-spreading': 'off',
    // disable the below rule 'no-use-before-define' as it is reporting incorrect errors
    '@typescript-eslint/no-use-before-define': ['off'],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'no-restricted-syntax': 1,
    'no-use-before-define': 0,
    'no-param-reassign': 1,
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-console': 2,
    'max-len': [1, 120],
    'no-useless-escape': 1,
    'func-names': 0,
    'function-paren-newline': ['error', 'consistent'],
    'prefer-spread': 1,
    'space-before-function-paren': 0,
    'react/no-multi-comp': 1,
    'no-else-return': 'error',
    'no-unneeded-ternary': 'error',
    'no-nested-ternary': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'one-var': ['error', 'never'],
    'prefer-arrow-callback': 'error',
    strict: 'error',
    'no-underscore-dangle': 'off',
    'symbol-description': 'error',
    'no-shadow': 'off',
    'no-multiple-empty-lines': 2,
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_'
      }
    ]
  },
  overrides: [
    {
      // Added since some of the type definitions throw incorrect lint error
      files: ['types.ts'],
      rules: {
        '@typescript-eslint/no-unused-vars': ['off']
      }
    }
  ]
};
