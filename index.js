let slideIndex = 1;
const slides = document.querySelectorAll('.slide')
const next = document.querySelector('#next')
const prev = document.querySelector('#prev')
const getImageBtn = document.querySelector('#get-image-btn')
const memeModalCloseBtn = document.querySelector('#meme-modal-close-btn')
const memeModalInner = document.querySelector('#meme-modal-inner')
const memeModal = document.querySelector('#meme-modal')

getImageBtn.addEventListener('click', renderMeme)
memeModalCloseBtn.addEventListener('click', closeModal)

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


function closeModal(){
    memeModal.style.display = 'none'
}

function renderMeme(){
    memeModalInner.innerHTML =  `
        <img 
        class="meme-modal" 
        src="./images/blind-driver.jpeg"
        alt="we silly"
        >
        `
    memeModal.style.display = 'flex'
}