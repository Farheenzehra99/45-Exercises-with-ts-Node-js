// Q.21:- They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

// Data Type Of Person Object
interface person {
    name: string,
    age: number,
    nationality: string,
    student: boolean,
}

//  Person Object
let person:person = {
    name:"Qaisar",
    age: 40 ,
    nationality: "Pakistani",
    student: false,
}
// print Person
console.log(person);

// Datatype Of Car object
interface car{
    maker: string,
    color: string,
    automatic:boolean,
}

// Car Object
let car = {
    maker:"Toyota",
    color: "Black",
    automatic: true
}
// Print car
console.log(car);