  $('#partners-button').click(function() {
    $('#partners li:hidden').slice(0, 4).fadeIn();
    if ($('#partners li').length == $('#partners li:visible').length) {
      $('#partners-button').fadeOut();
    }
  });
