$('.booking-btn').click(function(e){
  e.preventDefault();
  var elementClick = $(this).attr('href');
  var destination = $(elementClick).offset().top;
  $('body, html').animate({scrollTop: destination }, 1000);
})
