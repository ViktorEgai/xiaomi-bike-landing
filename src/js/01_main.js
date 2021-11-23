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
  spaceBetween: 40,
  navigation: {
    nextEl: '.review-btns__btn--next',
    prevEl: '.review-btns__btn--prev',
  },
  pagination: {
    el: '.swiper-pagination-2',
  },
  breakpoints: {
     992: {
      slidesPerView: 3,      
    },
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

class ToggleColor {
  constructor() {
    this.toggle = false;
    this.toggleBtn = document.querySelectorAll('.toggle-btn');
  }
  changeToggle() {
    document.addEventListener('click', (e) => {
      const target = e.target;     
      if (target.closest('.toggle-btn')) {
        this.toggle = !this.toggle;
        this.toggleButtons();
        this.checkToggle();
      }
    })
  }
  checkToggle() {
    const mainImage = document.querySelector('.main__image'),
    reviewSlides = document.querySelectorAll('.review__slide'),
    smartphone = document.querySelector('.mobile-app__photo'),
    buyCard = document.querySelector('.buy-card__wrapper'),
    buyCardImage = document.querySelectorAll('.buy-card__image'),
    arrow = document.querySelector('.buy-card__list-arrow'),
    popupBlock = document.querySelectorAll('.popup__block'),
    selectColor = document.getElementById('color');
    if(this.toggle) {
      document.documentElement.style.setProperty('--main-color', '#e0e0e0');
      document.documentElement.style.setProperty('--text-color', '#222222');
      mainImage.setAttribute('src','./img/black-bike.png');
      reviewSlides.forEach(i=>i.style.background = '#f1f1f1');
      smartphone.setAttribute('src','./img/smartphone-white.png');
      buyCard.classList.add('buy-card__wrapper--light');
      buyCardImage.forEach( i => i.setAttribute('src', 'img/clean-black-bike.png'));
      arrow.setAttribute('src',"img/arrow-black.svg");
      popupBlock.forEach( i => i.classList.add('popup__block--light'));
      selectColor.value = 'black';
    } else {
      document.documentElement.style.setProperty('--main-color', '#222222');
      document.documentElement.style.setProperty('--text-color', '#f1f1f1');
      mainImage.setAttribute('src','./img/white-bike.png');
      reviewSlides.forEach( i => i.style.background = '#151515');
      smartphone.setAttribute('src','./img/smartphone-white.png');
      buyCard.classList.remove('buy-card__wrapper--light');
      buyCardImage.forEach( i => i.setAttribute('src', 'img/clean-white-bike.png'));
      arrow.setAttribute('src',"img/arrow-white.svg");
      popupBlock.forEach( i => i.classList.remove('popup__block--light'));
      selectColor.value = 'white';
    }
  }
  toggleButtons() {
    this.toggleBtn.forEach(btn => {
      const span = btn.querySelectorAll('span');
      span.forEach(item => {
        if (item.classList.contains('toggle-btn__item--active')) {
          item.classList.remove('toggle-btn__item--active')
        } else {
          item.classList.add('toggle-btn__item--active')
        }
      });
    });
  }
  getStatus() {
    return this.toggle;
  }
  init() {
    this.changeToggle();    
  }
}
const toggle = new ToggleColor();
toggle.init();


const showPack = () => {
  const title = document.querySelector('.buy-card__list-title');
  const arrow = document.querySelector('.buy-card__list-arrow');
  const list  =document.querySelector('.buy-card__list ');

  title.addEventListener('click', () => {
    title.classList.toggle('buy-card__list-title--active');
    if(title.classList.contains('buy-card__list-title--active')) {
      arrow.style.transform = 'rotate(180deg)';
      list.classList.remove('desktop-hidden');
    } else {
      arrow.style.transform = 'rotate(0deg)';
      list.classList.add('desktop-hidden');
    }
  })
};
showPack();

const smoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
};
smoothScroll();

const toggleBuyPopup = () => {
  const popup = document.querySelectorAll('.popup'),
    popupBuy = document.getElementById('popupBuy'),
    popupReview = document.getElementById('popupReview'),
    popupQuestion = document.getElementById('popupQuestion');
   
  document.addEventListener('click', (e) => { 
    const target = e.target;
    if (target.closest('.buy-card__btn')) {
      popupBuy.classList.add('popup--visible');
      popupBuy.querySelector('.popup__block').classList.add('popup__block--active');
    } 
    if (target.closest('.qna__btn')) {
      popupQuestion.classList.add('popup--visible');
      popupQuestion.querySelector('.popup__block').classList.add('popup__block--active');
    } 
    if (target.closest('.review__btn')) {
      popupReview.classList.add('popup--visible');
      popupReview.querySelector('.popup__block').classList.add('popup__block--active');
    } 
    if(target.closest('.close')) {
      popup.forEach(item => {
        item.classList.remove('popup--visible');
        item.querySelector('.popup__block').classList.remove('popup__block--active');
      });
    }
  });
  
};
toggleBuyPopup();

 AOS.init({
   disable: 'phone'
 });

const toggleMenu = () => {
  const menuBtn = document.querySelector('.menu-btn'),
  navMenu = document.querySelector('.nav');
  menuBtn.addEventListener('click', ()=> {
    navMenu.classList.toggle('nav--active');
    menuBtn.classList.toggle('menu-btn--active')
  });
};
toggleMenu();