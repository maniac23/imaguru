// open menu
$('.menu-icon').click(function() {
  $('.sandwich').toggleClass('active');
  $('.menu').slideToggle(500);
});
// open search
$('.search-icon').click(function() {
  $('.menu__search').slideToggle(500);
});
