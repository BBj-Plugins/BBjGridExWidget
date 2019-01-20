const webpack = require("webpack");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
let uglifyJs = require('uglify-js');
const path = require("path");
const distPath = path.resolve(__dirname, "dist");

module.exports = {
  target: 'web',
  mode: 'development',
  entry: {
    "bbj-grid-widget.min": [
      "core-js/fn/string/starts-with.js",
      "./src/index.js"
    ],
    "bbj-grid-widget": [
      "core-js/fn/string/starts-with.js",
      "./src/index.js"
    ],
  },
  devtool: "inline-source-map",
  output: {
    path: distPath,
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
        test: /\.css$/,
        use: [
          {
            loader: "style-loader", options: {
              insertInto: function () { return window.top.document.head }
            }
          },
          { loader: "css-loader", options: { minimize: true } }
        ]
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin({
      include: /\.min\.js$/
    }),
    new CopyWebpackPlugin([
      { 
        from: __dirname + '/node_modules/ag-grid-community/dist/ag-grid-community.noStyle.js',
         to: distPath
      },
      { 
        from: __dirname + '/node_modules/ag-grid-community/dist/ag-grid-community.min.noStyle.js',
         to: distPath
      },
      { 
        from: __dirname + '/node_modules/ag-grid-enterprise/dist/ag-grid-enterprise.noStyle.js',
        to: distPath
      },
      { 
        from: __dirname + '/node_modules/ag-grid-enterprise/dist/ag-grid-enterprise.min.noStyle.js',
        to: distPath
      }
    ]),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false
    })
  ],
  watchOptions: {
    ignored: /node_modules/
  }
};

