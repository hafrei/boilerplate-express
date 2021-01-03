var express = require('express');
var app = express();

var hw = "Hello World";

console.log(hw);

app.get('/', (req, res) => {
  var indexPg = __dirname + "/views/index.html";
  res.sendFile(indexPg)
});






























 module.exports = app;
