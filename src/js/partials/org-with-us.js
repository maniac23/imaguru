;(function(){

// владки
	var tabContent = $('.tab-content');

	for (var i = 0; i < tabContent.length; i++){

		var showMoreButton = tabContent.eq(i).find('.show-more');
		var showMoreContent = tabContent.eq(i).find('.show-more-info');

		dropDown(showMoreButton, showMoreContent);
	};
// слайдер на вкладке с едой
	$('.slider-block__catering').slick({
		infinite: true,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true
	});

// скрытые формы 
	var offers = $('.offer-item');
	for (var i = 0; i < offers.length; i++) {
		var showHidden = offers.eq(i).find('.show-hidden');
		var hiddenBox = offers.eq(i).find('.colored-info-box--hidden');
		showHiddenBox(showHidden, hiddenBox);
	};
}());