(function ($) {
"use strict";


  $(window).on('scroll',function() {    
   var scroll = $(window).scrollTop();
   if (scroll < 10) {
    $("#sticky-header").removeClass("sticky");
   }else{
    $("#sticky-header").addClass("sticky");
   }
});


$('.slider-active').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
 
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})



})(jQuery);	