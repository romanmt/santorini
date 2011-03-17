app = module.parent.exports;

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

app.get('/users/new', function(req, res){
  res.partial('users/new', {});
});

app.post('/users/new', function(req, res){
  console.log(req.body.user);
  u = new user(req.body.user);
  u.save(function(err){
    res.redirect('/');
  });
});


