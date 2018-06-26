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
      if (databaseString) {
        return JSON.parse(databaseString)
          } else {
            return contactList
          }
  }
}

// saveDatabase(contact, "Contacts")

module.exports = bigOlObject