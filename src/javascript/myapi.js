import { scroll } from './scroll.js'
import { sidebar } from './sidebar.js'

sidebar()

const dateInput = document.getElementById("date-input");
const dateSubmit = document.getElementById("date-submit");
const converterInput = document.getElementById("converter-input");
const converterSubmit = document.getElementById("converter-submit");

dateSubmit.addEventListener('click', (e) => {
  e.preventDefault()
  let d = dateInput.value.replaceAll('/', '%2F')
  window.open(`/myapi/date/${d}`, '_blank');
  dateInput.value = ""
})

converterSubmit.addEventListener('click', (e) => {
  e.preventDefault()
  window.open(`/myapi/converter?value=${converterInput.value}`, '_blank');
  converterInput.value = ""
})

const apiLinks = document.getElementsByClassName('api-link-top')
const apiText = document.getElementById('api-text')
scroll(apiLinks, apiText)
