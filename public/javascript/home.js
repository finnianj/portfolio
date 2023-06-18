import { sidebar } from './sidebar.js'

const overlay = document.getElementById('overlay')
const textContainer = document.getElementById('homepage-text')
const infoButtons = document.getElementsByClassName('info-wrapper')

sidebar()

Array.from(infoButtons).forEach(b => {
  b.children[0].addEventListener('click', (e) => {
    textContainer.classList.toggle('text-fade')
    overlay.classList.toggle('visible')
    b.children[1].classList.toggle('visible');
  })
});

overlay.addEventListener('click', () => {
  console.log('clicked');
  textContainer.classList.add('text-fade')
  overlay.classList.remove('visible')
  Array.from(infoButtons).forEach(b => {
    b.children[1].classList.remove('visible');
  });
})
