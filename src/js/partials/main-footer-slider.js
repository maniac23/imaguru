$('.main-footer__projects').slick({
  infinite: true,
  slidesToShow: 8,
  slidesToScroll: 1,
  adaptiveHeight: true,
  dots: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 985,
      settings: {
        slidesToShow: 4,
        arrows: true,
      }
    },
    {
      breakpoint: 648,
      settings: {
        slidesToShow: 2,
        arrows: true
      }
    },
  ]
});
