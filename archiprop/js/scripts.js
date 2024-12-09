(function($) {
    'use strict';
    
    $('.partners-logo').owlCarousel({
        loop:true,
        margin:10,
        nav: false,
        responsive:{
            0:{
                items:2
            },
            480:{
                items:3
            },
            992:{
                items:4
            }
        }
    })

    $('.test-caro').owlCarousel({
        autoplay: true,
        loop:true,
        responsiveClass:true,
        items: 1
    })

    //======================
    // Mobile menu 
    //======================
    $('#mobile-menu-toggler').on('click', function(e) {
        e.preventDefault();
        $('.navbar-nav').slideToggle();
    })
    $('.has-menu-child').append('<i class="menu-dropdown ti-angle-down"></i>');
    
    if ($(window).width() <= 991) {
        $('.menu-dropdown').on('click', function() {
            $(this).prev().slideToggle();
            $(this).toggleClass('ti-angle-down ti-angle-up')
        })
    }

}) (jQuery);

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navbar-nav li a");
  
    window.addEventListener("scroll", () => {
      const currentScrollPos = window.scrollY;
  
      navLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute("href"));
  
        if (
          section.offsetTop <= currentScrollPos + 10 &&
          section.offsetTop + section.offsetHeight > currentScrollPos
        ) {

          navLinks.forEach(nav => nav.classList.remove("active"));

          link.classList.add("active");
        }
      });
    });
  });
  