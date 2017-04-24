"use strict";
"use strict";
"use strict";
"use strict";
"use strict";
"use strict";
'use strict';

$(document).ready(function () {

  // Scroll Events
  $(window).scroll(function () {

    var wScroll = $(this).scrollTop();

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
  var $plansForIndividual = $('.plan__individual');
  var $plansForCompany = $('.plan__company');

  $('.plan__btn-individual').on('click', function () {
    $(this).addClass('plan__btn-individual_active');
    $(this).closest('.plan__toggle-wrapper').removeClass('plan__toggle-wrapper_switched');
    $(this).siblings().removeClass('plan__btn-company_active');
    $plansForIndividual.addClass('plan__individual_active');
    $plansForCompany.removeClass('plan__company_active');
  });

  $('.plan__btn-company').on('click', function () {
    $(this).addClass('plan__btn-company_active');
    $(this).closest('.plan__toggle-wrapper').addClass('plan__toggle-wrapper_switched');
    $(this).siblings().removeClass('plan__btn-individual_active');
    $plansForCompany.addClass('plan__company_active');
    $plansForIndividual.removeClass('plan__individual_active');
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


  // Magnific Popup
  // $('.lightbox').magnificPopup();
});
// $(document).ready(function () {
//   var individual_price_table = $('#price_tables').find('.individual');
//   var company_price_table = $('#price_tables').find('.company');


//   $('.switch-toggles').find('.individual').addClass('active');
//   $('#price_tables').find('.individual').addClass('active');

//   $('.switch-toggles').find('.individual').on('click', function () {
//     $(this).addClass('active');
//     $(this).closest('.switch-toggles').removeClass('active');
//     $(this).siblings().removeClass('active');
//     individual_price_table.addClass('active');
//     company_price_table.removeClass('active');
//   });

//   $('.switch-toggles').find('.company').on('click', function () {
//     $(this).addClass('active');
//     $(this).closest('.switch-toggles').addClass('active');
//     $(this).siblings().removeClass('active');
//     company_price_table.addClass('active');
//     individual_price_table.removeClass('active');
//   });

// });
"use strict";
"use strict";
"use strict";
"use strict";
"use strict";