const sidebarButton = document.getElementById('sidebar-button')
const sidebar = document.getElementById('sidebar')

sidebarButton.addEventListener('click', () => {
  console.log('clicked');
  sidebar.classList.toggle('hidden')
})
