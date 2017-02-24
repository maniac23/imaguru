$('.company button').on('click', function(){
  var parent = $(this).parent();
  var vacancy = parent.siblings('.vacancy');
  vacancy.slideToggle(400, function(){
    if(vacancy.is(':visible')){
      scrollTo(vacancy);
    }
  }).css('display', 'flex');
});


var fileInput = $('.vacancy__form input[type="file"]');
console.log(fileInput);

fileInput.each(function() {
  // console.log(index, value, this);
  $(this).on('change', function(){
    var id = $(this).attr('id');
    console.log(id);
    var label = $(this).parent().siblings('label[for="'+id+'"]');
    console.log(label);
    label.toggleClass('uploaded').text(this.files[0].name);
  });
})
