function buildMessage(message:string):never{
    throw new Error("Message not available");
}
let newMessage = buildMessage("Hello World !");
//
let newCounter:number = newMessage;
let str:string = newMessage;
// I cannot asign newMessage because is never 
console.log(newMessage);

function buildMessage2(message:string):void{
    alert("Message not available");
}
