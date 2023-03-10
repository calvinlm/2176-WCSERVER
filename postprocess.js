var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var urlencodededParser = bodyParser.urlencoded({extended: false})

app.use(express.static('public'));
app.get('/register_post.html', (req, res) => {
    res.sendFile(__dirname + "/" + "register_post.html");
})

app.post('/postprocess.js', urlencodededParser, (req, res) => {
  response = {
    first_name:req.body.first_name,
    last_name:req.body.last_name
  };
  console.log(response);
  res.end(JSON.stringify(response));
}) 

var server = app.listen(5000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://&s:&s', host, port);
});
