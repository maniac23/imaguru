function smoothScroll(button) {
  $(button).click(function(e){
    e.preventDefault();
    var elementClick = $(this).attr('href');
    var destination = $(elementClick).offset().top;
    $('body, html').animate({scrollTop: destination }, 700);
  });
}

smoothScroll('.booking-btn');
smoothScroll('a[href="#event-register"]');
