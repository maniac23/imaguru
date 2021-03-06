// показываем скрытых партнеров, команду и вакансии
function showItems(item) {
  var itemLi = item + ' li';
  var button = item + '-button';
  var child = itemLi + ':nth-child(n+4)';
  var textOpened = $(button).attr('data-textopened');
  var textHidden = $(button).attr('data-texthidden');
  var buttonParent = $(button).parent();
  if ($(itemLi).length > 3) {
    $(button).show();
    $(button).click(function() {
      $(button).toggleClass('team__button--is-active');
      $(child).fadeToggle(400, function() {
        if ($(itemLi).length === $(itemLi + ':visible').length) {
          $(button).text(textOpened);
        } else {
          $(button).text(textHidden);
        }
      }).css('display', 'flex');
      if(!($(button).hasClass('team__button--is-active'))) {
        scrollTo(buttonParent, 400);
        return;
      }
    });
  }
};

showItems('#team');
showItems('#jobs');
showItems('#partners');

// скрытие/открытие форм на плашках
$('#fix__button').on('click', function() {
  $('.fix__container').slideToggle(400, function() {
    if($('.fix__container').is(':visible')) {
      scrollTo($('.fix__container'), 400);
      $('#fix__button').text($('#fix__button').attr('data-textopened'));
    } else {
      $('#fix__button').text($('#fix__button').attr('data-texthidden'));
    }
  });
});

// скрытие/открытие форм на хакатонах
$('.section .btn').on('click', function() {
  var dataId = $(this).attr('data-id');
  var container = $('.section-container[data-id="'+dataId+'"]');
  var title = container.find('.contact-form__title');
  var containers = $('.section-container').not(container);
  var button = $('.section .btn[data-id="'+dataId+'"]');
  containers.hide();
  container.slideToggle(400, function() {
    if(container.is(':visible')) {
      scrollTo(button, 400);
    }
  })
})
