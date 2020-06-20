//Aarow function
const message1 = 'Hello';
const  sayHello2 = (message1: string) => console.log(message1);
sayHello2(message+1)

function Person (name:string) {
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