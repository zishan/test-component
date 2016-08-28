const webpack = require('webpack');
const path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, '.');

module.exports = {
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],
  entry: {
    app: APP_DIR + '/src/test-component.js',
  },
  output: {
    path: BUILD_DIR,
    filename: 'test-component.lib.js',
    library: 'TestComponent',
    libraryTarget: 'var',
  },
  externals: {
    'react': 'react',
    'react-dom' : 'react-dom',
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: [
            'react',
            'es2015',
          ],
        },
      },
    ],
  },
}
