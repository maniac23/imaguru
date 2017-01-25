$('.maintain-paid li').on('click', function() {
var atribute = $(this).attr('data-name');
var checkBox = $("input[name='"+ atribute + "'");
var label = $('label[for="'+ atribute +'"]');
$(this).toggleClass('checked');
label.toggleClass('checked');
checkBox.attr("checked", !checkBox.attr("checked"));
});


$('.catering').on('click', function(e) {
  e.preventDefault();
  var atribute = $(this).attr('data-order');
  var checkBox = $("input[name='"+ atribute + "'");
  var label = $('label[for="'+ atribute +'"]');
  $(this).toggleClass('active');
  label.toggleClass('checked');
  checkBox.attr("checked", !checkBox.attr("checked"));

});


$('input[type="checkbox"]').on('click', function() {
  var atribute = $(this).attr('id');
  var label = $('label[for="'+ atribute +'"]');
  var element = $('.maintain-paid li[data-name="'+ atribute +'"]');
  label.toggleClass('checked');

  if($(this).is(':checked')) {
    element.addClass('checked');
  } else {
     element.removeClass('checked');
  }
});
