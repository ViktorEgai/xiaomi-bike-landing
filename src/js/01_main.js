'use strict';
const swiperBrand = new Swiper('.brand-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  speed: 800,
  autoplay: {
   delay: 5000,
 },
  
  breakpoints: {
    
    576: {
      direction: 'vertical',
    },
   
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  }
  
});

const swiperReview = new Swiper('.review-swiper', {
  // Optional parameters 
  loop: true,
  speed: 800, 
  slidesPerView: 3,
  spaceBetween: 40,
  navigation: {
    nextEl: '.review-btns__btn--next',
    prevEl: '.review-btns__btn--prev',
  },
  pagination: {
    el: '.swiper-pagination-2',
  },
  breakpoints: {
    // when window width is >= 320px
    640: {
      slidesPerView: 2,
    },
    // when window width is >= 480px
    320: {
      slidesPerView: 1,

    },   
  }

  
});

