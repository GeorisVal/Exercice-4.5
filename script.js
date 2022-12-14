{ 
  let swiper = new Swiper(".swiper", {
  slidesPerView: 3,
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
  breakpoints: {
    200: {
      slidesPerView: 1
    },
    500: {
      slidesPerView: 2
    },
    800: {
      slidesPerView: 3
    }
  }
  })
}

new cursoreffects.fairyDustCursor({colors: ["#2d1111", "#be5d02", "#964b1b"]});

function checkboxBurger() {
const checkbox = document.getElementById('checkbox-burger')
const line1 = document.getElementById('line1')
const line2 = document.getElementById('line2')
const line3 = document.getElementById('line3')
const menu = document.getElementById('menu')
  if (checkbox.checked) {
    line1.style.transform = "rotate(45deg)"
    line2.style.transform = "scaleY(0)"
    line3.style.transform = "rotate(-45deg)"
    menu.style.transform = "scaleY(1)"
    menu.style.height = "200px"
  }
  else {
    line1.style.transform = "rotate(0deg)"
    line2.style.transform = "scaleY(1)"
    line3.style.transform = "rotate(0deg)"
    menu.style.transform = "scaleY(0)"
    menu.style.height = "50px"
  }
}