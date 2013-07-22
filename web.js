var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  //response.send('Hello World2!');
  var buf =  fs.readFileSync('index.html');
  var data = buf.toString('utf-8');
  response.send(data);
});

app.get('/handball_border.png', function(request, response) {
  var buf =  fs.readFileSync('handball_border.png');
  //var data = buf.toString('utf-8');
  response.writeHead(299, {'Content-Type': 'image/png'});
  response.end(buf, 'binary');
  //response.send(data);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
