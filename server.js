const express = require("express");
const webpack = require('webpack');
const webpackDevMiddleWare = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);



app.use(webpackDevMiddleWare(compiler,{
    publicPath:config.output.publicPath
}));

app.listen(3000,function(){
   console.log("example app listen on port 3000");
});

