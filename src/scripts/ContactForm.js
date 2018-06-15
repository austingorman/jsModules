// connects to contact page so i can access the peopleMaker function
const contactPage = require("./contact")

const nameFieldEl = document.querySelector("#nameField");
const phoneFieldEl = document.querySelector("#phoneField");
const addressFieldEl = document.querySelector("#addressField");

document.getElementById("submitButton").addEventListener("click", function() {
  // the following 3 lines clear the fields after the submit button is clicked
  contactPage(nameFieldEl.value, phoneFieldEl.value, addressFieldEl.value)
  nameFieldEl.value = ""
  phoneFieldEl.value = ""
  addressFieldEl.value = ""
})

// contactPage("1343", "234324", "234324")