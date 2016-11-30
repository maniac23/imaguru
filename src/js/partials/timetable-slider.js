$('#events-timetable').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  vertical: true,
  dots: false,
  arrows: true,
  draggable: true,
  infinite: false,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});
