const sidebarButton = document.getElementById('sidebar-button')
const sidebar = document.getElementById('sidebar')
// const sidebarText = document.getElementById('sidebar-text')
const infoButtons = document.getElementsByClassName('fa-circle-info')
sidebarButton.addEventListener('click', () => {
  console.log('clicked');
  sidebar.classList.toggle('show')
})

Array.from(infoButtons).forEach(b => {
  b.addEventListener('click', (e) => {
    e.currentTarget.children[0].classList.toggle('invisible');
  })
});
