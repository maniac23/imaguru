// проходим по каждому элементу blog-archive
$('.blog-archive').each(function() {
  // если в нем больше 3 слайдов - делаем слайдер
  if($(this).find('.blog-archive__slide').length >=4) {
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

    // открываем форму по клику
    $(this).find('.blog-archive__subscribe').on('click', function(e) {
      e.preventDefault();
      $(this).closest('.blog-archive').find('.blog-subscribe').slideToggle();
    });
  }
});

setTimeout(function() {
  // if ($('.blog-archive')) {
    // если больше трех месяцев с архивом, то скрываем все с третьего и показываем кнопку
    if($('.blog-archive').length > 3) {
      $('.blog-archive').slice(3).fadeOut();
      $('.blog-archive__more').css('display', 'block');
      $('.blog-archive__more').on('click', function(e) {
        e.preventDefault();
        var slider = $('.blog-archive:hidden').slice(0, 1);
        if ($('.blog-archive').length - 1 === $('.blog-archive:visible').length) {
          $('.blog-archive__more').fadeOut();
        }
        slider.fadeIn();
        var slide = slider.find('.blog-archive__slider');
        if(slide.length > 3) {
          slide.slick();
        } else {
          return true;
        }
      });
    }
  // }
}, 1200);
