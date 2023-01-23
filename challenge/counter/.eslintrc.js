module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier', 'plugin:@next/next/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  settings: {
    react: {
      version: '18',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
      typescript: {},
    },
  },
  rules: {
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    camelcase: 'off',
    'no-underscore-dangle': 'off',
    'no-undef': 'off',
    curly: ['error', 'all'],
    'no-use-before-define': 'off',
    'arrow-body-style': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
    'no-shadow': 'off',
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'import/no-extraneous-dependencies': ['error', { packageDir: __dirname }],
    'react/require-default-props': 'off',
    'consistent-return': 'off',
    'react/function-component-definition': 'off',
    'no-param-reassign': 'off',
  },
  overrides: [
    {
      files: ['*.test.{ts,tsx}'],
      rules: {
        'no-console': ['error', { allow: ['warn', 'error'] }],
      },
    },
  ],
};
