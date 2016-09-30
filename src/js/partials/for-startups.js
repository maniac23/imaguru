;(function($){

//icons - tabs

	//promo feature tabs
	var listItems = $('.promo__main__features-carousel__list__item');
	var blocksForShow = $('.feature-text');
	createTabDep(listItems, blocksForShow);

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