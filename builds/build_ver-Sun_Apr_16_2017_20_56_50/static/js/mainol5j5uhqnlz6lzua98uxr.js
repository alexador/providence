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
    /*var individual_price_table = $('#price_tables').find('.individual');
    var company_price_table = $('#price_tables').find('.company');
      $('.switch-toggles').find('.individual').addClass('active');
    $('#price_tables').find('.individual').addClass('active');
     $('.switch-toggles').find('.individual').on('click', function(){
        $(this).addClass('active');
        $(this).closest('.switch-toggles').removeClass('active');
        $(this).siblings().removeClass('active');
        individual_price_table.addClass('active');
        company_price_table.removeClass('active');
    });
     $('.switch-toggles').find('.company').on('click', function(){
        $(this).addClass('active');
        $(this).closest('.switch-toggles').addClass('active');
        $(this).siblings().removeClass('active');
        company_price_table.addClass('active');
        individual_price_table.removeClass('active');
    });*/

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
"use strict";
"use strict";
"use strict";
"use strict";
"use strict";
"use strict";