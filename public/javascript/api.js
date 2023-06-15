const dateInput = document.getElementById("date-input");
const dateSubmit = document.getElementById("date-submit");
const converterInput = document.getElementById("converter-input");
const converterSubmit = document.getElementById("converter-submit");

const apiItemSong = document.getElementById("api-item-song");
const apiItemDate = document.getElementById("api-item-date");
const apiItemConverter = document.getElementById("api-item-converter");
const apiItemIP = document.getElementById("api-item-ip");

const linkSong = document.getElementById("link-to-song");
const linkDate = document.getElementById("link-to-date");
const linkConverter = document.getElementById("link-to-converter");
const linkIP = document.getElementById("link-to-ip");

linkSong.addEventListener('click', () => {
  console.log('ok');
  console.log(apiItemSong);
  apiItemSong.scrollIntoView({behavior:"smooth"})
})
linkDate.addEventListener('click', () => {
  apiItemDate.scrollIntoView({behavior:"smooth"})
})
linkConverter.addEventListener('click', () => {
  apiItemConverter.scrollIntoView({behavior:"smooth"})
})
linkIP.addEventListener('click', () => {
  apiItemIP.scrollIntoView({behavior:"smooth"})
})


dateSubmit.addEventListener('click', (e) => {
  e.preventDefault()
  let d = dateInput.value.replaceAll('/', '%2F')
  window.open(`/api/date/${d}`, '_blank');
  dateInput.value = ""
})

converterSubmit.addEventListener('click', (e) => {
  e.preventDefault()
  console.log(converterInput.value);
  window.open(`/api/converter?value=${converterInput.value}`, '_blank');
  converterInput.value = ""
})



// const sidebarButton = document.getElementById('sidebar-button')
// const sidebar = document.getElementById('sidebar')
// // const sidebarText = document.getElementById('sidebar-text')

// sidebarButton.addEventListener('click', () => {
//   console.log('clicked');
//   sidebar.classList.toggle('show')
// })

const sidebarButton = document.getElementById('sidebar-button')
const sidebar = document.getElementById('sidebar')
const overlay = document.getElementById('overlay')
const text = document.getElementById('homepage-text')

// const sidebarText = document.getElementById('sidebar-text')
const infoButtons = document.getElementsByClassName('info-wrapper')
sidebarButton.addEventListener('click', () => {
  console.log('clicked');
  sidebar.classList.toggle('show')
})

Array.from(infoButtons).forEach(b => {
  b.children[0].addEventListener('click', (e) => {
    text.classList.toggle('text-fade')
    overlay.classList.toggle('visible')
    b.children[1].classList.toggle('visible');
  })
});

overlay.addEventListener('click', () => {
  console.log('clicked');
  text.classList.add('text-fade')
  overlay.classList.remove('visible')
  Array.from(infoButtons).forEach(b => {
    b.children[1].classList.remove('visible');
  });
})
