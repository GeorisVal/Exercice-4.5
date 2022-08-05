{
  var swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  slidesPerColumn: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  })
}

const mediaQuery = window.matchMedia('(min-width: 768px)')

function phoneChange(e) {
  if (e.matches) {
    console.log('It worky work !')
  }
}

mediaQuery.addEventListener(phoneChange, null)
phoneChange(mediaQuery)