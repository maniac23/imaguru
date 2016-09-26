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

//children
$('#children .course-tab__links').click(function() {
  var tab_id = $(this).attr('data-tab');

  $('#children .course-tab__links').removeClass('course-tab__links--active');
  $('.course--children').removeClass('course--is-active');

  $(this).addClass('course-tab__links--active');
  $('#' + tab_id).addClass('course--is-active');
});


$('.fix__tab').click(function() {
  var tab_id = $(this).attr('data-tab');

  $('.fix__tab').removeClass('fix__tab--active');
  $('.fix__tab-content').removeClass('fix__tab-content--is-active');
  $(this).addClass('fix__tab--active');
  $('#' + tab_id).addClass('fix__tab-content--is-active');
});
