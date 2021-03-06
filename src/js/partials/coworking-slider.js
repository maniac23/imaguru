var slides = $('#eventsTimetable li').length;

if(slides < 5) {
  $('#eventsTimetable').slick({
    slidesToShow: slides,
    slidesToScroll: 1,
    vertical: true,
    dots: false,
    arrows: true,
    draggable: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: slides / 2
        }
      }
    ]
  });
} else {
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
}


$('#events-slider ul').slick({
  slidesToShow: 7,
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
