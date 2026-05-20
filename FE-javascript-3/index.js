// console.log("hello world");

// variables
// let name = "Nitesh";
// let age = 22;
// let isStudent = true;
// console.log(name, age, isStudent);

// data types
// let username = "Admin";
// let age = 25;
// let isLoggedIn = true;
// let marks = [80, 90, 100];
// let user = { name: "John" };
// let value = null;
// let data;
// console.log("DataType username -", typeof username);
// console.log("DataType age -", typeof age);
// console.log("DataType isLoggedIn -", typeof isLoggedIn);
// console.log("DataType marks -", typeof marks);
// console.log("DataType user -", typeof user);
// console.log("DataType value -", typeof value);
// console.log("DataType data -", typeof data);
// console.log("DataType username -", typeof username);

// operators
// let a = 10;
// let b = 20;
// console.log("addition", a + b);
// console.log("subtraction", a - b);
// console.log("multiply", a * b);
// console.log("division", a / b);
// console.log("modulus", a % b);

// if statements - login credentials check
// example login check
// let username = "admin";
// let password = "password123";
// if (username === "admin" && password === "password123") {
//   console.log("Login successful");
// } else {
//   console.log("Invalid Credentials");
// }

// logical operators - and &&
// let age = 20;
// let hasID = true;
// if (age >= 18 && hasID) {
//   console.log("You can enter the club");
// }
// let isAdmin = false;
// let isOwner = true;
// if (isAdmin || isOwner) {
//   console.log("You have access to the dashboard");
// } else {
//   console.log("You do not have access to the dashboard");
// }
// not !
// let isBlocked = false;
// if (!isBlocked) {
//   console.log("User Active");
// } else {
//   console.log("User Blocked");
// }

// while loop
// example count 1 to 5
// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// for loop - example table generator
// for (let i = 1; i <= 10; i++) {
//   console.log("2 x", +i + " = " + 2 * i);
// }

// functions  -resuable block of code
// function sayHello(name) {
//   console.log("hello " + name);
// }
// sayHello(" NItesh");
// sayHello(" wonderful");
// sayHello(" brilliant");

// function parameters
// function greet(name) {
//   console.log("hello" + " " + name);
// }
// greet("nitesh");
// greet("sameet");

// function returns
// function add(a, b) {
//   return a + b;
// }
// let result = add(20, 30);
// console.log("addition", result);

// arrays - arraystores multiple values
// let fruits = ["Apple", "Banana", "Mango"];
// console.log("fruits", fruits[0]);
// console.log("fruits", fruits[1]);
// console.log("fruits", fruits[2]);

// let marks = 34;
// let result = "";
// if (marks >= 90) {
//   result = "A+";
// } else if (marks >= 80) {
//   result = "B+";
// } else if (marks >= 60) {
//   result = "B";
// } else if (marks >= 35) {
//   result = "C";
// } else {
//   result = "failed";
// }
// console.log(result);

// objects - store related data
// let student = {
//   name: "Nitesh",
//   age: 22,
//   course: "JavaScript",
// };
// console.log(student.name);
// console.log(student.age);
// console.log(student.course);

// iterate over arrays  = for loop
// let fruits = ["Apple", "Banana", "Mango"];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(i, ")", fruits[i]);
// }

// forEach() method cleaner way to loop array
// let fruits = ["Apple", "Banana", "Mango"];
// fruits.forEach(function (item) {
//   console.log(item);
// });
// arrow function
// fruits.forEach((item, index) => {
//   console.log(`${index} ${item}`);
// });
