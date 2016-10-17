$('#comments__btn').click(function(e) {
  e.preventDefault();
  $('.comments__form').slideToggle();
});

var header = document.querySelector('.comment-reply-title');
if (header.offsetHeight > 0) {
  document.querySelector('.comments__form').style.display = 'block';
}
