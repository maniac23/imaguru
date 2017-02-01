$('.event-gallery__item').magnificPopup({
  type: 'image',
  gallery: {
    enabled: true
  },
  removalDelay: 300,
  mainClass: 'mfp-fade',
});


$('.image-slider').each(function() { // the containers for all your galleries
    $(this).magnificPopup({
      delegate: '.image-slider__slide', // the selector for gallery item
      type: 'image',
      gallery: {
        enabled:true
      },
      removalDelay: 300,
      mainClass: 'mfp-fade',
    });
  });
