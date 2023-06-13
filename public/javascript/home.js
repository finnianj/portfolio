const sidebarButton = document.getElementById('sidebar-button')
const sidebar = document.getElementById('sidebar')
const overlay = document.getElementById('overlay')
const text = document.getElementById('homepage-text')

// const sidebarText = document.getElementById('sidebar-text')
const infoButtons = document.getElementsByClassName('info-wrapper')
sidebarButton.addEventListener('click', () => {
  console.log('clicked');
  sidebar.classList.toggle('show')
})

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
