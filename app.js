
var mongoose = require('mongoose')
  , db = mongoose.connect('mongodb://localhost/cleveland')
  , express = require('express')
  , pub = __dirname + '/public'
  , models = require(__dirname+'/lib/models')
  , user = mongoose.model('User');

// auto-compile sass to css with "compiler"
// and then serve with connect's staticProvider

var app = express.createServer(
	express.compiler({ src: pub, enable: ['sass'] })
  , express.static(pub)
);

// setup jade as default template engine
app.set('view engine', 'jade');

app.get('/', function(req, res){
    user.find({}, function(err, docs){
		res.render('users', { users: docs });	
	})
});

app.get('/users', function(req, res){
	user.find({}, function(err, docs){
		console.log(docs);
		res.partial('users/user', docs);
	})
});

app.get('/users/list', function(req, res){
	user.find({}, function(err, docs){
		res.partial('users/list', { list: docs })
	})	
});	

app.get('/user/:id', function(req, res){
	user.findById(req.params.id, function(err, user){
		console.log(user);
    	res.partial('users/user', [user]);	
	})
});

app.listen(3000);
console.log('Express app started on port 3000');