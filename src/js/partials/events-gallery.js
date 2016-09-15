$('.events-gallery__list--slider').slick({
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
