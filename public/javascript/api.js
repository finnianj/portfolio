// import { sidebar } from "./sidebar.js";
import { scroll } from './scroll.js'

const dateInput = document.getElementById("date-input");
const dateSubmit = document.getElementById("date-submit");
const converterInput = document.getElementById("converter-input");
const converterSubmit = document.getElementById("converter-submit");

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


const apiLinks = document.getElementsByClassName('api-link')
const apiText = document.getElementById('api-text')
scroll(apiLinks, apiText)
