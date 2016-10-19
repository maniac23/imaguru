$('.blog-archive__slider').slick({
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

setTimeout(function() {
  if ($('.blog-archive')) {
    // если больше трех месяцев с архивом, то скрываем все с третьего и показываем кнопку
    if($('.blog-archive').length > 2) {
      $('.blog-archive').slice(2).hide();
      $('.blog-archive__more').css('display', 'block');
      $('.blog-archive__more').on('click', function() {
        $('.blog-archive:hidden').slice(0, 1).fadeIn();
        if ($('.blog-archive').length == $('.blog-archive:visible').length) {
          $('.blog-archive__more').fadeOut();
        }
      });
      // показать кнопку
      // повесить на нее обработчик
    }
  }
}, 500);
