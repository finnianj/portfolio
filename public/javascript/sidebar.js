export function sidebar() {
  const sidebarButton = document.getElementById('sidebar-button')
  const sidebar = document.getElementById('sidebar')
  const sidebarItems = document.getElementsByClassName('sidebar-item')

  sidebarButton.addEventListener('click', () => {
    sidebar.classList.toggle('show')
  })

  const handleClick = function(e) {
    e.preventDefault()
    const name = e.currentTarget.classList[1].split('-')[1];
    const target = document.querySelector(`#${name}`)
    console.log(target);
    target.scrollIntoView({
      behaviour: 'smooth'
    })
  }



  Array.from(sidebarItems).forEach(i => {
    i.addEventListener('click', handleClick)
  });



}
