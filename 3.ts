const message:string = 'Hello';
const counter:number = 1.2;
console.log(0.2+0.4);
const messageRead = false;
// object type and type definition
interface HasName {
    firstName?:string,
    lastName:string
};
type HasAddress = {
    address:string
}
type Person = {
    name:HasName,
    address?:HasAddress
}
let person:Person = {
    name: {
        firstName:'',
        lastName:'',
    }

}
