const loadDatabase = require("./database.js")

let domBuilder = () => {
  loadDatabase.contactList.forEach(contact => {
    const contactHolder = document.querySelector("#domElements")
    const youEll = document.createElement("ul")
    const ellEye = document.createElement("li")

    ellEye.textContent = `${contact.Name} ${contact.Phone} ${contact.Address}`
    youEll.appendChild(ellEye)
    contactHolder.appendChild(youEll)
  })
}
module.exports = domBuilder
