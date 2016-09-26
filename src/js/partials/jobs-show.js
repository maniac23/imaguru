  $('#jobs-button').click(function() {
    $('#jobs li:hidden').slice(0, 3).fadeIn();
    if ($('#jobs li').length == $('#jobs li:visible').length) {
      $('#jobs-button').fadeOut();
    }
  });
