$(function() {

  //вызов слайдера
  $('.js-topslider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true
  });

  //fancybox init
  $('[data-fancybox]').fancybox({
    buttons: [
      "zoom",
      "close"
    ],
  });

});