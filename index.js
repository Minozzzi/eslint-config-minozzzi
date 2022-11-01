module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'prettier/prettier',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:react-hooks/recommended',
    'standard',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/parser'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    'prettier',
    'jsx-a11y',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-empty-interface': 'off',
    'react/display-name': 'off',
    'camelcase': 'off',
    'react/prop-types': 'off',
    'space-before-function-paren': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-unresolved': 'off',
    'import/no-named-as-default': 'off',
    'no-use-before-define': 'off',
    'default-param-last': 'off',
    'import/order': [
      'error',
      {
        'groups': ['builtin', 'external', 'internal'],
        'pathGroups': [
          {
            'pattern': 'react',
            'group': 'external',
            'position': 'before'
          }
        ],
        'pathGroupsExcludedImportTypes': ['react'],
        'newlines-between': 'always',
        'alphabetize': {
          'order': 'asc',
          'caseInsensitive': true
        }
      }
    ],
    'prettier/prettier': ["error", {
      'semi': false,
      'singleQuote': true,
      'jsxBracketSameLine': false,
      'jsxSingleQuote': true,
      'arrowParens': 'avoid',
      'endOfLine': 'auto',
      'trailingComma': 'none',
      'tabWidth': 2,
    }],
    'jsx-a11y/alt-text': [
      'warn',
      {
        elements: ['img'],
        img: ['Image'],
      },
    ],
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/aria-proptypes': 'warn',
    'jsx-a11y/aria-unsupported-elements': 'warn',
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
    },
  }
}