$('.events-timetable__list').slick({
  slidesToShow: 7,
  slidesToScroll: 1,
  vertical: true,
  dots: false,
  arrows: true,
  draggable: true,
  infinite: false,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2
      }
    }
  ]
});
