module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['module:react-native-dotenv', {
      moduleName: 'react-native-dotenv',
      path: '.env'
    }],
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@config': './src/components',
          '@constants': './src/constants',
          '@hooks': './src/hooks/*',
          '@navigation': './src/navigation',
          '@pages': './src/pages',
          '@reducers': './src/reducers',
          '@screens': './src/screens',
          '@services': './src/services',
          '@storage': './src/storage',
          '@themes': './src/themes'
        }
      }
    ]
  ]
};
