if ($('.pricelist > ul') && $('.pricelist>ul>li').length > 4) {
  console.log($('.pricelist>ul>li').length);
  $('.pricelist > ul').slick({
    responsive: [
      {
        breakpoint: 5000, // такой костыль чтоб на боьших слайдера не было
        settings: 'unslick'
      },
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 4,
          arrows: true,
          draggable: true
        }
      },
      {
        breakpoint: 1220,
        settings: {
          slidesToShow: 3,
          arrows: true,
          draggable: true
        }
      },
      {
        breakpoint: 801,
        settings: {
          slidesToShow: 2,
          arrows: true,
          draggable: true
        }
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
          arrows: true,
          draggable: true
        }
      }
    ]
  });
}
