// Side Navigation Menu Slide

$(document).ready(function() {
  $("#nav > li > a.collapsed + ul").slideToggle("medium");
  $("#nav > li > a").click(function() {
    $(this).toggleClass("expanded").toggleClass("collapsed").find("+ ul").slideToggle("medium");
  });
});


// Toolbox Pulldown

$(document).ready(function() {
    $(".toolboxdrop").click( function() {
        if ($("#openCloseIdentifier").is(":hidden")) {
            $("#slider").animate({
                marginTop: "-150px"
                }, 500 );
            $("#topMenuImage").html;
            $("#openCloseIdentifier").show();
        } else {
            $("#slider").animate({
                marginTop: "0px"
                }, 500 );
            $("#topMenuImage").html;
            $("#openCloseIdentifier").hide();
        }
    }); 
});

// Select all checkboxes

  $(document).ready(function(){
      $("#checkboxall").click(function()
      {
      var checked_status = this.checked;
      $("input[name=checkall]").each(function() {
      this.checked = checked_status;
      });
      });
      });
  
// Fancybox (Lightbox Gallery Effect)

    $(document).ready(function() {
      $("a.galleryimg").fancybox();
      });
    
// Graph Script

$(document).ready(function(){
  $('table.pie').visualize({type: 'pie'});
  $('table.bar').visualize({type: 'bar'});
  $('table.area').visualize({type: 'area'});
  $('table.line').visualize({type: 'line'});
});

// Tab Switching

  $(document).ready(function(){
    $("#graphs, #tabs").tabs();
  });

// Calendar

$(document).ready(function() {
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
    
    var calendar = $('#calendar');
    calendar.fullCalendar({
      header: {
        left: 'title',
        right: 'prev,next today, month,agendaWeek,agendaDay'
      },
      weekends: false,
      selectable: true,
      selectHelper: true,
      events: function(start, end, callback) {
        $.get('/user/events.json', function(data) {
          callback(data);
        })
      },
      select: function(start, end, allDay) {
        var title = prompt('Event Title:');
        console.log(title);
        if (title) {
          var evnt = {
              title: title,
              start: start,
             end: end,
              allDay: allDay
            };
          $.post('/event/new', evnt, function(data) {
            calendar.fullCalendar('renderEvent', evnt, true);
            console.log(data);
          });
        }
        //calendar.fullCalendar('unselect');
      },
      editable: true
    });
    
  });
// Rich text editor/WYSIWYG

  $(document).ready(function() {
      $('#wysiwyg').wysiwyg();
    });
