var path = require("path")

module.exports = {
  entry: "./src/index.js",
  output: {
      path: path.join(__dirname, 'build'),
      filename: "bundle.js",
      sourceMapFilename: 'bundle.map'
  },
  devtool: '#source-map',
  module: {
      rules: [
          {
              test: /\.js$/,
              exclude: /(node_modules)/,
              loader: require.resolve('babel-loader'),
              options: {
                cacheDirectory: true,
                plugins: ['react-hot-loader/babel'],
              }
          },
          {
              test: /\.sass$/,
              use: ['style-loader','css-loader', {
                  loader: 'sass-loader',
                  options: {
                    sourceMap: true,
                    plugins: () => [require('autoprefixer')]
                  }
                }
              ]
          }
      ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true
  }
}