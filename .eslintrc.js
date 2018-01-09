module.exports = {
  root: true,
  plugins: [
    'ember'
  ],
  parserOptions: {
    ecmaVersion: 2017
  },
  extends: [
    'airbnb-base',
    'plugin:ember/recommended'
  ],
  rules: {
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
  }
}
