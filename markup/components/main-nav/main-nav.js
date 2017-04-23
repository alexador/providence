$(document).ready(function () {


  // Scroll Events
  $(window).scroll(function () {

    let wScroll = $(this).scrollTop();

    // Activate menu
    if (wScroll > 20) {
      $('.main-nav').addClass('main-nav_is-active');
      // $('#slide_out_menu').addClass('scrolled');
    } else {
      $('.main-nav').removeClass('main-nav_is-active');
      // $('#slide_out_menu').removeClass('scrolled');
    }


    // Scroll Effects

  });


  // Navigation
  // $('#navigation').on('click', function (e) {
  //     e.preventDefault();
  //     $(this).addClass('open');
  //     $('#slide_out_menu').toggleClass('open');

  //     if ($('#slide_out_menu').hasClass('open')) {
  //         $('.menu-close').on('click', function (e) {
  //             e.preventDefault();
  //             $('#slide_out_menu').removeClass('open');
  //         });
  //     }
  // });
  $('.main-nav__ham').on('click', function (e) {
    e.preventDefault();
    $('.main-nav__slide-menu').toggleClass('main-nav__slide-menu_open');
    if ($('.main-nav__slide-menu').hasClass('main-nav__slide-menu_open')) {
      $('.main-nav__slide-close').on('click', function (e) {
        e.preventDefault();
        $('.main-nav__slide-menu').removeClass('main-nav__slide-menu_open');
      });
    }
  });


  // Price Table
  const individualPrices = $('.plan__services-wrapper').find('.plan__individual');
  const companyPrices = $('.plan__services-wrapper').find('.plan__company');


  $('.plan__toggle-wrapper').find('.plan__btn-individual').addClass('plan__btn-individual_acitve');
  $('.plan__services-wrapper').find('.plan__individual').addClass('plan__individual_active');

  $('.plan__toggle-wrapper').find('.plan__btn-individual').on('click', function () {
    $(this).addClass('plan__btn-individual_active');
    $(this).closest('.plan__toggle-wrapper').removeClass('plan__toggle-wrapper_switched');
    $(this).siblings().removeClass('plan__btn-company_active');
    individualPrices.addClass('plan__individual_active');
    companyPrices.removeClass('plan__company_active');
  });

  $('.plan__toggle-wrapper').find('.plan__btn-company').on('click', function () {
    $(this).addClass('plan__btn-company_active');
    $(this).closest('.plan__toggle-wrapper').addClass('plan__toggle-wrapper_switched');
    $(this).siblings().removeClass('.plan__btn-individual_active');
    companyPrices.addClass('plan__company_active');
    individualPrices.removeClass('plan__individual_active');
  });


  // Wow Animations
  // let wow = new WOW({
  //     boxClass: 'wow', // default
  //     animateClass: 'animated', // default
  //     offset: 0, // default
  //     mobile: true, // default
  //     live: true // default
  // });
  // wow.init();


  // Menu For Xs Mobile Screens
  // if ($(window).height() < 450) {
  //     $('.main-nav__slide-footer').addClass('.main-nav__slide-footer_xs');
  // }

  // $(window).on('resize', function () {
  //     if ($(window).height() < 450) {
  //         $('.main-nav__slide-footer').addClass('.main-nav__slide-footer_xs');
  //     } else {
  //         $('.main-nav__slide-footer').removeClass('.main-nav__slide-footer_xs');
  //     }
  // });


  // Magnific Popup
  // $('.lightbox').magnificPopup();



});
