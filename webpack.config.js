const path = require("path");
const HtmlWebpackPugPlugin = require("html-webpack-pug-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const dirNode = "node_modules";
const dirApp = path.join(__dirname, "src");

module.exports = {
  mode: "development",
  entry: {
    main: path.join(dirApp, "index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  devtool: "eval",
  devServer: {
    host: "0.0.0.0",
    port: 9000,
    writeToDisk: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.pug",
      minify: false,
      inject: false,
    }),
  ],
  module: {
    rules: [
      // PUG
      {
        test: /\.pug$/,
        use: ["html-loader", "pug-html-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
};
