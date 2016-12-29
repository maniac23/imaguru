
// $('.fix__tab').click(function() {
//   var tab_id = $(this).attr('data-tab');
//
//   $('.fix__tab').removeClass('fix__tab--active');
//   $('.fix__tab-content').removeClass('fix__tab-content--is-active');
//   $(this).addClass('fix__tab--active');
//   $('#' + tab_id).addClass('fix__tab-content--is-active');
// });

$('.tabs__item').click(function() {
  var tab_id = $(this).attr('data-id');

  $('.tabs__item').removeClass('tabs__item--active');
  $('.fullwidth-form').removeClass('fullwidth-form--active');
  $(this).addClass('tabs__item--active');
  $('#'+ tab_id).addClass('fullwidth-form--active');

});
