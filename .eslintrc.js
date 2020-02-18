module.exports = {
    "parser": "@typescript-eslint/parser",
    "extends": ["eslint:recommended", "google", "plugin:react/recommended", "plugin:@typescript-eslint/recommended"],
    "rules": {
        "no-unused-vars": "off",
        "max-lines": ["error", {"max": 200, "skipBlankLines": true, "skipComments": true}],
        "max-len": ["error", {"code": 120}],
        "max-lines-per-function": ["warn", {"max": 50}],
        "prefer-const": [
            "error",
            {
                "destructuring": "all",
                "ignoreReadBeforeAssign": true
            }
        ],
        "no-console": 1,
        "promise/no-return-wrap": "error",
        "promise/param-names": "error",
        "promise/catch-or-return": "error",
        "promise/no-nesting": 1,
        "valid-jsdoc": "off",
        "react/jsx-pascal-case": [2],
        "no-invalid-this": "off",
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "react/react-in-jsx-scope": 2,
        "promise/always-return": "off",
        "indent": ["error", 4],
        "linebreak-style": "off",
        "no-debugger": 2,
        "jsdoc/no-types": 2,
        "complexity": 1,
        "react-hooks/rules-of-hooks": "error",
        "react/boolean-prop-naming": ["error", {"rule": "^(is|has|can|should)[A-Z]([A-Za-z0-9]?)+"}],
        "quotes": ["error", "double"],
        "require-jsdoc": [
            "error",
            {
                "require": {
                    "FunctionDeclaration": true,
                    "MethodDefinition": true,
                    "ClassDeclaration": true,
                    "ArrowFunctionExpression": true,
                    "FunctionExpression": true
                }
            }
        ],
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-unused-vars": "off"
    },
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "jest": true
    },
    "parserOptions": {
        "ecmaVersion": 7,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "plugins": ["babel", "promise", "import", "jsdoc", "react-hooks", "typescript"],
    "settings": {
        "react": {
            "version": "16.12.0"
        },
        "import/resolver": {
            "alias": [
                ["_COMPONENTS", "./src/js/components"],
                ["_SHARED", "./src/js/components/shared"],
                ["_LIBS", "./src/js"],
                ["_HOOKS", "./src/js/hooks"],
                ["_ASSETS", "./src/assets"],
                ["_STYLES", "./src/style"]
            ]
        }
    }
}
