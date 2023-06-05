
const dateInput = document.getElementById("date-input");
const dateSubmit = document.getElementById("date-submit");


dateSubmit.addEventListener('click', (e) => {
  e.preventDefault()
  console.log(dateInput.value);
})
