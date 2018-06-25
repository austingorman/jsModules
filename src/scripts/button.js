const contactPage = require("./contactBuilder")
const domBuilder = require("./domBuilder")


let nameFieldEl = document.querySelector("#nameField");
let phoneFieldEl = document.querySelector("#phoneField");
let addressFieldEl = document.querySelector("#addressField");


// when the submit button is pressed, this calls the personMaker function from the contact module and passes in the values of the forms
document.getElementById("submitButton").addEventListener("click", function() {
  contactPage(nameFieldEl.value, phoneFieldEl.value, addressFieldEl.value)
  domBuilder()
  // the following clears the fields after the submit button is clicked
  nameFieldEl.value = ""
  phoneFieldEl.value = ""
  addressFieldEl.value = ""
})



