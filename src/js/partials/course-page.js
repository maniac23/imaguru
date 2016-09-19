(function($){

	var eMail = 'tk@imaguru.by';

	$('.header__nav-toggler').on('click', function(){
		$('.header__nav').toggleClass('show');
	});

	$(window).on('resize', function(){
		$('.header__nav').removeClass('show');
	});

	var registrationForm = $('.course-registration-form');

	var letterConstructor = function(form){
		return { 'first_name': form.elements['f_name'].value,
				 'last_name': form.elements['l_name'].value,
				 'phone': form.elements['phone'].value,
				 'email': form.elements['email'].value,
				 'event_title': form.elements['event_title'].value,
		};
	};

	var tryToSendEmail = function(form){
		var letter = letterConstructor(form);
		jQuery.ajax({
			type: "POST",
			url: 'php/send_mail.php',
			data: {
				'letter': letter,
				'e_mail': eMail
			},
			success: function(){
				registrationForm.addClass('_sended');
			},
		});
	};

	registrationForm.on('submit', function(evt){
		evt.preventDefault();
		if (!$(this).is('._sended')){
			tryToSendEmail(this);
		};
		return false;
	});

	$('.marker').on('click', function(evt){
		evt.preventDefault();
		var selector = $(this).attr('href');
		scrollTo($(selector), 800);
		return false;
	});

// learn more
	var learnMoreBtn = $('.learn-more-btn');
	var learnMoreSection = $('.learn-more');
	var programmSection = $('.programm-section');


	var setLearnMoreHeight = function(){
		var height = 0;

		if (learnMoreSection.is('._show')) {
			scrollTo(learnMoreBtn, 300);
			learnMoreSection.children().each(function(){
				height += $(this).outerHeight();
			});
		} else {
			scrollTo(programmSection, 300);
		};

		learnMoreSection.css('height', height + 'px');
		return;
	};

	learnMoreBtn.on('click', function(evt){
		evt.preventDefault();
		learnMoreSection.toggleClass('_show');
		setLearnMoreHeight();
	});
}(jQuery));