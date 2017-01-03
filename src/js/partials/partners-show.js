  if ($('.partners__item').length > 3) {
    $('#partners-button').show();
    $('#partners-button').click(function() {
      $('#partners li:nth-child(n+4)').fadeToggle(400, function() {
        if ($('#partners li:nth-child(n+4)').is(":visible")) {
          $('#partners-button').text('Скрыть');
        } else {
          $('#partners-button').text('Показать еще');
        }
      });
    });
  }
