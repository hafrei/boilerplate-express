var express = require('express');
var app = express();

var hw = "Hello World";

console.log(hw);

app.get('/', (req, res) => {
  res.send('Hello Express')
});






























 module.exports = app;
