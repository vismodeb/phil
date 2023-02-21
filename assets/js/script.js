$(document).ready(function(){
   $('.hero-carousel').owlCarousel({
      loop:true,
      autoplay:true,
      items:1,
      nav:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
      // navText : ["src=''","<i class='fa fa-chevron-right'></i>"],
   });

   // Mobile Menu Icon
   $(document).ready(function(){
      $('#nav-icon4').click(function(){
         $(this).toggleClass('open');
         $('.header-nav').toggleClass('active');
      });
   });
});

// ======================= For Memubar ===================================
let navBar = document.querySelector('.header-nav');
function openNav(){
   navBar.classList.toggle('active');
}

