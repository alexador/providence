$(document).ready(function () {
  $(window).scroll(function () {

    let wScroll = $(this).scrollTop();

    if (wScroll > 20) {
      $('.main-nav').addClass('main-nav_is-active');
    } else {
      $('.main-nav').removeClass('main-nav_is-active');
    }
  });

  $('.main-nav__ham').on('click', function (e) {
    e.preventDefault();
    $('.main-nav__slide-menu').toggleClass('main-nav__slide-menu_open');
    if ($('.main-nav__slide-menu').hasClass('main-nav__slide-menu_open')) {
      $('.main-nav__slide-close').on('click', function (e) {
        e.preventDefault();
        $('.main-nav__slide-menu').removeClass('main-nav__slide-menu_open');
      });
      $('.main-nav__slide-menu').swipe({
        swipeLeft: function (event, phase, direction, distance, duration, fingers) {
          $(".main-nav__slide-menu").removeClass("main-nav__slide-menu_open");
          console.log(distance);
        }
      })
    }
  });
});
