const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'development', 
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'script.js',
  },
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
};
