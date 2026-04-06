var swiper = new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

const player = new Plyr('#player');

const next = document.querySelector(".swiper-button-next");
const prev = document.querySelector(".swiper-button-prev");

next.addEventListener("mouseenter", () => {
  document
    .querySelector(".swiper-pagination-bullet-active")
    .classList.add("bullet-hover");
});

next.addEventListener("mouseleave", () => {
  document
    .querySelector(".swiper-pagination-bullet-active")
    .classList.remove("bullet-hover");
});

prev.addEventListener("mouseenter", () => {
  document
    .querySelector(".swiper-pagination-bullet-active")
    .classList.add("bullet-hover");
});

prev.addEventListener("mouseleave", () => {
  document
    .querySelector(".swiper-pagination-bullet-active")
    .classList.remove("bullet-hover");
});
