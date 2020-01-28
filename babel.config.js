module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
       'module-resolver',
       {
         root: ['./src'],
         extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json', '.jpg', '.jpeg', '.png'],
         alias: {
            "_ASSETS/*": ["./src/assets/"],
            "_LIBS/*": ["./src/js/"],
            "_COMPONENTS/*": ["./src/js/components/"],
            "_STYLE/*": ["./src/style/"],
            "_SHARED/*": ["./src/js/components/shared/"]
         }
       }
     ]
  ]
};
