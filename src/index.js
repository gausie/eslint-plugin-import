export const rules = {
  'no-unresolved': require('./rules/no-unresolved'),
  'named': require('./rules/named'),
  'default': require('./rules/default'),
  'namespace': require('./rules/namespace'),
  'export': require('./rules/export'),

  'no-named-as-default': require('./rules/no-named-as-default'),

  'no-commonjs': require('./rules/no-commonjs'),
  'no-amd': require('./rules/no-amd'),
  'no-duplicates': require('./rules/no-duplicates'),
  'imports-first': require('./rules/imports-first'),
}

export const rulesConfig = {
  'no-unresolved': 0,
  'named': 0,
  'namespace': 0,
  'default': 0,
  'export': 0,

  'no-named-as-default': 0,

  'no-commonjs': 0,
  'no-amd': 0,
  'no-duplicates': 0,
  'imports-first': 0,
}
