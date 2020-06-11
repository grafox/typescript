// Array Spread Operator
function buildPersonData(_a, address) {
    var firstname = _a.firstname, lastname = _a.lastname;
    if (address === void 0) { address = ['']; }
    return firstname + " \n            " + lastname + "\n            " + address;
}
var partialAddress = ["Street Name", "Street Number", ""];
var firstname = 'Fox', lastname = 'Pro';
var personData = {
    firstname: firstname,
    lastname: lastname
};
var address = partialAddress.concat(['Iraq']);
buildPersonData(personData, address);
