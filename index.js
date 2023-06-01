const sidebarButton = document.getElementById('sidebar-button')
const sidebar = document.getElementById('sidebar')
const sidebarText = document.getElementById('sidebar-text')

sidebarButton.addEventListener('click', () => {
  console.log('clicked');
  sidebar.classList.toggle('show')
})
