import { scroll } from './scroll.js'

export function sidebar() {
  const sidebarButton = document.getElementById('sidebar-button')
  const sidebar = document.getElementById('sidebar')
  const sidebarLinks = document.getElementsByClassName('sidebar-link')
  const text = document.getElementById('homepage-text')

  sidebarButton.addEventListener('click', () => {
    sidebar.classList.toggle('show')
  })

  scroll(sidebarLinks, text)

  // const handleClick = function(e) {
  //   e.preventDefault()
  //   sidebar.classList.toggle('show')
  //   const name = e.currentTarget.classList[1].split('-')[1];
  //   const target = document.querySelector(`#${name}`)
  //   text.scrollTo({
  //     top: text.scrollTop + target.getBoundingClientRect().top - 100,
  //     behaviour: 'smooth'
  //   })

  // }

  // Array.from(sidebarItems).forEach(i => {
  //   i.addEventListener('click', handleClick)
  // });



}
