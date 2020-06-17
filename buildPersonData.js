export function buildPersonData(_a) {
    var firstname = _a.firstname, lastname = _a.lastname;
    var address = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        address[_i - 1] = arguments[_i];
    }
    return firstname + " \n            " + lastname + "\n            " + address;
}
//# sourceMappingURL=buildPersonData.js.map