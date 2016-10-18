$('#comments__btn').click(function(e) {
  e.preventDefault();
  $('.comments__form').slideToggle();
});

// открывать форму коммента в случае написания ответа на коммент
var header = document.querySelector('.comment-reply-title');
if (header) {
  if (header.offsetHeight > 0) {
    document.querySelector('.comments__form').style.display = 'block';
  }
}
