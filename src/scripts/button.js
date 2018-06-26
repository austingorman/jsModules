const contactPage = require("./contactBuilder")
const domBuilder = require("./domBuilder")


let nameFieldEl = document.querySelector("#nameField");
let phoneFieldEl = document.querySelector("#phoneField");
let addressFieldEl = document.querySelector("#addressField");


const clear = () => {
  const dom = document.getElementById("domElements")
  while (dom.firstChild) {
    dom.removeChild(dom.firstChild)
  }
}

// when the submit button is pressed, this calls the personMaker function from the contact module and passes in the values of the forms
document.getElementById("submitButton").addEventListener("click", function() {
  contactPage(nameFieldEl.value, phoneFieldEl.value, addressFieldEl.value)
  domBuilder()
  // the following clears the fields after the submit button is clicked
  nameFieldEl.value = ""
  phoneFieldEl.value = ""
  addressFieldEl.value = ""
  clear()
  domBuilder()
})




