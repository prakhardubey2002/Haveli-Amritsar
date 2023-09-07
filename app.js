var swiper = new Swiper('.swiper-container', {
    loop:true,
    autoplay:{
        delay:2500,
    },
    effect: 'fade',
    slidesPerView: 1, // Number of slides per view
    spaceBetween: 1, // Space between slides (optional)
    navigation: {
      nextEl: '.swiper-button-next', // Next button class
      prevEl: '.swiper-button-prev', // Previous button class
    },
  });