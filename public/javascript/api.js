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

// const sidebarButton = document.getElementById('sidebar-button')
// const sidebar = document.getElementById('sidebar')
// // const sidebarText = document.getElementById('sidebar-text')

// sidebarButton.addEventListener('click', () => {
//   console.log('clicked');
//   sidebar.classList.toggle('show')
// })
