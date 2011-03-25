var mongoose = require('mongoose@1.1.11')
  , express = require('express@2.0.0beta3')
  , jade = require('jade@0.9.1')
  , inspect = global.inspect = require('eyes@0.1.6').inspector({styles: {all: 'magenta'}})
  , db = mongoose.connect('mongodb://localhost/cleveland')
  , pub = __dirname + '/public'
  , fs = require('fs')
  , path = require('path')
  , string_ext = require(__dirname + '/lib/string_ext');

// auto-compile sass to css with "compiler"
// and then serve with connect's staticProvider

var app = module.exports = express.createServer(
    express.static(pub)
  , express.logger()
  , express.bodyParser()
  , express.methodOverride()
);

app.configure(function(){
    app.set('views', __dirname + '/app/views')
  , app.set('view engine', 'jade')
  , app.set('reload views', 1000);
});

fs.readdirSync(__dirname + '/app/helpers').map(function(file) {
  var helper = path.basename(file, '.js');
  if (path.extname(file) !== '') {
    require(__dirname + '/app/helpers/' + helper);
  }
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

