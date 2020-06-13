//function type and interface
type MessageCreator = (name:string)=>string;
interface interfaceMessageCreator {(name:string):string}

const creatHelloMessage = (name:string,extra?:number):string =>{
    return `Hello, my name is ${name}`
}

const creator:MessageCreator = creatHelloMessage;
const creator2:interfaceMessageCreator = creatHelloMessage;

const message = creator('Gassan');
const message2 = creator2('Maha')

console.log(message);
console.log(message2);
let hello = creatHelloMessage('Gassan');
console.log(hello);