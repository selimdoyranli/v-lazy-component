module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true
    },
    warnOnUnsupportedTypeScriptVersion: false,
    templateTokenizer: {
      pug: 'vue-eslint-parser-template-tokenizer-pug'
    }
  },
  extends: ['plugin:vue/strongly-recommended', 'eslint-config-prettier', 'prettier'],
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'crlf'
      }
    ],
    'max-len': [
      'error',
      {
        code: 150,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true
      }
    ],
    'no-multiple-empty-lines': [2, { max: 2 }],
    semi: ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],
    'no-extend-native': 'off',
    'space-before-function-paren': 'off',
    camelcase: 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-throw-literal': 'off',
    'no-param-reassign': [
      'error',
      {
        props: false
      }
    ],
    '@typescript-eslint/no-var-requires': 'off',
    'vue/component-definition-name-casing': ['error', 'PascalCase'],
    'vue/multi-word-component-names': 'off',
    'vue/component-tags-order': ['error', { order: ['template', 'script', 'style', 'docs'] }],
    'vue/padding-line-between-blocks': ['error'],
    'vue/block-lang': [
      'error',
      {
        script: {
          allowNoLang: true,
          lang: 'ts'
        },
        style: {
          allowNoLang: true,
          lang: 'scss'
        }
      }
    ],
    'vue/no-empty-component-block': 'off',
    'vue/valid-template-root': 'off',
    'vue/no-static-inline-styles': 'off',
    'vue/require-prop-types': ['error'],
    'vue/require-default-prop': ['error'],
    'vue/attribute-hyphenation': ['error', 'always'],
    'vue/v-on-event-hyphenation': ['error', 'always'],
    'vue/html-self-closing': 'off',
    'vue/no-v-html': 'off',
    'vue/order-in-components': ['error'],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: '*', next: 'if' },
      { blankLine: 'always', prev: '*', next: 'switch' },
      { blankLine: 'always', prev: '*', next: 'for' },
      { blankLine: 'always', prev: '*', next: 'function' },
      { blankLine: 'never', prev: 'import', next: 'import' },
      { blankLine: 'always', prev: 'import', next: 'export' },
      { blankLine: 'always', prev: 'expression', next: 'export' },
      { blankLine: 'always', prev: 'import', next: 'expression' }
    ]
  }
}
