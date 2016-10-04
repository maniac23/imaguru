;(function($){

//icons - tabs

	// //promo feature tabs
	// var listItems = $('.promo__main__features-carousel__list__item');
	// var blocksForShow = $('.feature-text');
	// createTabDep(listItems, blocksForShow);
	var list = $('.promo__main__features-carousel__list');
	var listItems = list.children('li');
	var featureText = $('.feature-text');

	var showFeatureText = function(index) {
		featureText.eq(index).addClass('_active').siblings().removeClass('_active');
	};

	list.slideTo = function(slide){
		var self = this;
		var viewArea = self.parent().outerWidth();
		var slideWidth = slide.outerWidth();
		var slideOffset = slide.position().left;
		var toTranslate = -(slideOffset + slideWidth / 2 - viewArea / 2);
		self.css('transform', 'translateX(' + toTranslate + 'px)');
	};

	listItems.each(function(){
		$(this).data('index', $(this).index());
	});

	list.append(listItems.eq(0).clone(true));
	list.prepend(listItems.eq(listItems.length - 1).clone(true));
	listItems.eq(0).addClass('_active');
	showFeatureText(listItems.eq(0).data('index'));

	var sliderTick = function(){
		var currSlide = list.children('li').filter('._active')
		var currIndex = list.children('li').index(currSlide);
		var nextSlide = list.children('li').eq(currIndex + 1);
		list.append(nextSlide.clone(true));
		currSlide.removeClass('_active');
		nextSlide.addClass('_active');
		list.slideTo(nextSlide);
		showFeatureText(nextSlide.data('index'));
	};

	// AUTOPLAY
	var carouselTimer
	var setTimer = function(){
		carouselTimer = setInterval(sliderTick, 5000);
	};
	var unSetTimer = function(){
		clearInterval(carouselTimer);
	};

	setTimer();

	featureText.on('mouseenter', function(){
		unSetTimer();
	});

	featureText.on('mouseleave', function(){
		setTimer();
	});


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