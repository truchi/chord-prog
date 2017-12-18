const path = require('path')

module.exports = {
  entry: './src/main.js',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    host: '0.0.0.0',
    port: 9000,
    compress: true,
    clientLogLevel: 'none',
    overlay: true,
    useLocalIp: true
  },
  output: {
    filename     : 'chord-prog.js',
    path         : path.resolve(__dirname, 'dist'),
    library      : 'ChordProg',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test   : /\.js$/,
        exclude: /node_modules/,
        use    : 'babel-loader'
      }
    ]
  }
}
