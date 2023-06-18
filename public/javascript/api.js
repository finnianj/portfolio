// import { sidebar } from "./sidebar.js";
const apiText = document.getElementById('api-text')
const dateInput = document.getElementById("date-input");
const dateSubmit = document.getElementById("date-submit");
const converterInput = document.getElementById("converter-input");
const converterSubmit = document.getElementById("converter-submit");

// const apiItemSong = document.getElementById("api-item-song");
// const apiItemDate = document.getElementById("api-item-date");
// const apiItemConverter = document.getElementById("api-item-converter");
// const apiItemIP = document.getElementById("api-item-ip");

// const linkSong = document.getElementById("link-to-song");
// const linkDate = document.getElementById("link-to-date");
// const linkConverter = document.getElementById("link-to-converter");
// const linkIP = document.getElementById("link-to-ip");

// linkSong.addEventListener('click', () => {
//   console.log('ok');
//   console.log(apiItemSong);
//   apiItemSong.scrollIntoView({behavior:"smooth"})
// })
// linkDate.addEventListener('click', () => {
//   apiItemDate.scrollIntoView({behavior:"smooth"})
// })
// linkConverter.addEventListener('click', () => {
//   apiItemConverter.scrollIntoView({behavior:"smooth"})
// })
// linkIP.addEventListener('click', () => {
//   apiItemIP.scrollIntoView({behavior:"smooth"})
// })


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

// sidebar()


const apiLinks = document.getElementsByClassName('api-link')


const handleAPIClick = function(e) {
  e.preventDefault()
  const name = e.currentTarget.id.split('-')[2];
  console.log(name);
  const target = document.querySelector(`#${name}`)
  apiText.scrollTo({
    top: apiText.scrollTop + target.getBoundingClientRect().top - 100,
    behaviour: 'smooth'
  })

}

Array.from(apiLinks).forEach(i => {
  i.addEventListener('click', handleAPIClick)
});
