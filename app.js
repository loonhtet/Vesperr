var swiper = new Swiper(".mySwiper", {
  grid: {
    rows: 1,
  },
  spaceBetween: 120,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
    },
  },
});
