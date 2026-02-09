/*
  JavaScript ES6 & Async Concepts
  Clean, readable code for GitHub
*/

// ================================
// 1. var, let, const
// ================================

var x = 10; // redeclare + reassign (function scoped)
let y = 20; // reassign only (block scoped)
const z = 30; // neither redeclare nor reassign

{
  let y = 50; // block scope
}
// console.log(y); // 20

// ================================
// 2. const with Arrays (Reference)
// ================================

const arr = [10, 20, 30];
arr.push(40);
arr[4] = 50;
console.log(arr);

// arr = [1, 2]; ❌ Not allowed (reassignment)

// ================================
// 3. Functions
// ================================

// Anonymous Function
const show1 = function () {
  console.log("Anonymous Function");
};

// Arrow Function
const show2 = () => console.log("Arrow Function");
const add = (a, b) => a + b;

show1();
show2();
console.log(add(2, 3));

// Returning object from arrow function
const getUser = () => ({ name: "Test" });
console.log(getUser());

// ================================
// 4. Class & Objects
// ================================

class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }
}

const students = [
  new Student("Aashi", 50),
  new Student("Riya", 60),
  new Student("Srishti", 90),
  new Student("Rahul", 30),
  new Student("Siya", 25)
];

console.log(students);

// ================================
// 5. Utility Functions
// ================================

const oddEven = (num) => {
  console.log(num % 2 === 0 ? "Even" : "Odd");
};

oddEven(5);

const greaterTwo = (a, b) => (a > b ? a : b);
console.log(greaterTwo(5, 8));

const greaterThree = (a, b, c) =>
  a > b ? (a > c ? a : c) : (b > c ? b : c);

console.log(greaterThree(3, 6, 8));

// ================================
// 6. Calculator
// ================================

const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

// ================================
// 7. this keyword (Important)
// ================================

const user = {
  name: "Abhishek",
  age: 40,
  welcome() {
    console.log(this.name, "welcome to ES6");
  }
};

user.welcome();

// ================================
// 8. Lexical Scope
// ================================

let A = 5; // global

function outer() {
  let b = 6; // lexical

  function inner() {
    let c = 7; // local
    console.log(A, b, c);
  }

  inner();
}

outer();

// ================================
// 9. Destructuring
// ================================

const array = [10, 20, 30];
const [a1, b1, c1, d1] = array;
const [x1, ...y1] = array;
console.log(a1, b1, c1, d1, x1, y1);

const person = {
  name: "Aashi",
  age: 20,
  key: "SSS"
};

function show({ name, age }) {
  console.log("NAME:", name, "AGE:", age);
}

show(person);

// ================================
// 10. Spread & Rest
// ================================

const employee = {
  name: "Aashi",
  deptId: "CS202",
  salary: 20000,
  eID: 5001,
  designation: "Professor"
};

const updatedEmployee = { ...employee, designation: "Assistant" };
console.log(updatedEmployee);

// ================================
// 11. Callback (Async)
// ================================

function bakeCake(callback) {
  console.log("1. Cake is in Oven");

  setTimeout(() => {
    console.log("2. Cake is baked");
    callback();
  }, 2000);
}

bakeCake(() => {
  console.log("3. Now I can eat the cake");
});

// ================================
// 12. Promise Example
// ================================

function kashmirTravel(petrol) {
  return new Promise((resolve, reject) => {
    console.log("Checking petrol availability...");

    setTimeout(() => {
      if (petrol >= 100) {
        resolve("Yes, you can go to Kashmir 🚗");
      } else {
        reject("No, not enough petrol ❌");
      }
    }, 2000);
  });
}

kashmirTravel(50)
  .then((msg) => {
    console.log(msg);
    console.log("Let's go!");
  })
  .catch((err) => {
    console.log(err);
    console.log("Trip cancelled");
  });
