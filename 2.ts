// Array Spread Operator
function buildPersonData({ firstname, lastname}, address=['']){
    return `${firstname} 
            ${lastname}
            ${address}`;
}

const partialAddress = ["Street Name","Street Number",""];

const firstname='Fox',
      lastname='Pro'
      

const personData = {
    firstname,
    lastname,
    
}

const address = [...partialAddress,'Iraq'];
buildPersonData(personData,address);