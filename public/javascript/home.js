import { sidebar } from './sidebar.js'
sidebar()

const overlay = document.getElementById('overlay')
const text = document.getElementById('homepage-text')
const infoButtons = document.getElementsByClassName('info-wrapper')


Array.from(infoButtons).forEach(b => {
  b.children[0].addEventListener('click', (e) => {
    text.classList.toggle('text-fade')
    overlay.classList.toggle('visible')
    b.children[1].classList.toggle('visible');
  })
});

overlay.addEventListener('click', () => {
  console.log('clicked');
  text.classList.add('text-fade')
  overlay.classList.remove('visible')
  Array.from(infoButtons).forEach(b => {
    b.children[1].classList.remove('visible');
  });
})

// window.onload = function() {
//   setTimeout(function() {
//     const hash = window.location.hash;
//     if (hash) {
//       const targetElement = document.querySelector(hash);
//       if (targetElement) {
//         targetElement.scrollIntoView({ behavior: 'smooth' });
//       }
//     }
//   }, 1000)
// };


