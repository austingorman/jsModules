// connects to the contactList module so i can access the peopleDatabase object
const contactList = require("./contactList")

// creates an empty array 
contactList.Contact = []

// creates new contacts from the input fields and pushes them into an array inside the peopleDatabase object
let personMaker = (firstName, phoneNum, homeAddress) => {
  let person = {
      Name: firstName,
      Phone: phoneNum,
      Address: homeAddress
    }
  contactList.Contact.push(person)
}

personMaker("austin", "238-234-2134", "232 Dog Drive")

// shares the personMaker function with the contactForm module
module.exports = personMaker

// sends the array into the peopleDatabase object
module.exports = contactList.Contact

