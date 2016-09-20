// junior
$('#junior .course-tab__links').click(function() {
  var tab_id = $(this).attr('data-tab');

  $('#junior .course-tab__links').removeClass('course-tab__links--active');
  $('.course--junior').removeClass('course--is-active');

  $(this).addClass('course-tab__links--active');
  $('#' + tab_id).addClass('course--is-active');
});

// senior
$('#senior .course-tab__links').click(function() {
  var tab_id = $(this).attr('data-tab');

  $('#senior .course-tab__links').removeClass('course-tab__links--active');
  $('.course--senior').removeClass('course--is-active');

  $(this).addClass('course-tab__links--active');
  $('#' + tab_id).addClass('course--is-active');
});
