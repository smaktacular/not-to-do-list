module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    'react/jsx-props-no-spreading': ['off'],
    'react/no-children-prop': ['off'],
    // config issues ...
    // 'sort-imports': 'error',
    // // we only want single quotes
    // quotes: ['error', 'single'],
    // // we want to force semicolons
    // semi: ['error', 'always'],
    // // we use 2 spaces to indent our code
    // indent: ['error', 2],
    // // we want to avoid useless spaces
    // 'no-multi-spaces': ['error'],
  },
};
