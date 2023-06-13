const sidebarButton = document.getElementById('sidebar-button')
const sidebar = document.getElementById('sidebar')
const overlay = document.getElementById('overlay')
// const sidebarText = document.getElementById('sidebar-text')
const infoButtons = document.getElementsByClassName('info-wrapper')
sidebarButton.addEventListener('click', () => {
  console.log('clicked');
  sidebar.classList.toggle('show')
})

Array.from(infoButtons).forEach(b => {
  b.children[0].addEventListener('click', (e) => {
    overlay.classList.toggle('visible')
    b.children[1].classList.toggle('visible');
  })
});

overlay.addEventListener('click', () => {
  console.log('clicked');
  overlay.classList.remove('overlay-show')
  Array.from(infoButtons).forEach(b => {
    b.children[1].classList.toggle('visible');
  });
})
