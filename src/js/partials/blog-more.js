$('#show').click(function(e) {
  e.preventDefault();
  $('.blog-archive--hidden').animate({height: '100%'}, 'slow');
});
