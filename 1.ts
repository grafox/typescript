const message = 'Hello';

const  sayHello = message => console.log(message);

sayHello(message+1)

function Person (name) {
    this.name = name;
    this.sayHi = function(){
        setTimeout(() => {
         console.log(`hello my name
         
         is ${this.name}`)   
        },1000);
    }
}

const person = new Person('Bob');
person.sayHi();