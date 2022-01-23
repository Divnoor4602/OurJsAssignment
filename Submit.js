$(document).ready(function() {
    $('#form').submit(function(event) {
      event.preventDefault();
      var brand = $('#brand').val();
      var model = $('#model').val();
      var os = $('#os').val();
      var screensize = $('#screensize').val();
      var image = $('#inputimageurl').val();
      $.ajax({
        type: 'POST',
        url: 'https://wt.ops.labs.vu.nl/api22/725172c8',
        data: {brand: brand, model: model, os: os, screensize: screensize, image: image},
        success: function() {
          location.reload();
        },
      });
    });
  });
  