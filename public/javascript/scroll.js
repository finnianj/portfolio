export function scroll(items, container, s = false) {

  const handleClick = function(e) {
    e.preventDefault()
    if (s) s.classList.toggle('show')
    const name = e.currentTarget.id.split('-')[2];
    console.log(`Scrolling to element with Id: "${name}".`);
    const target = document.querySelector(`#${name}`)
    container.scrollTo({
      top: container.scrollTop + target.getBoundingClientRect().top - 100,
      behaviour: 'smooth'
    })

  }

  Array.from(items).forEach(i => {
    i.addEventListener('click', handleClick)
  });
  
}
