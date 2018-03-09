const webpack = require("webpack");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require("path");

module.exports = {
  entry: {
    // "bbj-grid-widget": "./src/index.js",
    "bbj-grid-widget.min": "./src/index.js",
  },
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    libraryTarget: 'window',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ['@babel/preset-env'],
          plugins: [
            ["@babel/plugin-proposal-object-rest-spread"]
          ]

        }
      },
      {
        test: /\.css/,
        exclude: [/node_modules/],
        loaders: ['style-loader', 'css-loader'],
        include: __dirname + '/src'
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin({
      include: /\.min\.js$/
    }),
    new CopyWebpackPlugin([
      { from: __dirname + '/node_modules/ag-grid/dist/ag-grid.min.js', to: __dirname + '/dist/' },
      { from: __dirname + '/node_modules/ag-grid-enterprise/dist/ag-grid-enterprise.min.js', to: __dirname + '/dist/' },
      { from: __dirname + '/node_modules/ag-grid-components/dist/agc-basic-bundle.min.js', to: __dirname + '/dist/' },
    ])
  ],
  watchOptions: {
    ignored: /node_modules/
  }
};

