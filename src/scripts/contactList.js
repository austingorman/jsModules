const contactPage = require("./contact")

// an empty object to store an array of new contacts
const peopleDatabase = {}

// shares peopleDatabase with the contact page so i can store the array of people in it
// shares peopleDatabase with contactCollection to store it in local storage
module.exports = peopleDatabase

