if ($('#team li').length > 3) {
  $('#team-button').show();
  $('#team-button').click(function() {
    $('#team li:hidden').slice(0, 3).fadeIn().css('display', 'flex');
    if ($('#team li').length == $('#team li:visible').length) {
      $('#team-button').fadeOut();
    }
  });
}
