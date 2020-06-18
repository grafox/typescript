// & An intersection type combines multiple types into one
interface HasName{
    firstName:string,
    lastName:string
}
interface HasAddress{
    address:string
}
//type Player1 = () | null;

const player1:(HasName & HasAddress) = {firstName:"Gassan",lastName:"Jabbar",address:"Iraq"};

console.log(player1.firstName);

/* let myVar:any;
myVar = undefined;
let myCounter=0;
myCounter = myVar
let str:string;
str=myVar; */