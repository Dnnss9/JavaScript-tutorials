// #1

// // Constructor Function
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }

// const circle = new Circle(10);

// // circle.location = { x:1 };
// // const propertyName = 'location';
// // circle[propertyName] = { x:1 };
// // delete circle['location'];

// for (let key in circle) {
//     if (typeof circle[key] != 'function')
//         console.log(key, circle[key]);
// }

// const keys = Object.keys(circle);
// console.log(keys);

// if ('radius' in circle)
//     console.log('Circle has a radius');


// function Circle(radius) {
//     this.radius = radius;

//     this.defaultLocation = { x: 0, y: 0 };

//     let computeOptimumLocation = function() {
//         // ...
//     }
//     this.draw = function() {
//         computeOptimumLocation(0.1);

//         console.log('draw');
//     };
// }

// const circle = new Circle(10);
// circle.draw;

function StopWatch() {
    let startTime, endTime, running, duration = 0;

    this.start = function() {
        if(running)
            throw new Error('Stopwatch has already started');
        startTime = new Date();
        running = true;
    };

    this.stop = function() {
        if(!running)
            throw new Error('Stopwatch is not started');
        running =  false;
        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime())/1000;
        duration +=seconds;
    };

    this.reset = function() {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };

    Object.defineProperty(this, 'duration', {
        get : function() {return duration;}
    });
}

// class
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return this.firstName +" "+ this.lastName;
    }
}

const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1970');