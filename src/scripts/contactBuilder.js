const myDatabase = require("./database.js")


// const idGenerator = () => {
//   for(i = 0; i < myDatabase.contactList.length; i++){
//     let id = i
//     return id
//   }
// }

const contactMaker =  (firstName, phoneNum, homeAddress) => {
  myDatabase.contactList.push( {
      Name: firstName,
      Phone: phoneNum,
      Address: homeAddress,
      // id: idGenerator()
    })
  myDatabase.saveDatabase(myDatabase.contactList, "Contacts")
  }

module.exports = contactMaker