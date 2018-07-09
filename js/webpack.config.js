const webpack = require("webpack");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
let uglifyJs = require('uglify-js');
const path = require("path");
const distPath = path.resolve(__dirname, "dist");

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
        from: __dirname + '/node_modules/ag-grid/dist/ag-grid.min.noStyle.js',
         to: distPath
      },
      { 
        from: __dirname + '/node_modules/ag-grid-enterprise/dist/ag-grid-enterprise.min.noStyle.js',
        to: distPath
      },
      {
        from: __dirname + '/node_modules/Datejs/src/globalization/**',
        to: distPath + '/i18n/Datejs',
        flatten: true,
        transform: function (fileContent, path) {
          return uglifyJs.minify(fileContent.toString()).code.toString();
        }
      },
    ]),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static'
    })
  ],
  watchOptions: {
    ignored: /node_modules/
  }
};

