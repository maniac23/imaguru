;(function(){
	var socialForMove = $('.moveAfterWelcome');
	var lScrBefEl = $('.lScrBefEl');
	var sScrBefEl = $('.sScrBefEl');

	var checkSocialPosition = function(){

		if (window.matchMedia("(max-width: 768px)").matches && socialForMove.prev().is(lScrBefEl)) {
			socialForMove.insertAfter(sScrBefEl);
		} else if (!window.matchMedia("(max-width: 768px)").matches && socialForMove.prev().is(sScrBefEl)) {
			socialForMove.insertAfter(lScrBefEl);
		};

	};


	if ( socialForMove && lScrBefEl && sScrBefEl) {
		checkSocialPosition();
		$(window).on('resize', checkSocialPosition);
	};


}());