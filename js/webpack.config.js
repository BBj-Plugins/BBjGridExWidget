const webpack = require("webpack");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require("path");

module.exports = {
  target: 'web',
  entry: {
    "bbj-grid-widget.min": [
      "core-js/fn/string/starts-with.js",
      "./src/index.js"
    ],
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
      { from: __dirname + '/node_modules/ag-grid-enterprise/dist/ag-grid-enterprise.min.js', to: __dirname + '/dist/' }
    ]),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static'
    })
  ],
  watchOptions: {
    ignored: /node_modules/
  }
};

