if(document.querySelector('.event-register__form')) {
  var registerForm = document.querySelector('.event-register__form');
  var inputTitle = registerForm.querySelector('input[name="title"]');
  var eventName = document.querySelector('.main-text__title').innerHTML;
  inputTitle.setAttribute('value', eventName);
}
