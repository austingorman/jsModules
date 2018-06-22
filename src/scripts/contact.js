let bigOlObject = {
  peopleDatabase: {},
// creates new contacts from the input fields and pushes them into an array inside the peopleDatabase object
  personMaker: (firstName, phoneNum, homeAddress) => {
    let person = {
        Name: firstName,
        Phone: phoneNum,
        Address: homeAddress
      }
    bigOlObject.peopleDatabase[firstName]= person
  }
}
//shares the personMaker function with the contactForm and the peopleDatabase witht the contactcollection module
module.exports = bigOlObject