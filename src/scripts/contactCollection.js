const contactList = require("./contactList")

const saveDatabase = function (databaseObject, localStorageKey) {
  /*
      Convert the Object into a string.
  */
  const stringifiedDatabase = JSON.stringify(databaseObject)

  /*
      Create a key in local storage, and store the string
      version of your inventory database as the value
  */
  localStorage.setItem(localStorageKey, stringifiedDatabase)
}

const loadDatabase = function (localStorageKey) {
  // Get the string version of the database
  const databaseString = localStorage.getItem(localStorageKey)

  // Use JSON.parse() to convert the string back into an object
  return JSON.parse(databaseString)
}

saveDatabase(contactList, "People")


