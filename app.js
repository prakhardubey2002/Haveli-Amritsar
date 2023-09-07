var swiper = new Swiper('.swiper-container', {
    loop:true,
    autoplay:{
        delay:2000,
    },
    effect: 'fade',
    slidesPerView: 1, // Number of slides per view
    spaceBetween: 1, // Space between slides (optional)
    navigation: {
      nextEl: '.swiper-button-next', // Next button class
      prevEl: '.swiper-button-prev', // Previous button class
    },
  });
var swiper = new Swiper('.swiper-container2', {
    loop:true,
    autoplay:{
        delay:4000,
    },
    effect: 'slide',
    slidesPerView: 1, // Number of slides per view
    spaceBetween: 1, // Space between slides (optional)
    
  });