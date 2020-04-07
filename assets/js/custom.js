var $ = jQuery.noConflict();
$(function($) {
'use strict';
$(document).ready(function() {

    $('.slider_items.owl-carousel').owlCarousel({
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        loop:true,
        nav:true,
        dots:false,
        items : 1,
    });

    $('.services_items.owl-carousel').owlCarousel({
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        loop:true,
        nav:false,
        items : 3,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

    $('.clients_items.owl-carousel').owlCarousel({
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        loop:true,
        nav:true,
        dots:false,
        items : 1,
    });

    $('.clients_openions_items.owl-carousel').owlCarousel({
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        loop:true,
        nav:false,
        items : 3,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

    
});
});