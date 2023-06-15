export function sidebar() {
  const sidebarButton = document.getElementById('sidebar-button')
  const sidebar = document.getElementById('sidebar')
  const sidebarItems = document.getElementsByClassName('sidebar-item')

  sidebarButton.addEventListener('click', () => {
    sidebar.classList.toggle('show')
  })

  const handleClick = function(e) {
    
    setTimeout(function() {
      console.log(window.location.hash);
      const e = document.querySelector(window.location.hash)
      e.scrollIntoView({
        behaviour: 'smooth',
        // block: 'start',
        // inline: 'nearest',
        offset: { top: -800 },
      })
    }, 100)
  }

  Array.from(sidebarItems).forEach(i => {
    i.addEventListener('click', handleClick)
  });


}
