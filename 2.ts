// shorthand object creation
function buildPersonData({ firstname, lastname, address}){
    return `${firstname} 
            ${lastname}
            ${address}`
}

const firstname='Fox',
      lastname='Pro',
      address= 'Iraq'

const personData = {
    firstname,
    lastname,
    address
}

buildPersonData(personData);