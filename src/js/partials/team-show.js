if ($('#team li').length > 3) {
  $('#team-button').show();
  $('#team-button').click(function() {
    $('#team li:hidden').slice(0, 3).fadeIn().css('display', 'flex');
    if ($('#team li').length == $('#team li:visible').length) {
      $('#team-button').text('Скрыть').click(function(){
        $('#team li:nth-child(n+4)').fadeOut();
        $('#team-button').text('Показать еще');
      });
    }
  });
}
