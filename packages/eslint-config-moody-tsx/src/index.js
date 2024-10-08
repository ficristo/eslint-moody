/* eslint-env node */

module.exports = {
    "globals": {
        "console": false,
    },
    // the rules below should be sorted in a same way they are sorted on http://eslint.org/docs/rules page
    "rules": {
        // http://eslint.org/docs/rules/#possible-errors
        "for-direction": "error",
        "getter-return": "error",
        "no-compare-neg-zero": "error",
        "no-cond-assign": "error",
        "no-console": "warn",
        "no-constant-condition": ["error", { "checkLoops": false }],
        "no-control-regex": "error",
        "no-debugger": "error",
        "no-dupe-args": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-empty": "error",
        "no-empty-character-class": "error",
        "no-ex-assign": "error",
        "no-extra-boolean-cast": "error",
        "no-extra-semi": "error",
        "no-func-assign": "error",
        "no-inner-declarations": "error",
        "no-invalid-regexp": "error",
        "no-irregular-whitespace": "error",
        "no-obj-calls": "error",
        "no-regex-spaces": "error",
        "no-sparse-arrays": "error",
        "no-unexpected-multiline": "error",
        "no-unreachable": "error",
        "no-unsafe-finally": "error",
        "no-unsafe-negation": "error",
        "use-isnan": "error",
        "valid-jsdoc": "off", // Rule deprecated
        "valid-typeof": "error",
        // http://eslint.org/docs/rules/#best-practices
        "curly": "error",
        "eqeqeq": "error",
        "guard-for-in": "error",
        "no-caller": "error",
        "no-case-declarations": "error",
        "no-else-return": ["error", { allowElseIf: false }],
        "no-empty-function": "error",
        "no-empty-pattern": "error",
        "no-fallthrough": "error",
        "no-global-assign": "error",
        "no-invalid-this": "error",
        "no-iterator": "error",
        "no-loop-func": "error",
        "no-multi-str": "error",
        "no-new-func": "error",
        "no-new-wrappers": "error",
        "no-new": "error",
        "no-octal": "error",
        "no-proto": "error",
        "no-redeclare": "error",
        "no-script-url": "error",
        "no-self-assign": "error",
        "no-unused-labels": "error",
        "no-useless-escape": "error",
        "wrap-iife": ["error", "outside"],
        // http://eslint.org/docs/rules/#strict-mode
        "strict": "error",
        // http://eslint.org/docs/rules/#variables
        "no-delete-var": "error",
        "no-shadow-restricted-names": "error",
        "no-shadow": "error",
        "no-undef": "error",
        "no-unused-vars": ["error", { "vars": "all", "args": "none" }],
        "no-use-before-define": "off",
        // http://eslint.org/docs/rules/#nodejs-and-commonjs
        "no-new-require": "error",
        // http://eslint.org/docs/rules/#stylistic-issues
        "block-spacing": "error",
        "brace-style": ["error", "1tbs", { allowSingleLine: true }],
        "camelcase": ["error", { "properties": "never" }],
        "comma-dangle": ["error", "only-multiline"],
        "comma-spacing": "error",
        "comma-style": ["error", "last"],
        "computed-property-spacing": "error",
        "eol-last": "error",
        "func-call-spacing": "error",
        "key-spacing": ["off", { beforeColon: false, afterColon: true }],
        "keyword-spacing": "error",
        "max-len": ["error", 120],
        "multiline-ternary": ["error", "always-multiline"],
        "new-cap": "error",
        "new-parens": "error",
        "no-bitwise": "error",
        "no-mixed-spaces-and-tabs": "error",
        "no-multiple-empty-lines": ["error", { "max": 2, "maxBOF": 1, "maxEOF": 1 }],
        "no-new-object": "error",
        "no-tabs": "error",
        "no-trailing-spaces": "error",
        "no-whitespace-before-property": "error",
        "operator-linebreak": ["error", "after", {
            "overrides": {
                "?": "before",
                ":": "before"
            }
        }],
        "quotes": ["error", "double", { "avoidEscape": true }],
        "semi-spacing": "error",
        "space-before-blocks": "error",
        "space-before-function-paren": ["error", {"anonymous": "always", "named": "never", "asyncArrow": "always"}],
        "space-in-parens": "error",
        "space-infix-ops": "error",
        "space-unary-ops": "error",
        // https://eslint.org/docs/rules/#ecmascript-6
        "constructor-super": "error",
        "no-class-assign": "error",
        "no-const-assign": "error",
        "no-dupe-class-members": "error",
        "no-new-symbol": "error",
        "no-this-before-super": "error",
        "require-yield": "error"
    },
    "overrides": [
        // TypeScript
        {
            "files": [
                "**/*.ts",
                "**/*.tsx"
            ],
            "excludedFiles": "**/*.js",
            "parser": "@typescript-eslint/parser",
            "parserOptions": {
                "ecmaVersion": 6,
                "sourceType": "module",
                "ecmaFeatures": {
                    "jsx": true
                }
            },
            "plugins": [
                "react",
                "@typescript-eslint"
            ],
            "rules": {
                // http://eslint.org/docs/rules/#variables
                "no-shadow": "off",
                "@typescript-eslint/no-shadow": ["error"],
                "no-undef": "off",
                "no-unused-vars": "off",
                "@typescript-eslint/no-unused-vars": ["error", { "vars": "all", "args": "none", "caughtErrors": "none" }],
                // http://eslint.org/docs/rules/#stylistic-issues
                "camelcase": "off",
                "@typescript-eslint/naming-convention": [
                    "error",
                    {
                        "selector": "default",
                        "format": ["camelCase"]
                    },
                
                    {
                        "selector": "variable",
                        "format": ["camelCase", "UPPER_CASE"]
                    },
                    {
                        "selector": "parameter",
                        "format": ["camelCase"],
                        "leadingUnderscore": "allow"
                    },
                
                    {
                        "selector": "memberLike",
                        "modifiers": ["private"],
                        "format": ["camelCase"],
                        "leadingUnderscore": "require"
                    },
                
                    {
                        "selector": "typeLike",
                        "format": ["PascalCase"]
                    }
                ],
                "comma-dangle": ["error", "only-multiline"],
                "one-var": ["error", { let: "never", const: "never" }],
                "one-var-declaration-per-line": ["error", "always"],
                // https://eslint.org/docs/rules/#ecmascript-6
                "no-var": "error",
                "prefer-const": "error",
                // Specific to TypeScript
                "@typescript-eslint/array-type": ["error", { default: "generic" }],
                "@typescript-eslint/member-delimiter-style": ["error", {
                    multiline: {
                        delimiter: "semi",
                        requireLast: true
                    },
                    singleline: {
                        delimiter: "comma",
                        requireLast: false
                    }
                }],
                "@typescript-eslint/explicit-function-return-type": "error",
                // React plugin
                "react/jsx-uses-react": "error",
                "react/jsx-uses-vars": "error"
            }
        }
    ]
};
