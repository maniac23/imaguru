$('.course-tab__links').click(function() {
  var tab_id = $(this).attr('data-tab');

  $('.course-tab__links').removeClass('course-tab__links--active');
  $('.course').removeClass('course--is-active');

  $(this).addClass('course-tab__links--active');
  $('#' + tab_id).addClass('course--is-active');
});
