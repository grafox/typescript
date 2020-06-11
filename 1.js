var message = 'Hello';
var sayHello = function (message) { return console.log(message); };
sayHello(message + 1);
function Person(name) {
    this.name = name;
    this.sayHi = function () {
        var _this = this;
        setTimeout(function () {
            console.log("hello my name\n         \n         is " + _this.name);
        }, 1000);
    };
}
var person = new Person('Bob');
person.sayHi();
