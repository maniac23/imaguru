$('#eventsTimetable').slick({
  slidesToShow: 5,
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

$('.events-timetable__list .events-timetable__item').equalHeights();

$('#events-slider ul').slick({
  slidesToShow: 5,
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
