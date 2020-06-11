// REST Operator
var buildPersonData_1 = require("./buildPersonData");
var partialAddress = ["Street Name", "Street Number", "P O Box"];
var firstname = 'Fox', lastname = 'Pro';
var personData = {
    firstname: firstname,
    lastname: lastname
};
var address = partialAddress.concat(['Iraq']);
console.log(buildPersonData_1.buildPersonData(personData, address));
