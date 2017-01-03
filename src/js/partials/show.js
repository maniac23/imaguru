
$('#fix__button').click(function() {
  $('.fix__container').slideToggle().toggleClass('fix__container--is-visible');

  if ($('.fix__container').hasClass('fix__container--is-visible')) {
    $('#fix__button').text('Скрыть');
  } else {
    $('#fix__button').text('Заказать');
  }
});
