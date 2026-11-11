// Primitive data types 
// 1. String
// 2. Number
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. BigInt
// 7. Symbol

// Non-primitive data types 
// 1. Objects
// 2. Arrays
// 3. Functions

// Concatenation
let firstName = "Ayobami";

let lastName = "Adeleke";

let fullName = firstName + " " + lastName

console.log(fullName);

// Templates literals
let name = "Ayobami";
let age = 16;

console.log(`My name is ${name} and I am ${age} years old.`);

let student = "Ayobami";
let score =  '353';

console.log(`Congratulations ${student}, your JAMB score is ${score}.`);

// BigInt 
let bigNumber = 123456789n;

console.log(bigNumber);

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 === id2);

// Non-primitive Data Types

// Objects : Allows us to store related infomation together using key-value pairs
let student = {
    name: "Ayobami",
    age: 16,
    school: "SQI",
    course: "Web Development",
}




