$('.coworkers__list').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 2,
  // autoplay: true,
  vertical: false,
  adaptiveHeight: true,
  dots: false,
  arrows: true,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});
