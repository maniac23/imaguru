;(function(){

	var tabContent = $('.tab-content');

for (var i = 0; i < tabContent.length; i++){

	var showMoreButton = tabContent.eq(i).find('.show-more');
	var showMoreContent = tabContent.eq(i).find('.show-more-info');

	dropDown(showMoreButton, showMoreContent);
};



}());