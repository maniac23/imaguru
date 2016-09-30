;(function($){

	var listItems = $('.promo__main__features-carousel__list__item');
	var blocksForShow = $('.feature-text');

	listItems.eq(Math.floor(listItems.length/2)).addClass('_active');
	blocksForShow.eq(Math.floor(blocksForShow.length/2)).addClass('_active');

	if (listItems && blocksForShow && listItems.length == blocksForShow.length) {
		for (var i = 0; i < listItems.length; i++) {
			createTabDep(listItems.eq(i), blocksForShow.eq(i));
		}
	}







}(jQuery))