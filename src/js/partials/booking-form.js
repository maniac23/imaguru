if (document.getElementsByClassName('booking-btn').length > 0) {

  var buttons = document.getElementsByClassName('booking-btn');
  var form = document.getElementById('booking').getElementsByTagName('form')[0];
  var selectField = form.elements.rooms;

  function setOption(e) {
    // берем аттрибут data-room нажатой кнопки и устаенавливаем выбранным в форме
    var room = e.currentTarget.getAttribute('data-room');
    selectField.value = room;
  }

  for (var i = 0; i < buttons.length; i++) {
    // из каждой кнопки берем аттрибут data-room и добавляем options в select
    var rooms = buttons[i].getAttribute('data-room');
    var option = new Option(rooms, rooms, false, false);
    selectField.appendChild(option);
    // вешаем listener на клик
    buttons[i].addEventListener('click', setOption);
  }

  function getOptions(element) {
    var selectName = element[0].parentNode.getAttribute('data-select');
    var insertElement = form.querySelector('select[name=' + selectName + ']');
    for (var i = 0; i < element.length; i++) {
      var item = element[i].getAttribute('data-name');
      var text = element[i].innerHTML;
      var newOption = new Option(text, item, false, false);
      newOption.setAttribute('name', item);
      insertElement.appendChild(newOption);
    }
  }
  var support = document.querySelectorAll('.support li');
  var promotion = document.querySelectorAll('.promotion li');
  getOptions(support);
  getOptions(promotion);

  // выбираем все кнопки с классом catering
  var cateringButtons = document.querySelectorAll('button.catering');
  // проходим циклом по кнопкам
  for (var x = 0; x < cateringButtons.length; x++) {
    // ищем родителя, потом его первого потомка и его h2.catering
    var parent = cateringButtons[x].parentNode;
    var childText = parent.querySelector('.colored-info-box__title h2').innerHTML;
    var name = cateringButtons[i].getAttribute('data-order');
    var newOption = new Option(childText, name, false, false);
    newOption.setAttribute('name', name);
    form.elements.catering.appendChild(newOption);
  }




}
