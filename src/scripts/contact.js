const contactList = require("./contactList")



contactList.Contact = []

let personMaker = (firstName, phoneNum, homeAddress) => {
  let person = {
      Name: firstName,
      Phone: phoneNum,
      Address: homeAddress
    }
  // person.Name = firstName
  // person.Phone = phoneNum
  // person.Address = homeAddress
  contactList.Contact.push(person)
}

personMaker("Austin", "234-234-2343", "838 Something Ave")
personMaker("Anna", "239-929-0202", "99 Dog Street")


module.exports = contactList.Contact
