let slideIndex = 1;
const slides = document.querySelectorAll('.slide')
const next = document.querySelector('#next')
const prev = document.querySelector('#prev')

function showSlides(index) {
  if (index > slides.length) {slideIndex = 1}
  if (index < 1) {slideIndex = slides.length}
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  slides[slideIndex-1].style.display = 'block'
}

function plusSlides() {
  showSlides(slideIndex += 1);
}
function minusSlides() {
  showSlides(slideIndex -= 1);
}
showSlides(slideIndex);
next.addEventListener('click', plusSlides);
prev.addEventListener('click', minusSlides);