/** @format */

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-empty': [2, 'never'],
  },
  parserPreset: {
    parserOpts: {
      headerPattern: /^(\[SVPOC-\d+])\s*(feat|fix|docs|style|refactor|test|chore):\s(.*)$/,
      headerCorrespondence: ['id', 'type', 'subject'],
    },
  },
}
