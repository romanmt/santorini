
var mongoose = require('mongoose')
  , db = mongoose.connect('mongodb://localhost/cleveland')
  , express = require('express')
  , stylus = require('stylus') 
  , pub = __dirname + '/public'
  , fs = require('fs')
  , path = require('path');

// auto-compile sass to css with "compiler"
// and then serve with connect's staticProvider

var app = module.exports = express.createServer(
    express.static(pub)
  , express.logger()
  , express.bodyParser()
);

app.use(stylus.middleware({
    src: __dirname + '/app/views'
  , dest: __dirname + '/public'
}));

app.configure(function(){
    app.set('views', __dirname + '/app/views')
  , app.set('view engine', 'jade')
  , app.set('reload views', 1000);
});

fs.readdirSync(__dirname + '/app/models').map(function(file) {
  var model = path.basename(file, '.js');
  if(path.extname(file) !== '') {
  global[model] = require(
    __dirname + '/app/models/' + model);
  }
});

fs.readdirSync(__dirname + '/app/controllers').map(function(file) {
  var controller = path.basename(file, '.js');
  if (path .extname(file) !== '') {
    require(__dirname + '/app/controllers/' + controller);
  }
});

app.listen(3000);
console.log('Express app started on port 3000');
