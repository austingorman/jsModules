const contactList = require("./contactList")


let person = {
    name: "",
    phone: "",
    address: ""
  }

contactList.Contact = []

let personMaker = (firstName, phoneNum, homeAddress) => {
  person.name = firstName
  person.phone = phoneNum
  person.address = homeAddress
  contactList.Contact.push(person)
}

personMaker("Austin", "234-234-2343", "838 Something Ave")

module.exports = contactList.Contact
