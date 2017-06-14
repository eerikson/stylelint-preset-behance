module.exports = {
  plugins: [
    'stylelint-order',
  ],
  rules: {
    // Color
    'color-hex-case': 'lower',
    'color-hex-length': 'short',
    'color-named': 'never',
    'color-no-invalid-hex': true,

    // Order
    'order/order': [
      'dollar-variables',
      'declarations',
      'rules',
    ],
    'order/properties-alphabetical-order': true,

    // Font family

    // Font weight

    // Function
    'function-name-case': [
      'lower',
      {
        ignoreFunctions: ['/^DXImageTransform/'],
      },
    ],
    'function-parentheses-space-inside': 'never',
    'function-url-quotes': 'always',
    'function-url-scheme-whitelist': ['data'],

    // Number
    'number-no-trailing-zeros': true,
    'number-leading-zero': 'never',

    // String
    // 'string-quotes': 'single',

    // Length
    'length-zero-no-unit': true,

    // Time

    // Unit
    'unit-case': 'lower',
    'unit-no-unknown': true,

    // Value
    // 'value-keyword-case': 'lower',

    // Value list

    // Custom property

    // Shorthand property
    'shorthand-property-no-redundant-values': true,

    // Property
    'property-case': 'lower',
    'property-no-unknown': [
      true,
    ],

    // Keyframe declaration

    // Declaration
    'declaration-bang-space-after': 'never',
    'declaration-bang-space-before': 'always',
    'declaration-block-trailing-semicolon': 'always',
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'declaration-property-value-blacklist': {
      '/^border(?:-(?:top|right|bottom|left))$/': ['none'],
    },

    // Declaration block

    // Block
    'block-no-empty': true,
    'block-opening-brace-space-before': 'always',

    // Selector
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'selector-pseudo-element-colon-notation': 'double',

    // Selector list
    'selector-list-comma-newline-after': 'always-multi-line',

    // Root rule

    // Rule

    // Media feature
    'media-feature-parentheses-space-inside': 'never',

    // Custom media

    // Media query list

    // At-rule

    // Comment

    // General / Sheet
    indentation: [
      2,
      {
        except: ['value'],
        ignore: ['inside-parens'],
      },
    ],
    'no-extra-semicolons': true,
    'no-missing-end-of-source-newline': true,
    'rule-empty-line-before': [
      'always', {
        except: ['first-nested'],
        ignore: ['after-comment'],
      },
    ],
    'block-closing-brace-empty-line-before': 'never',
    'declaration-empty-line-before': [
      'never', {
        ignore: ['after-declaration'],
      },
    ],
    'block-closing-brace-newline-before': 'always',
    'block-closing-brace-newline-after': 'always',
    'max-empty-lines': 1,
    'property-no-vendor-prefix': true,
    'value-no-vendor-prefix': true,
    'selector-no-vendor-prefix': true,
    'at-rule-no-vendor-prefix': true,
    'media-feature-name-no-vendor-prefix': true,
  },
};
