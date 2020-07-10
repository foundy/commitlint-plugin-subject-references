# commitlint-plugin-subject-references

`subject-references` is a plugin for applying references rules in subject.

## Installation

```bash
$ npm install --save-dev commitlint-plugin-subject-references
```

## Usage

```javascript
module.exports = {
  extends: [
    '@commitlint/config-conventional'
  ],
  rules: {
    'references-empty': [2, 'never'],
    'subject-trailing-references': [2, 'always']
  },
  plugins: [
    'commitlint-plugin-subject-references'
  ]
};
```

## Rules

Use parentheses
```bash
# bad
$ git commit -m 'feat: my commit #1'

# good
$ git commit -m 'feat: my commit (#1)'
```

At the end of the line
```bash
# bad
$ git commit -m 'feat: (#1) my commit'

# good
$ git commit -m 'feat: my commit (#1)'
```
