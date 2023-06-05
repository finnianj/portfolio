const dateInput = document.getElementById("date-input");
const dateSubmit = document.getElementById("date-submit");


dateSubmit.addEventListener('click', (e) => {
  e.preventDefault()
  console.log(dateInput.value);
  window.open(`/api/date/${dateInput.value}`, '_blank');
  dateInput.value = ""
})

// const sidebarButton = document.getElementById('sidebar-button')
// const sidebar = document.getElementById('sidebar')
// // const sidebarText = document.getElementById('sidebar-text')

// sidebarButton.addEventListener('click', () => {
//   console.log('clicked');
//   sidebar.classList.toggle('show')
// })
