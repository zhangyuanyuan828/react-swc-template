/**
 * @type {import('prettier').Config}
 */
module.exports = {
  bracketSameLine: true,
  printWidth: 160,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  endOfLine: 'lf',
  trailingComma: 'none',
  plugins: ['prettier-plugin-organize-imports', 'prettier-plugin-tailwindcss']
}
