var express = require('./configuraciones/express');
var app = express();
var http=require('http');
var servidor=http.createServer(app);

app.listen(3000, function () {
  console.log('inciando puerto 3000');
});
