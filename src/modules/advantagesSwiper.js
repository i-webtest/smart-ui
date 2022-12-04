import Swiper, { Navigation, Pagination } from "swiper";

const swiperPagination = document.querySelector(".swiper-pagination");

const swiper = new Swiper(".advantages__swiper", {
  direction: "horizontal",
  loop: false,
  spaceBetween: 20,

  modules: [Navigation, Pagination],

  // Navigation arrows
  navigation: {
    disabledClass: "advantages__swiper-button-next__disabled",
    nextEl: ".advantages__swiper-button-next",
    prevEl: ".advantages__swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    type: "custom",
  },
});

// console.log("swiper: ", swiper);
