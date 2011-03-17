var jade = require('jade');
app      = module.parent.exports;


app.helpers( {
  
  text_tag_for: function(obj, prop) {
    
    html = "label(for=obj + '[' + prop + ']') #{prop.decamelize()}:\n" + 
            "input(type: 'text', name: obj +'[' + prop + ']').inputbox";
  
    return jade.render(html, {locals: {obj: obj, prop: prop} });
  },
  
  integer_tag_for: function(obj, prop) {
    
    html = "label(for=obj + '[' + prop + ']') #{prop.decamelize()}:\n" + 
            "input(type: 'integer', name: obj +'[' + prop + ']').inputbox.smaller";
  
    return jade.render(html, {locals: {obj: obj, prop: prop} });
  }
});
