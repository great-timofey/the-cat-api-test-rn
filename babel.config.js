module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests/'],
          $components: './src/components',
          $store: './src/store',
          $types: './src/types',
          $services: './src/services',
          $screens: './src/screens',
        },
      },
    ],
  ],
};
