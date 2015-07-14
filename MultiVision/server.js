var express = require('express'),
  stylus = require('stylus'),
  bodyParser = require('body-parser'),
  morgan = require('morgan');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var app = express();

function compile(str, path) {
  return stylus(str).set('filename', path);
}

app.set('view engine', 'jade');
app.set('views', __dirname + '/server/views');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(stylus.middleware(
    {
    src: __dirname + '/public',
    compile: compile
    }
    ));
app.use(express.static(__dirname + '/public'));

app.get('/partials/:partialPath', function(req, res) {
  res.render('partials/' + req.params.partialPath);
});

app.get('*', function(req, res) {
  res.render('index');
});

var port = 3030;
app.listen(port);
console.log('Listening port:', port);
