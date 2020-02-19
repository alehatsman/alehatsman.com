const babelOptions = {
  presets: ['babel-preset-gatsby', '@babel/preset-typescript'],
  plugins: ['babel-plugin-emotion']
}
module.exports = require('babel-jest').createTransformer(babelOptions)
