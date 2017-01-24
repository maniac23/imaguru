$('.maintain-paid li').on('click', function() {
var atribute = $(this).attr('data-name');
var checkBox = $("input[name='"+ atribute + "'");
$(this).toggleClass('checked');
checkBox.attr("checked", !checkBox.attr("checked"));
});


$('.catering').on('click', function(e) {
  e.preventDefault();
  var atribute = $(this).attr('data-order');
  var checkBox = $("input[name='"+ atribute + "'");
  $(this).toggleClass('active');
  checkBox.attr("checked", !checkBox.attr("checked"));

})
