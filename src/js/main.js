$(function () {
  $('.design__slider').slick({
    dots: false,
    infinite: true,
    slidesToShow: 4,
    variableWidth: true,
    prevArrow: "<img class='arrow arrow-left' src='img/arrow-left.svg' alt='arrow left'>",
    nextArrow: "<img class='arrow arrow-right' src='img/arrow-right.svg' alt='arrow right'>",
    responsive:[
      {
        breakpoint: 361,
        settings: {
          variableWidth: false,
          slidesToShow: 1,
        }
      }
    ]
  });
});