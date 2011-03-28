$(document).ready(function() {
  var date = new Date();
  var d = date.getDate();
  var m = date.getMonth();
  var y = date.getFullYear();
  var calendar = $('#calendar').fullCalendar({
    events: function(start, end, callback) {
      callback({
	    [
	      {
            title: 'My Event 1',
			start: new Date(y, m, 8)
		   },
		   {
			 title: 'Long Event number 1',
			 start: new Date(y, m, d-5),
			 end: new Date(y, m, d-2)
		   }
		]
      });
    }
  });
});
