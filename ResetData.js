$(document).ready(function() {
    $('#resetdata').click(function(event) {
      event.preventDefault();
  
      $.ajax({
        type: 'GET',
        url: 'https://wt.ops.labs.vu.nl/api22/725172c8/reset',
        success: function() {
          location.reload();
        },
      });
    });
  });
  