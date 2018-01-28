const path = require("path");
const SRC = path.join(__dirname, '/client');
const DIST = path.join(__dirname, '/client/public');

module.exports = {
  entry: [`${SRC}/app.js`],
  output: {
    path: DIST,
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};