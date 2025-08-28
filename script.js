// console.log("tested");

// console.log("Hello from the terminal!");

// const person = [
//   {
//     id: 1,
//     name: "test1",
//     id: 2,
//     name: "test2",
//   },
// ];
// console.log(person);

// const answer1 = prompt(
//   "What is the main component of a computer?"
// ).toLowerCase();
// const correct_answer1 = "cpu";
// if (answer1 === correct_answer1) {
//   console.log("Correct!");
// } else {
//   console.log("Incorrect!");
// }

// const percent = Math.round((correct_answer1.length / answer1.length) * 100);
// console.log(`You got ${percent}% of the answer correct!`);

// const guess = Number(prompt("guess the number (0-100)"));
// if (guess > target) {
//   console.log("Too high!");
// } else if (guess < target) {
//   console.log("Too low!");
// } else {
//   console.log("Correct!");
// }
// const percent = Math.round((correct_answer1.length / answer1.length) * 100);
// console.log(percent);

// const fruits = ["apple", "banana", "cherry", "date"];
// // const resultFruits = fruits[0];
// // console.log(resultFruits);
// console.log(fruits.at(-1)); // 'date'        -> Last element
// console.log(fruits.at(-2)); // 'date'        -> Last element
// console.log(fruits.at(-2)); // 'date'        -> Last element

// const happy = "happy";
// if (happy === "happy") {
//   console.log("yes, it is happy");
// } else {
//   console.log("no, it is  not happy ");
// }

// const resultpass = 91;
// if (resultpass > 90) {
//   console.log("excellent");
// } else if (resultpass > 80) {
//   console.log("good");
// } else {
//   console.log("fair");
// }

// const names = ["Alice", "Bob", "Charlie"];
// const allAreStrings = names.every((name) => typeof name === "string");
// console.log(allAreStrings);

// const wallpaper = new Array(5);
// const result = wallpaper.fill(0);
// console.log(result);

// const numbers = [1, 2, 3, 4, 5];

// const result = numbers.fill(1, 3, 4);
// console.log(result);

// const numbers = [5, 12, 8, 20, 3];
// const filtered = numbers.filter((num) => num > 10);
// console.log(filtered);

// const numbers = [5, 12, 8, 20, 3];
// const filtered = numbers.filter((num) => num > 10);
// console.log(filtered);

// const names = ["Alice", "Bob", "Amanda", "Charlie"];
// const aNames = names.filter((name) => name.startsWith);
// console.log(aNames);

// find()	Returns the value of the first element in an array that pass a test
// const numbers = [4, 9, 16, 25, 2];
// const findResult = numbers.find(function (num) {
//   return num > 10;
// });
// console.log(findResult);

// const numbers = [4, 9, 16, 25, 2];
// const firstMatch = numbers.find((num) => num > 10);
// console.log(firstMatch);

// const users = [
//   { name: "Alice", age: 22 },
//   { name: "Bob", age: 17 },
//   { name: "Charlie", age: 19 },
// ];
// const minor = users.find((user) => user.age < 18);
// console.log(minor);

// const numbers = [1, 2, 2, 3, 4, 4, 5, 1, 6];
// console.log(numbers);

// const resultNumbers = numbers.filter((val) => val > 5);
// console.log(resultNumbers)
//

// const uniqueWithSet = [...new Set(numbers)];
// console.log(uniqueWithSet);

// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }
// console.log(sum(2)(3)(4));

// const sum = (a) => (b) => (c) => a + b + c;
// console.log(sum(2)(3)(4));

// Generate a random number between 100000 and 999999 (inclusive)
//   const otp = Math.floor(100000 + Math.random() * 900000);
//   return otp.toString(); // return as string to preserve leading zeros (if needed)
// }

// console.log("Your OTP is:", otp);

// function generateOTP() {
//   const otp = Math.floor(100000 + Math.random() * 900000);
//   return otp.toString(); // return as string to preserve leading zeros (if needed)
// }
// const otp = generateOTP();
// console.log("Your OTP is:", otp);
