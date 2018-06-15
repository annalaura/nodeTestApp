var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World! And Michael');
});
app.listen(8081, function () {
  console.log('Example app listening on port 8081!');
});

console.log('Hi Anna! -- SCRUM Master');
