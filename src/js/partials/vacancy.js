$('.company button').on('click', function() {
  var parent = $(this).parent();
  var vacancy = parent.siblings('.vacancy');
  vacancy.slideToggle(400, function() {
    if(vacancy.is(':visible')) {
      scrollTo(vacancy);
    }
  }).css('display', 'flex');
});


var fileInput = $('.vacancy__form input[type="file"]');

fileInput.each(function() {
  // console.log(index, value, this);
  $(this).on('change', function() {
    var id = $(this).attr('id');
    var label = $(this).parent().siblings('label[for="' + id + '"]');
    if(this.files.length > 0) {
      label.addClass('uploaded').text(this.files[0].name);
    } else {
      label.removeClass('uploaded').text('Загрузить файл');
    }
  });
});


var form = $('.vacancy__form form');
form.each(function(){
  var submitButton = $(this).find('input[type="submit"]');
  submitButton.attr('disabled','disabled');
  $(this).on('change', function() {
    var file = $(this).find('input[type="file"]');
    var url = $(this).find('input[type="url"]');
    if(url.val() === '' && file.val() === '') {
      submitButton.attr('disabled','disabled');
    } else {
      submitButton.removeAttr('disabled');
    }
  })
});
