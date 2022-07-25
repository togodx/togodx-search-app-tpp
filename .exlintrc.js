module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ['next', 'next/core-web-vitals', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'react/no-unescaped-entities': 'off',
  },
}
