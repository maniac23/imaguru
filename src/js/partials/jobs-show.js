  if ($('#jobs li').length > 3) {
    $('#jobs-button').show();
    $('#jobs-button').click(function() {
      $('#jobs li:hidden').slice(0, 3).fadeIn().css('display', 'flex');;
      if ($('#jobs li').length == $('#jobs li:visible').length) {
        $('#jobs-button').fadeOut();
      }
    });
  }
