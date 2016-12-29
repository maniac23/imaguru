
$('#fix__button').click(function() {
  $('.fix__container').slideDown().addClass('fix__container--is-visible');
  $('#fix__button').text('Скрыть').click(function() {
    $('.fix__container').slideUp(function(){
      $('#fix__button').text('Заказать');
    });
  });
});
