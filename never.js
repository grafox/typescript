function buildMessage(message) {
    throw new Error("Message not available");
}
var newMessage = buildMessage("Hello World !");
//
var newCounter = newMessage;
var str = newMessage;
// I cannot asign newMessage because is never 
console.log(newMessage);
function buildMessage2(message) {
    alert("Message not available");
}
