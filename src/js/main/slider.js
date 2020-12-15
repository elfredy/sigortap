$(document).ready(function () {
  $(".logosCarousel").owlCarousel({
    loop: false,
    margin: 20,
    nav: false,
    dots: false,
    autoplay: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 7,
      },
    },
  });

  $(".sercicesCarousel").owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    autoplay: false,
    responsive: {
      0: {
        items: 1,
        autoplay: true
      },
      600: {
        items: 2,
        autoplay: true
      },
      1000: {
        items: 4,
      },
    },
  });
});
