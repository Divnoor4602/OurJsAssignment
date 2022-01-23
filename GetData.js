$(document).ready(function() {
    $.ajax({
      type: 'GET',
      url: 'https://wt.ops.labs.vu.nl/api22/725172c8',
      dataType: "json",
    });
  
    // Reference: https://youtu.be/kJTAXn_xmjo
      $.getJSON("https://wt.ops.labs.vu.nl/api22/725172c8", function(data) {
        var phone = '';
      $.each(data, function(key, value) {
        phone += '<tr class="item">';
        phone += '<td>' + value.brand + '</td>';
        phone += '<td>' + value.model + '</td>';
        phone += '<td>' + value.os + '</td>';
        phone += '<td>' + value.screensize + '</td>';
        phone += '<td>' + '<figure>' + '<img class="phoneimg" src = ' + value.image + '>' +
        '<figcaption class="figcaption">' + value.brand + ' ' + value.model + '<figcaption>' + '</figure>' + '</td>';
        phone += '</tr>';
      });
      $('#Products').append(phone);
    });
  });
  
  