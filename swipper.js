var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 40,
    freeMode: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });