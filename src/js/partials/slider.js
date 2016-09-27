$('.slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  vertical: true,
  adaptiveHeight: true,
  dots: true,
  verticalSwiping: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        vertical: false,
        verticalSwiping: false
      }
    }
  ]
});
