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

new cursoreffects.fairyDustCursor({colors: ["#2d1111", "#be5d02", "#964b1b"]});

function checkboxBurger() {
const checkbox = document.getElementById('checkbox-burger')
const line1 = document.getElementById('line1')
const line2 = document.getElementById('line2')
const line3 = document.getElementById('line3')
  if (checkbox.checked) {
    line1.style.transform = "rotate(45deg)"
    line2.style.transform = "scaleY(0)"
    line3.style.transform = "rotate(-45deg)"
  }
  else {
    line1.style.transform = "rotate(0deg)"
    line2.style.transform = "scaleY(1)"
    line3.style.transform = "rotate(0deg)"
  }
}