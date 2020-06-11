var creatHelloMessage = function (name, extra) {
    return "Hello, my name is " + name;
};
var creator = creatHelloMessage;
var creator2 = creatHelloMessage;
var message = creator('Gassan');
var message2 = creator2('Maha');
console.log(message);
console.log(message2);
var hello = creatHelloMessage('Gassan');
console.log(hello);
