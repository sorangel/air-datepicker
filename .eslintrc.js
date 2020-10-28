module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        'node': true,
    },
    'parser': 'babel-eslint',
    'extends': [
        'eslint:recommended',
    ],
    'globals': {
        'module': 'readonly',
    },
    'parserOptions': {
        'ecmaFeatures': {
            'legacyDecorators': true
        },
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'rules': {
        'indent': [
            'error',
            4,
            {
                SwitchCase: 1
            }
        ],
        'linebreak-style': [
            'error',
            'windows'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'warn',
            'always'
        ],
        'arrow-parens': ['error', 'as-needed', {requireForBlockBody: true}],
        'curly': ['error', 'multi-line'],
        'no-unused-vars': [
            'error',
            {
                'ignoreRestSiblings': true,
                'argsIgnorePattern': '^e$', // Allow to use 'e'(events) argument
                varsIgnorePattern: '^_$',
            }
        ],
        'max-len': ['error', {'code': 120, 'ignoreStrings': true}]
    },
};
