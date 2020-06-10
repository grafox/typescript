var message = 'Hello';
var sayHello = function (message) { return console.log(message); };
sayHello(message + 1);
function Person(name) {
    this.name = name;
    this.sayHi = function () {
        var _this = this;
        setTimeout(function () {
            console.log('hello my name is ' + _this.name);
        });
    };
}
var person = new Person('Bob');
person.sayHi();
