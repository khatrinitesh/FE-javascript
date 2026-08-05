// task 1 create variables - Create one variable for each primitive type:
// const userName = "Hello";
// const age = 123;
// const isLoggedIn = true;
// const largeNumber = 123n;
// const uniqueId = Symbol("id");
// let notAssigned;
// const emptyValue = null;
// Task 2: Print type of each value Use typeof and print the output:
// console.log(typeof userName); // string
// console.log(typeof age); // number
// console.log(typeof isLoggedIn); // boolean
// console.log(typeof largeNumber); // bigint
// console.log(typeof uniqueId); // symbol
// console.log(typeof notAssigned); // undefined
// console.log(typeof emptyValue); // object
// Task 3: Write a function Create checkType(value) that returns the type of any value.
// function checkType(value) {
//   console.log(typeof value);
// }
// checkType(userName); // string
// checkType(age); // number
// checkType(isLoggedIn); // boolean
// checkType(largeNumber); // bigint
// checkType(uniqueId); // symbol
// checkType(notAssigned); // undefined
// checkType(emptyValue); // object
// Task 4: Handle null typeof null returns "object" due to an old JavaScript behavior. Update checkType() so it correctly returns "null" for null.
// Task 1: Arithmetic Operators
// const a = 20;
// const b = 10;
// console.log(a + b); // Addition
// console.log(a - b); // Subtraction
// console.log(a * b); // Multiplication
// console.log(a / b); // Division
// console.log(a % b); // Modulus
// Task 2: Assignment Operators
// let score = 10;
// score += 5;
// score -= 2;
// score *= 3;
// score /= 2;
// console.log(score); // Output the final score
// Task 3: Comparison Operators
// const firstNumber = 10;
// const secondNumber = "10";
// console.log(firstNumber == secondNumber); // true (loose equality)
// console.log(firstNumber === secondNumber);
// console.log(firstNumber != secondNumber); // false (loose inequality)
// console.log(firstNumber !== secondNumber);
// console.log(firstNumber > 5);
// console.log(firstNumber <= 5);
// Task 4: Logical Operators
// const isLoggedIn = true;
// const isAdmin = false;
// console.log(isLoggedIn && isAdmin); // false (AND)
// console.log(isLoggedIn || isAdmin); // true (OR)
// console.log(!isLoggedIn); // false (NOT)
// Task 4: Ternary Operators
// const age = 10;
// const result = age >= 18 ? "Adult" : "Minor";
// console.log(result); // Output: Minor
// Task 6: Create a Function Create a function that checks whether a user can access an admin page.
// function canAccessAdminPage(isLoggedIn, isAdmin, age) {
//   return isLoggedIn && isAdmin && age >= 18;
// }
// console.log(canAccessAdminPage(true, true, 21)); // true
// console.log(canAccessAdminPage(true, false, 20)); // false
// console.log(canAccessAdminPage(false, true, 16)); // false
// Here are useful JavaScript Array DSA practice questions, ordered from easy to hard:
// maximum
// function findMax(arr) {
//   return Math.max(...arr);
// }
// console.log(findMax([1, 2, 3, 4, 5])); // Output: 5
// minimum
// function findMin(arr) {
//   return Math.min(...arr);
// }
// console.log(findMin([1, 2, 3, 4, 5])); // Output: 1
// sum all array elements
// function sumArray(arr) {
//   return arr.reduce((acc, curr) => acc + curr, 0);
// }
// console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
// reverse an array
// function reverseArray(arr) {
//   return arr.reverse((a, b) => a - b);
// }
// console.log(reverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]
// even numbers
// function findEvenNumbers(arr) {
//   return arr.filter((num) => num % 2 === 0);
// }
// console.log(findEvenNumbers([1, 2, 3, 4, 5])); // Output: [2, 4]
// check if an element exists in an array
// function elementExists(arr, element) {
//   return arr.includes(element);
// }
// console.log(elementExists([1, 2, 3, 4, 5], 3)); // Output: true
// function findIndexElement(arr, element) {
//   return arr.indexOf(element);
// }
// console.log(findIndexElement([1, 2, 3, 4, 5], 3));
// console.log(
//   findIndexElement(
//     ["banana", "grape", "pineapple", "cherry", "strawberry"],
//     "grape",
//   ),
// );
// remove duplicates from an array
// function removeDuplicates(arr) {
//   return [...new Set(arr)];
// }
// console.log(removeDuplicates([1, 2, 3, 4, 5, 1, 2, 3])); // Output: [1, 2, 3, 4, 5]
// console.log(
//   removeDuplicates([
//     "banana",
//     "grape",
//     "pineapple",
//     "cherry",
//     "strawberry",
//     "grape",
//   ]),
// ); // Output: ["banana", "grape", "pineapple", "cherry", "strawberry"]
// count even numbers
// function countEvenNumbers(arr) {
//   return arr.filter((num) => num % 2 === 0).length;
// }
// function countOldNumbers(arr) {
//   return arr.filter((num) => num % 2 !== 0).length;
// }
// console.log(countEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// console.log(countOldNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// find second largest number
