const sidebarButton = document.getElementById('sidebar-button')
const sidebar = document.getElementById('sidebar')
// const sidebarText = document.getElementById('sidebar-text')
const infoButtons = document.getElementsByClassName('info-wrapper')
sidebarButton.addEventListener('click', () => {
  console.log('clicked');
  sidebar.classList.toggle('show')
})

Array.from(infoButtons).forEach(b => {
  b.children[0].addEventListener('click', (e) => {
    b.children[1].classList.toggle('invisible');
  })
});
