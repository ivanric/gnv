var express=require('express');
var path = require('path');
//var rutas=require('../aplicasion/rutas/')
var rutas='../aplicasion/rutas/';
var app=express();
                                                                                                                                                                                                                                                                                //var http=require('http');
//var servidor=http.createServer(app);

//app.use('/',rutas)(app);
app.set('views', './aplicasion/vistas');
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '../node_modules')));
app.use(express.static(path.join(__dirname, '../aplicasion/publico')));

require(rutas+'inicio.js')(app);
module.exports=function(){
  return app;
}

//module.exports=app;
