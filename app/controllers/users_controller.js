app = module.parent.exports;

app.get('/', function(req, res){
    user.find({}, function(err, docs){
    res.render('users/list', { list: docs }); 
  })
});

app.get('/users', function(req, res){
  user.find({}, function(err, docs){
    console.log(docs);
    res.partial('users/list', docs);
  })
});

app.get('/users/list', function(req, res){
  user.find({}, function(err, docs){
    res.render('users/list', { list: docs })
  })  
}); 

app.get('/users/new', function(req, res){
  res.render('users/new', {});
});

app.post('/users/new', function(req, res){
  console.log(req.body.user);
  u = new user(req.body.user);
  u.save(function(err){
    if(err)
      console.log("error:" + err);
    res.redirect('/');
  });
});
 
app.get('/user/edit/:id', function(req, res) {
  user.findById(req.params.id, function(err, u) {
    if(err)
      console.log("error:" + err);
    console.log("rendering users/edit");
    res.render('users/edit', {user : u});
  })
})

app.post('/user/edit/:id', function(req, res){
  user.findById(req.params.id, function(err, u) {
    if(err)
      console.log("error:" + err);
    
    user.update({_id: u.id}, req.body.user, function(err) {
    res.redirect('/');
    }); 
  });
});

app.del('/user/delete/:id', function(req, res) {
  user.findById(req.params.id, function(err, u) {
    u.remove();
    res.redirect('/');
  })
});

app.get('/user/show/:id', function(req, res) {
  user.findById(req.params.id, function(err, u) {
    if(err)
      u.events.push({title: "ugh", start: new Date()})
      u.save(function(err){});
      console.log("error:" + err);
    res.render('users/show', {user : u});
  }); 
});

app.get('/user/events.json', function(req, res) {
  user.find({email: 'melissa@gmail.com'}, function(err, u) {
	if(err)
	  throw err;
	console.log(inspect(JSON.stringify(u)));
	res.send(JSON.stringify(u.events));
  });
});
