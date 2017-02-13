
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

var dropDown = function(button, element, scrollFlag) {

	button.on('click', function(evt){
		evt.preventDefault();
		var self = this;
		var height = 0;
		var transition = element.css('transition');
		var textBefore = button.data('textbefore');
		var textAfter = button.data('textafter');
		// console.log(textBefore, textAfter);
		// console.log(transition)
		if (element.outerHeight() == 0) {

			element.css('transition', '');
			element.css('height', 'auto');
			height = element.outerHeight();
			element.css('height', '0');
			element.css('transition', transition);
			setTimeout(function(){element.css('height', height + 'px');}, 0)

//меняем текст в кнопке, на указанный в атрибутах data-textbefore/text-after
			if (textAfter) {
				$(self).text(textAfter);
			};


			if (!scrollFlag) {
				scrollTo(element, 300, 30);
			}

		} else {
//меняем текст в кнопке, на указанный в атрибутах data-textbefore/text-after
			if (textBefore) {
				$(self).text(textBefore);
			};
			if (!scrollFlag) {
				scrollTo(element.parent(), 300, 100, function(){
					element.css('height', height + 'px');
				});
			} else {
				element.css('height', height + 'px');
			};
		};
	});

};

// функция для скрытых форм регистрации,
// как на странице организуй у нас
// var showHiddenBox = function(button, element){
//
// 	button.on('click', function(evt){
// 		evt.preventDefault();
// 		element.addClass('_show');
// 	});
// 	element.find('.close-button').on('click', function(){
// 		element.removeClass('_show');
// 	});
// };

var createTabDep = function(tabElement, tabContent) {

	var addEvent = function(elem, content){
		elem.on('click', function(){
			elem.addClass('_active').siblings().removeClass('_active');
			content.addClass('_active').siblings().removeClass('_active');
		});
	};
// если передаем наборы элементов
	if (tabElement.length > 0 && tabContent.length > 0) {
		var firstActiveIndex = firstActiveIndex || Math.floor(tabElement.length/2);
		tabElement.eq(firstActiveIndex).addClass('_active');
		tabContent.eq(firstActiveIndex).addClass('_active');

		if (tabElement && tabContent && tabElement.length == tabContent.length) {
			for (var i = 0; i < tabElement.length; i++) {
				addEvent(tabElement.eq(i), tabContent.eq(i));
			};
		};

		return;
	};

	addEvent(tabElement, tabContent);
//если одиночный элемент
};
