module.exports = {
  extends: [
    //https://github.com/constverum/stylelint-config-rational-order
    'stylelint-config-rational-order',
    // https://github.com/shannonmoeller/stylelint-config-prettier
    'stylelint-config-prettier'
  ],
  overrides: [
    {
      customSyntax: 'postcss-scss',
      files: ['**/*.{css,sass,scss,less,stylus}']
    },
    {
      customSyntax: 'postcss-html',
      files: ['*.vue', '**/*.vue']
    }
  ],
  plugins: [
    // https://github.com/kristerkari/stylelint-scss#list-of-rules
    'stylelint-scss',
    // https://github.com/hudochenkov/stylelint-order
    'stylelint-order',
    'stylelint-config-rational-order/plugin'
  ],
  rules: {
    indentation: [
      2,
      {
        baseIndentLevel: 0
      }
    ],
    'color-named': 'never',
    'color-function-notation': 'legacy',
    'at-rule-no-unknown': null,
    'declaration-empty-line-before': [
      'always',
      {
        except: ['after-declaration'],
        ignore: ['after-comment', 'first-nested', 'inside-single-line-block'],
        severity: 'warning'
      }
    ],
    'rule-empty-line-before': [
      'always',
      {
        ignore: ['after-comment', 'first-nested'],
        severity: 'warning'
      }
    ]
  }
}
