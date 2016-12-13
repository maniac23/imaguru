;(function($){

	var list = $('.promo__main__features-carousel__list');
	if (list.is('*')) {
		$('.sliderFor').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,

			asNavFor: '.sliderNav'
		});
		$('.sliderNav').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			asNavFor: '.sliderFor',
			autoplay: true,
			autoplaySpeed: 5000,
			arrows: false,
			dots: false,
			centerMode: true,
			focusOnSelect: true
		});
	};



// <<<<<<<<<<<<<<<<<<<<<<<<<<<<

	//success story tabs
	var listItems = $('.success-story__carousell__list__item');
	var blocksForShow = $('.success-story__carousell__text');
	createTabDep(listItems, blocksForShow);


// dropdown

	var buttonsDrop = $('.success-story__carousell__text .show-hidden');

	for (var i = 0; i < buttonsDrop.length; i++) {

		var dropBtn = buttonsDrop.eq(i);
		var dropElement = dropBtn.siblings('.hidden-text');

		dropBtn.data('textbefore','Развернуть');
		dropBtn.data('textafter', 'Свернуть');

		if (dropBtn.is('.show-hidden') && dropElement.is('.hidden-text')) {
			dropDown(dropBtn, dropElement, 'noscroll');
		};
	};
}(jQuery))