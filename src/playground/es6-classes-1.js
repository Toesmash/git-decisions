class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting(){
        // return 'Hi ' + this.name + ' !';
        return `Hi. I am ${this.name}!`;
    }

    getDescription(){

        return `${this.name} is ${this.age} years old!`;
    }
}

class Student extends Person{
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    getMajor(){
        return !!this.major;
    }

    getDescription(){
        let description = super.getDescription();
        if (this.getMajor()) {
            description = description + ` Their major is ${this.major}.`;
        }
        return description;
    }
}


class Traveler extends Person {
    constructor(name,age,location){
        super(name,age);
        this.location = location;

    }

    getLocation(){
        return !!this.location;
    }
 
    getGreeting(){
        let greeting = super.getGreeting();
        if(this.getLocation()) {
            greeting += ` I'm visiting from ${this.location}`;
        }

        return greeting;
    }

}

const me = new Traveler('Tomas Chvalny', 24, 'Bratislava');
console.log(me.getGreeting());

const other = new Traveler(undefined, undefined, 'Kosice');
console.log(other.getGreeting());
