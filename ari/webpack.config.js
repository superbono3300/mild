const path = require('path');
const RefreshWebpack = require('@pmmmwh/react-refresh-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  name:'webpack-login',
  mode:'development',
  devtool:'eval',
  resolve:{
    extensions:['.js','.jsx']
  },
  entry:{
    app:'./client.jsx'
  },
  module:{
    rules:[
      {
        test:/\.jsx?$/,
        loader:'babel-loader',
        options:{
          presets:['@babel/preset-env','@babel/preset-react'],
          plugins:['react-refresh/babel','@babel/plugin-syntax-class-properties','@babel/plugin-proposal-class-properties']
        }
      },
      {
        test:/\.css$/,
        use:['style-loader', 'css-loader']
      }
    ]
  },
  plugins:[
    new RefreshWebpack(),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ],
  output:{
    filename:'bundle.js',
    path:path.resolve(__dirname+'/build'),
    publicPath:'/build/'
  },
  devServer:{
    port:9000,
    hot:true
  }
}