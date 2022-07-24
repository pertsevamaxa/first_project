import Swiper, { Pagination } from 'swiper';

const windowInnerWidth = window.innerWidth;

if (windowInnerWidth < 768) {
  const swiper = new Swiper('.swiper', {

    slidesPerView: 1.2,
    loop: false,
    modules: [Pagination],
    direction: 'horizontal',

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}


