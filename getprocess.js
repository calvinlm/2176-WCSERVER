var express = require('express');
var app = express();

app.use(express.static('public'));
app.get('/register_get.html', (req, res) => {
    res.sendFile(__dirname + "/" + "register_get.html");
})

app.get('/getprocess.js', (req, res) => {
  response = {
    first_name:req.query.first_name,
    last_name:req.query.last_name
  };
  console.log(response);
  res.end(JSON.stringify(response));
})

var server = app.listen(2001, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://&s:&s', host, port);
});
