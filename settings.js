const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const container = document.querySelector('.container')
const mainSlide = document.querySelector('.main-slide')
const slideCount = mainSlide.querySelectorAll('div').length

let activeSlideNumber = 0

sidebar.style.top = `-${(slideCount-1) * 100}vh`

upBtn.addEventListener('click', () => {
   changeSlide('up')
})
downBtn.addEventListener('click', () => {
   changeSlide('down')
})

document.addEventListener('keydown', event => {
   if(event.key === 'ArrowUp') {
      changeSlide('up')
   } else if(event.key === 'ArrowDown') {
      changeSlide('down')
   }
})

function changeSlide(direction) {
   if(direction === 'up' ) {
      activeSlideNumber++
      if(activeSlideNumber === slideCount) {
         activeSlideNumber = 0
      }
   } else if(direction==='down') {
      activeSlideNumber--
      if(activeSlideNumber < 0) {
         activeSlideNumber = slideCount - 1
      }
   }

   const height = container.clientHeight

   mainSlide.style.transform = `translateY(-${activeSlideNumber * height}px)`
   sidebar.style.transform = `translateY(${activeSlideNumber * height}px)`
}