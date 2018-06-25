const contact = require("./contactBuilder.js")

const bigOlObject = {

  contactList: [],

  saveDatabase: (databaseObject, localStorageKey) => {
  /*
      Convert the Object into a string.
  */
  const stringifiedDatabase = JSON.stringify(databaseObject)
      // Create a key in local storage, and store the string
      // version of your inventory database as the value
  localStorage.setItem(localStorageKey, stringifiedDatabase)
  },

  loadDatabase: (localStorageKey) => {
    // Get the string version of the database
    const databaseString = localStorage.getItem(localStorageKey)

    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseString)
  }
}

// saveDatabase(contact, "Contacts")

module.exports = bigOlObject