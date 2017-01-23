if(document.querySelector('#event-register')) {
  var registerForm = document.querySelector('.wpcf7-form');
  var inputTitle = registerForm.querySelector('input[name="title"]');
  var eventName = document.querySelector('.main-text__title').innerHTML;
  inputTitle.setAttribute('value', eventName);
}
