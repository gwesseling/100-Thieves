module.exports = {
    presets: ["module:metro-react-native-babel-preset"],
    plugins: [
        [
            "module-resolver",
            {
                root: ["./src"],
                extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json", ".jpg", ".jpeg", ".png"],
                alias: {
                    _ASSETS: ["./src/assets"],
                    _STYLES: ["./src/style"],
                    _LIBS: ["./src/js"],
                    _ENUMS: ["./src/js/enums"],
                    _COMPONENTS: ["./src/js/components"],
                    _SHARED: ["./src/js/components/shared"],
                    _HOOKS: ["./src/js/components/hooks"],
                },
            },
        ],
    ],
};
