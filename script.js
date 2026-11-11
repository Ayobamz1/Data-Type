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

let studentName = "Ayobami";
let score =  '353';

console.log(`Congratulations ${studentName}, your JAMB score is ${score}.`);

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
    course: "Web Development"
};

console.log(student.name);
console.log(student.age);
console.log(student.school);
console.log(student.course);

// Arrays : Allows you to store multiple values inside one variable
let student1 = "John";
let student2 = "James";
let student3 = "Juda";
let student4 = "Joses";
let student5 = "Johnson";

// But Array will allow you to write it like this 
let students = [
    "John",
    "James",
    "Juda",
    "Joses",
    "Johnson",
];

console.log(students[0]);
console.log(students[1]);
console.log(student[2]);




