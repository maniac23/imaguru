$('#events-timetable').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  vertical: true,
  dots: false,
  arrows: true,
  draggable: true,
  infinite: false,
  responsive: [
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
