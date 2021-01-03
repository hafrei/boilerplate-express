var express = require('express');
var app = express();
var hw = "Hello World";

app.use(express.static( __dirname + "/public"));
console.log(hw);

app.get('/', (req, res) => {
  var indexPg = __dirname + "/views/index.html";
  res.sendFile(indexPg)
});






























 module.exports = app;
