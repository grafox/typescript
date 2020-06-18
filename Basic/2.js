var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// REST Operator
import { buildPersonData } from "./buildPersonData";
var partialAddress = ["Street Name", "Street Number", "P O Box"];
var firstname = 'Fox', lastname = 'Pro';
var personData = {
    firstname: firstname,
    lastname: lastname,
};
var address = __spreadArrays(partialAddress, ['Iraq']);
console.log(buildPersonData(personData, address));
//# sourceMappingURL=2.js.map