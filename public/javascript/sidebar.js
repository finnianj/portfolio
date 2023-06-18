import { scroll } from './scroll.js'

export function sidebar() {
  const sidebarButton = document.getElementById('sidebar-button')
  const sidebar = document.getElementById('sidebar')
  const sidebarLinks = document.getElementsByClassName('sidebar-link')
  const textContainer = document.getElementsByClassName('text')[0]

  sidebarButton.addEventListener('click', () => {
    sidebar.classList.toggle('show')
  })

  scroll(sidebarLinks, textContainer, sidebar)
}
