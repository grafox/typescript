function buildPersonData(_a) {
    var firstname = _a.firstname, lastname = _a.lastname, address = _a.address;
    return firstname + " \n            " + lastname + "\n            " + address;
}
var firstname = 'Fox', lastname = 'Pro', address = 'Iraq';
var personData = {
    firstname: firstname,
    lastname: lastname,
    address: address
};
buildPersonData(personData);
