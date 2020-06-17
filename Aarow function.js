//Aarow function
var message1 = 'Hello';
var sayHello2 = function (message1) { return console.log(message1); };
sayHello2(message + 1);
function Person(name) {
    this.name = name;
    this.sayHi = function () {
        var _this = this;
        setTimeout(function () {
            console.log("hello my name\n         \n         is " + _this.name);
        }, 1000);
    };
}
var person1 = new Person('Bob');
person1.sayHi();
//# sourceMappingURL=Aarow function.js.map