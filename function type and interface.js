var creatHelloMessage = function (name, extra) {
    return "Hello, my name is " + name;
};
var creator = creatHelloMessage;
var creator2 = creatHelloMessage;
var message0 = creator('Gassan');
var message2 = creator2('Maha');
console.log(message0);
console.log(message2);
var hello = creatHelloMessage('Gassan');
console.log(hello);
//# sourceMappingURL=function type and interface.js.map