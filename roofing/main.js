$(document).ready(function(){
    $('.slick').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        accessibility: true, 
        arrows: true,
        prevArrow: '<span class="prevArrow"><i class="fa-solid fa-angle-left" style="color: #000000;"></i></span>', 
        nextArrow: '<span class="nextArrow"><i class="fa-solid fa-angle-right" style="color: #000000;"></i></span>', 
        
      });
  });