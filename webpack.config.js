const path= require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
  entry: {
    index: "./src/index.js",
    page: "./src/start-page2.js",
    page3: "./src/start-page3.js",
    page4: "./src/start-page4.js",
    page5: "./src/start-page5.js",
    page6: "./src/start-page6.js",
    },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].js",
  },
 plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/pages/pagina2.html",
      filename: "page.html",
      chunks: ["page"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/index/index.html",
      filename: "index.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/pagina3.html",
      filename: "page3.html",
      chunks: ["page3"],
    }),
     new HtmlWebpackPlugin({
      template: "./src/pages/pagina4.html",
      filename: "page4.html",
      chunks: ["page4"],
    }),
     new HtmlWebpackPlugin({
      template: "./src/pages/pagina5.html",
      filename: "page5.html",
      chunks: ["page5"],
    }),
     new HtmlWebpackPlugin({
      template: "./src/pages/pagina6.html",
      filename: "page6.html",
      chunks: ["page6"],
    }),
  ],
  
  module: {
    rules:[
      {test:/\.css$/i, use:["style-loader","css-loader"]}, 
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
          		name: "[path][name].[ext]",
        	},
          },
        ],
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /(node_modules)/,
      },
    ],
 },
 
};




