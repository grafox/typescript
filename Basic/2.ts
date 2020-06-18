// REST Operator
import {buildPersonData} from "./buildPersonData"

const partialAddress = ["Street Name","Street Number","P O Box"];
const firstname='Fox',
      lastname='Pro'
const personData = {
    firstname,
    lastname,
}
const address = [...partialAddress,'Iraq'];
console.log(buildPersonData(personData,address));
