module.exports = {
	root: true,
	env: {
		  browser: true,
		  es6: true,
	},
	extends: [
	  '@react-native-community',
	  'airbnb-typescript',
	  'prettier'
	  ],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		  ecmaFeatures: {
			  jsx: true,
		  },
		  ecmaVersion: 2020,
		  sourceType: 'module',
	  project: 'tsconfig.eslint.json',
	},
	plugins: ['@typescript-eslint', 'import'],
	rules: {
		  'no-tabs': 0,
		  'quotes': 'off',
		  'react/destructuring-assignment': 'off',
		  'comma-dangle': ['error', 'never'],
		  'no-param-reassign': 'off',
		  'react/jsx-props-no-spreading': 'off',
		  // disable the below rule 'no-use-before-define' as it is reporting incorrect errors
		  '@typescript-eslint/no-use-before-define': ['off'],
		  "no-shadow": "off",
		  "@typescript-eslint/no-shadow": "error"
	  },
	  overrides: [
	  {
			  // Added since some of the type definitions throw incorrect lint error
		'files': ['types.ts'],
		'rules': {
				  '@typescript-eslint/no-unused-vars': ['off']
		}
	  }
	]
  };
  