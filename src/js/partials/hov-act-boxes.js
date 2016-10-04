;(function($){

	var coolBoxes = $('.hover-ative-box');
	coolBoxes.eq(0).addClass('_active');

	coolBoxes.on('click', function(){
		$(this).addClass('_active').siblings().removeClass('_active');
	});

}(jQuery));