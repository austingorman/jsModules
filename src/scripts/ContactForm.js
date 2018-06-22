// connects to contact page so i can access the peopleMaker function
const contactPage = require("./contact")

const nameFieldEl = document.querySelector("#nameField");
const phoneFieldEl = document.querySelector("#phoneField");
const addressFieldEl = document.querySelector("#addressField");

// when the submit button is pressed, this calls the personMaker function from the contact module and passes in the values of the forms
document.getElementById("submitButton").addEventListener("click", function() {
  contactPage.personMaker(nameFieldEl.value, phoneFieldEl.value, addressFieldEl.value)
  // the following 3 lines clear the fields after the submit button is clicked
  nameFieldEl.value = ""
  phoneFieldEl.value = ""
  addressFieldEl.value = ""
})
