
//Aarow function
const message1 = 'Hello';

const  sayHello = message1 => console.log(message1);

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

const person1 = new Person('Bob');
person1.sayHi();