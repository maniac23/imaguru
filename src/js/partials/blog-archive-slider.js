// проходим по каждому элементу blog-archive
$('.blog-archive').each(function() {
  // если в нем больше 3 слайдов - делаем слайдер
  if($(this).find('.blog-archive__slide').length >= 3) {
    $(this).find('.blog-archive__slider').slick({
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      autoplay: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  } else { // если меньше 3 слайдов
    // вставляем заглушку
    $(this).find('.blog-archive__slider').append('<div class=\'blog-archive__slide blog-archive__slide--flex\'><img src=\'img/blog_slider3.jpg\' height=\'420\'><div class=\'blog-archive__overlay blog-archive__overlay--subscribe\'><h3 class=\'blog-archive__title blog-archive__title--subscribe\'>Прямо сейчас мы пишем для ваc новый пост</h3><a href=\'#\' class=\'blog-archive__subscribe\'>Подписаться на обновления</a></div></div>');
    // вставляем скрытую форму подписки
    // $(this).append('<div class=\'blog-subscribe\'><h2 class=\'blog-subscribe__title\'>Новостная рассылка</h2><form class=\'blog-subscribe__form\'><input type=\'email\' placeholder=\'Введите ваш Email\'><button type=\'submit\' name=\'button\' class=\'btn btn--orange\'>Подписаться</button></form></div>');
    // открываем форму по клику
    $(this).find('.blog-archive__subscribe').on('click', function(e) {
      e.preventDefault();
      $(this).closest('.blog-archive').find('.blog-subscribe').slideToggle();
    });
  }
});

setTimeout(function() {
  if ($('.blog-archive')) {
    // если больше трех месяцев с архивом, то скрываем все с третьего и показываем кнопку
    if($('.blog-archive').length > 3) {
      $('.blog-archive').slice(3).fadeOut();
      $('.blog-archive__more').css('display', 'block');
      $('.blog-archive__more').on('click', function(e) {
        e.preventDefault();
        $('.blog-archive:hidden').slice(0, 1).fadeIn();
        if ($('.blog-archive').length === $('.blog-archive:visible').length) {
          $('.blog-archive__more').fadeOut();
        }
      });
    }
  }
}, 500);
