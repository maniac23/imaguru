;(function($){
	console.log(1)
	var coolBoxes = $('.hover-ative-box');
console.log(coolBoxes)
	coolBoxes.eq(0).addClass('_active');

	coolBoxes.on('click', function(){
		$(this).addClass('_active').siblings().removeClass('_active');
	});


}(jQuery));