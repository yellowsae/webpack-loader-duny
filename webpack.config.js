const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    overlay: {
      warnings: true,
      errors: true,
    },
    open: true,
  },


  resolveLoader: {
    modules: ['node_modules', './src/myLoader'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // use: './src/myLoader/my-loader.js',
        use: 'my-loader'
      },
    ]
  },
}
