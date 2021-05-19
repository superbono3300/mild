const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname + "/build")
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      }
      ,
      {
        test: /\.(js|jsx)$/,
        exclude: "/node_modules",
        use: ['babel-loader'],
      },

      { test: /\.css$/, 
        use: [ 
            MiniCssExtractPlugin.loader, 'css-loader'
        ],
      
     },
     {
      test: /\.(png|jpg|jpeg|gif|svg)$/i,
      use: [
        {
          loader: 'file-loader',
          /*options: {
            limit: 10000,
            name: 'images/[folder]/[name].[ext]',
            esModule: true
          }*/
        },
      ]
    },
    {
      test: /\.txt$/,
      use: 'raw-loader'
    },
   ]
  },

  devServer: {
    port: 9900
  },

  plugins: [
    new HtmlWebpackPlugin({
      // index.html 템플릿을 기반으로 빌드 결과물을 추가해줌
      template: './src/index.html',
      filename: 'index.html' // output으로 출력할 파일은 index.html 이다.
      /*filename : test.html로 할 경우 => http://localhost:9000/test.html*/
    }),

    new MiniCssExtractPlugin({
        filename: 'common.css'
      })
  ]

};
