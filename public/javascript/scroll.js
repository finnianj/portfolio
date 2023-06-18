export function scroll(items, container) {

  const handleClick = function(e) {
    e.preventDefault()
    const name = e.currentTarget.id.split('-')[2];
    console.log(name);
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
