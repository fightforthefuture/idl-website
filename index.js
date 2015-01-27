var express      = require('express');
var app          = express();
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var request      = require('request');

var config = {
  port: process.env.PORT || 3019,
}

app.use(express.static(__dirname + '/public'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended : true
}));



app.listen(config.port);
console.log('Listening on port ' + (config.port + ''));
