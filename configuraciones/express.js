var express=require('express');
//var rutas=require('../aplicasion/rutas/')
var rutas='../aplicasion/rutas/';
var app=express();
//var http=require('http');
//var servidor=http.createServer(app);

//app.use('/',rutas)(app);
app.set('views', './aplicasion/vistas');
app.set('view engine', 'ejs');

require(rutas+'inicio.js')(app);
module.exports=function(){
  return app;
}

//module.exports=app;
