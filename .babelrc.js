const env = process.env.NODE_ENV
const isProduction = env === 'production'

const presets = ["next/babel"];
const plugins = [
  ["module-resolver", {
    "root": ["./src"],
    "alias": {
      "@": "./src"
    }
  }],
  ["babel-plugin-styled-components", {
    "ssr": true, 
    "displayName": !isProduction, 
    "preprocess": isProduction 
  }]
];

module.exports = { presets, plugins };
