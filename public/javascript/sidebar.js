export function sidebar() {
  const sidebarButton = document.getElementById('sidebar-button')
  const sidebar = document.getElementById('sidebar')
  const sidebarItems = document.getElementsByClassName('sidebar-item')
  const text = document.getElementById('homepage-text')

  sidebarButton.addEventListener('click', () => {
    sidebar.classList.toggle('show')
  })

  const handleClick = function(e) {
    e.preventDefault()
    sidebar.classList.toggle('show')
    const name = e.currentTarget.classList[1].split('-')[1];
    const target = document.querySelector(`#${name}`)
    console.log(target);
    console.log(text.scrollTop);
    text.scrollTo({
      top: text.scrollTop + target.getBoundingClientRect().top - 200,
      behaviour: 'smooth'
    })

  }

  Array.from(sidebarItems).forEach(i => {
    i.addEventListener('click', handleClick)
  });



}
