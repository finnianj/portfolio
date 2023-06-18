import { scroll } from './scroll.js'

export function sidebar(textContainer) {
  const sidebarButton = document.getElementById('sidebar-button')
  const sidebar = document.getElementById('sidebar')
  const sidebarLinks = document.getElementsByClassName('sidebar-link')

  sidebarButton.addEventListener('click', () => {
    sidebar.classList.toggle('show')
  })

  scroll(sidebarLinks, textContainer, sidebar)
}
