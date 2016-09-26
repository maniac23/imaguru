
  $('#team-button').click(function() {
    $('#team li:hidden').slice(0, 3).fadeIn();
    if ($('#team li').length == $('#team li:visible').length) {
      $('#team-button').fadeOut();
    }
  });
