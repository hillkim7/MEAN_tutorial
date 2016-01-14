process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('./config/mongoose'),
  express = require('./config/express'),
  passport = require('./config/passport');

var db = mongoose();
var app = express();
var passport = passport();

var host = '0.0.0.0';
app.listen(3000, host);
module.exports = app;
console.log('Server running at http://' + host + ':3000/');
