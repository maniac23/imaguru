
// плавный скроллинг к элементу
// element - элемент, к которому скроллим
// duration - продолжительность анимации
// offset - смещение, на которое недоскроллит скролл -
// чтобы пользователь понимал где оказался,
// должен быть видет соседний элемент

var scrollTo = function(element, duration, offset, callback){
	var position = element.offset().top;
	duration = duration || 700;
	offset = offset || 0;
	$('html, body').animate({scrollTop: position - offset}, duration, callback);
};


// вешает на элемент button обработчик события по click
// на который открывается элемент element

var dropDown = function(button, element) {

	button.on('click', function(evt){
		evt.preventDefault();
		var self = this;
		var height = 0;
		var transition = element.css('transition');
		var textBefore = button.data('textbefore');
		var textAfter = button.data('textafter');
		if (element.outerHeight() == 0) {
			element.css('transition', '');
			element.css('height', 'auto');
			height = element.outerHeight();
			element.css('height', '0');
			element.css('transition', transition);
			element.css('height', height);

//меняем текст в кнопке, на указанный в атрибутах data-textbefore/text-after
			if (textAfter) {
				$(self).text(textAfter);
			};

			element.css('height', height + 'px');
			scrollTo(element, 300, 30);
		} else {
//меняем текст в кнопке, на указанный в атрибутах data-textbefore/text-after
			if (textBefore) {
				$(self).text(textBefore);
			};
			scrollTo(element.parent(), 300, 100, function(){
				element.css('height', height + 'px');
			});
		};
	});

};

// функция для скрытых форм регистрации,
// как на странице организуй у нас
var showHiddenBox = function(button, element){

	button.on('click', function(evt){
		evt.preventDefault();
		element.addClass('_show');
	});
	element.find('.close-button').on('click', function(){
		element.removeClass('_show');
	});
};

var createTabDep = function(tabElement, tabContent) {
	tabElement.on('click', function(){
		tabElement.addClass('_active').siblings().removeClass('_active');
		tabContent.addClass('_active').siblings().removeClass('_active');
	});
};