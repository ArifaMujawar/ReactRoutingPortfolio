

class Person {
    constructor(name='Anonymous' , age= 0){
        this.name = name;
        this.age = age;
    }
    getDescription () {
        return `${this.name} is ${this.age} year(s) old.`;
    }
    getGreeting () {
        return `Hello, I'm ${this.name}.`;
    }
}


class Traveler extends Person{
    constructor(name,age,location){
        super(name,age);
        this.location = location;
    }
    hasLocation(){
        return !!this.location;
    }

    getGreeting (){
        let greeting = super.getGreeting();

        if (this.hasLocation()) {
            greeting += `I'm visiting from ${this.location}.`;
        }
        return greeting;
    }
}


const me = new Traveler('Arifa Mujawar',25,'bgm');
console.log(me.getGreeting());

const you = new Traveler('sas');
console.log(you.getGreeting());

