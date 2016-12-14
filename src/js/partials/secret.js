$('#secret').click(function(e){
  e.preventDefault();
  $('#secret-hide').fadeOut(600, function(){
    $('#secret-show').fadeIn(600);
  });
})
