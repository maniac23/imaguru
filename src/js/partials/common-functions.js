
// плавный скроллинг к элементу
// element - элемент, к которому скроллим
// duration - продолжительность анимации
// offset - смещение, на которое недоскроллит скролл -
// чтобы пользователь понимал где оказался,
// должен быть видет соседний элемент

var scrollTo = function(element, duration, offset){
	var position = element.offset().top;
	duration = duration || 700;
	offset = offset || 0;
	$('html, body').animate({scrollTop: position - offset}, duration);
};