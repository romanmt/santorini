var jade = require('jade');
app      = module.parent.exports;


app.helpers( {
  
  text_tag_for: function(obj, prop) {
    
    html = "label(for=obj + '[' + prop + ']') #{prop.decamelize()}:\n" + 
            "input(type: 'text', name: obj +'[' + prop + ']').inputbox";
  
    return jade.render(html, {locals: {obj: obj, prop: prop} });
  }
, integer_tag_for: function(obj, prop) {
    
    html = "label(for=obj + '[' + prop + ']') #{prop.decamelize()}:\n" + 
            "input(type: 'integer', name: obj +'[' + prop + ']').inputbox.smaller";
  
    return jade.render(html, {locals: {obj: obj, prop: prop} });
  }
, delete_tag_for: function(obj, id) {
    url = "/" + obj + "/delete/" + id; 
    html = "<a onclick=\"if (confirm('Are you sure?')) { " +
           "  var f = document.createElement('form'); " +
           "  f.style.display = 'none'; " +
           "  this.parentNode.appendChild(f); " +
           "  f.method = 'POST'; " + 
           "  f.action = this.href;" +
           "  var m = document.createElement('input'); " + 
           "  m.setAttribute('type', 'hidden'); " +
           "  m.setAttribute('name', '_method'); " + 
           "  m.setAttribute('value', 'delete'); " +
           "  f.appendChild(m);" + 
           "  f.submit(); " +
           "};" +
           "return false;\" href=#{url}>delete</a>";

    return jade.render(html, {locals: {url: url}});
  }
});
