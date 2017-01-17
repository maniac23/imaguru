function showItems(item) {
  var itemLi = item + ' li';
  var button = item + '-button';
  var child = itemLi + ':nth-child(n+4)';
  console.log(button);
  if ($(itemLi).length > 3) {
    $(button).show();
    $(button).click(function () {
      $(button).toggleClass('team__button--is-active');
      $(child).fadeToggle(400, function () {
        if ($(itemLi).length == $(itemLi + ':visible').length) {
          $(button).text('Скрыть');
        } else {
          $(button).text('Показать еще');
        }
      }).css('display', 'flex');
    });
  }
};

showItems('#team');
showItems('#jobs');
showItems('#partners');
