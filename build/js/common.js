$(document).ready(function() {
  // open menu
  $('.menu-icon').click(function() {
    $('.menu').slideToggle();
  });

// slider
  $('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    dots: true,
    verticalSwiping: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          vertical: false,
          verticalSwiping: false
        }
      }
    ]
  });

  $('.main-text--slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay: true
  });

  $('.events-slider .posts').slick({
    infinite: true,
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

//maginific popup
  $('.event-gallery__item').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    },
    removalDelay: 300,
    mainClass: 'mfp-fade'
  });

  $('#comments__btn').click(function() {
    $('.comments__form').slideToggle();
  });

});
