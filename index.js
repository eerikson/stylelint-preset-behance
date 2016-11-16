module.exports = {
  rules: {
    // Color
    'color-hex-case': 'lower',
    'color-hex-length': 'short',
    'color-named': 'never',
    'color-no-invalid-hex': true,

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
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'declaration-property-value-blacklist': {
      '/^border(?:-(?:top|right|bottom|left))$/': ['none'],
    },

    // Declaration block
    'declaration-block-properties-order': [
      'alphabetical',
    ],

    // Block
    'block-no-empty': true,
    'block-opening-brace-space-before': 'always',

    // Selector
    'selector-no-empty': true,
    'selector-pseudo-class-parentheses-space-inside': 'never',

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
      },
    ],
    'no-extra-semicolons': true,
    'no-missing-end-of-source-newline': true,
  },
};
