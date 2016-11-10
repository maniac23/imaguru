if (document.getElementsByClassName('booking-btn')) {

  var buttons = document.getElementsByClassName('booking-btn');
  var form = document.getElementById('booking').getElementsByTagName('form')[0];
  var selectField = form.elements.rooms;

  function setOption(e) {
  // берем аттрибут data-room нажатой кнопки и устаенавливаем выбранным в форме
    var room = e.currentTarget.getAttribute('data-room');
    selectField.value = room;
  }

  for ( var i = 0; i < buttons.length; i++) {
  // из каждой кнопки берем аттрибут data-room и добавляем options в select
    var rooms = buttons[i].getAttribute('data-room');
    var option = new Option(rooms, rooms, false, false);
    selectField.appendChild(option);
  // вешаем listener на клик
    buttons[i].addEventListener('click', setOption);
  }

}
