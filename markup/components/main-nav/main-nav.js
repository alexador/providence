$(document).ready(function () {


  // Scroll Events
  $(window).scroll(function () {

    let wScroll = $(this).scrollTop();

    // Activate menu
    if (wScroll > 20) {
      $('.main-nav').addClass('main-nav_is-active');
    } else {
      $('.main-nav').removeClass('main-nav_is-active');
    }
  });

  // slide out menu
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
  const $plansForIndividual = $('.plan__individual');
  const $plansForCompany = $('.plan__company');

  $('.plan__btn-individual').on('click', function () {
    $(this).addClass('plan__btn-individual_active');
    $(this).closest('.plan__toggle-wrapper').removeClass('plan__toggle-wrapper_switched');
    $(this).siblings().removeClass('plan__btn-company_active');
    $plansForIndividual.addClass('plan__individual_active');
    $plansForCompany.removeClass('plan__company_active');
  })

  $('.plan__btn-company').on('click', function () {
    $(this).addClass('plan__btn-company_active');
    $(this).closest('.plan__toggle-wrapper').addClass('plan__toggle-wrapper_switched');
    $(this).siblings().removeClass('plan__btn-individual_active');
    $plansForCompany.addClass('plan__company_active');
    $plansForIndividual.removeClass('plan__individual_active');
  })

  // Wow Animations
  // let wow = new WOW({
  //     boxClass: 'wow', // default
  //     animateClass: 'animated', // default
  //     offset: 0, // default
  //     mobile: true, // default
  //     live: true // default
  // });
  // wow.init();


  // Magnific Popup
  // $('.lightbox').magnificPopup();

});
