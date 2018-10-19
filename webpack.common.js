const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
   entry:{
   	 app:path.join(__dirname, 'src/index.js')
   },
   plugins:[
     new CleanWebpackPlugin(['dist']),
     new HtmlWebpackPlugin({"title":"production"})
   ],
   output:{
   	 path:path.resolve(__dirname,'dist'),
   	 filename: '[name].bundle.js'
   },
   module: {
        rules: [{
          test:/\.css$/,
          use:['style-loader','css-loader']
        },{
          test:/\.(png|jpeg|jpg|gif)$/,
          use:['file-loader']
        },{
          test:/\.(xml)$/,
          use:['xml-loader','csv-loader']
        }]
    }
};

module.exports = config;