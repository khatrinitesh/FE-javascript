// Basic primitive types Task: Declare one variable for each primitive type and print its value and type.
// const userName = "Nitesh";
// const age = 28;
// const isDeveloper = true;
// const bigNumber = 12345678901234567890n;
// const uniqueId = Symbol("id");
// let userAddress;
// const selectedProduct = null;
// console.log("username", userName);
// console.log("age", age);
// console.log("isDeveloper", isDeveloper);
// console.log("bigNumber", bigNumber);
// console.log("uniqueId", uniqueId);
// console.log("userAddress", userAddress);
// console.log("selectedProduct", selectedProduct);
// Create a string containing your full name
// const fullName = "Nitesh Khatri";
// console.log("full name", fullName);
// Find the length of a string.
// const text = "how are you doing?";
// console.log("length of string", text.length);
// Convert a string to uppercase.
// console.log("javascrpipt".toUpperCase());
// Reverse a string.
// const text = "how are you doing?";
// console.log(text.split("").reverse().join(""));
// Check whether a string is a palindrome.
// function isPalindrome(str) {
//   const reversedStr = str.split("").reverse().join("");
//   return str === reversedStr;
// }
// console.log(isPalindrome("racecar")); // true
// console.log(isPalindrome("hello")); // false
// number exercises
// Check whether a number is even or odd.
// function isEvenOrOdd(n) {
//   return n % 2 === 0 ? "Even" : "Odd";
// }
// isEvenOrOdd(5); // Odd
// isEvenOrOdd(10); // Even
// Find the largest of three numbers.
// function largestOfThree(a, b, c) {
//   return Math.max(a, b, c);
// }
// console.log(largestOfThree(5, 10, 3)); // 10
// console.log(largestOfThree(15, 7, 20)); // 20
// Calculate the factorial of a number.
// function factorial(n) {
//   let result = 1;
//   for (let i = 0; i < n; i++) {
//     result *= i + 1;
//   }
//   return result;
// }
// console.log(factorial(5)); // 120
// Check whether a number is prime.
// function isPrime(n) {
//   if (n < 2) return false;
//   for (let i = 2; i < Math.sqrt(n); i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }
// console.log(isPrime(7)); // true
// console.log(isPrime(10)); // false
// Find the sum of the digits of a positive integer.
// function digitSum(n) {
//   return String(n)
//     .split("")
//     .reduce((sum, digit) => sum + Number(digit), 0);
// }
// console.log(digitSum(12345)); // 15
// console.log(digitSum(9876)); // 30
// Boolean exercises
// Task 1: Check whether a person is eligible to vote (age 18 or older).

// Task 2: Check whether a number is positive.

// Task 3: Check whether a user has entered both a username and password.

// Task 4: Predict the output of these expressions.
// console.log(Boolean(0));
// console.log(Boolean(1));
// console.log(Boolean(""));
// console.log(Boolean("hello"));
// console.log(Boolean(null));
// console.log(Boolean(undefined));

// const canVote = (age) => (age >= 18 ? "yes" : "no");
// console.log(canVote(20)); // yes
// console.log(canVote(16)); // no
// const isPositive = (num) => (num > 0 ? "positive" : "not positive");
// console.log(isPositive(5)); // positive
// console.log(isPositive(-3)); // not positive
// const isLoginValid = (username, password) =>
//   username && password ? "valid" : "invalid";
// console.log(isLoginValid("user1", "pass123")); // valid
// console.log(isLoginValid("user2", "")); // invalid

// BigInt, Symbol, undefined and null
// console.log(10n + 20n);
// console.log(Symbol("id") === Symbol("id"));
// let result;
// console.log(result);
// const product = null;
// console.log(product);
// console.log(typeof product);
// Task 1 — BigInt: Add two large integers without losing integer precision.
// console.log(12345678901234567890n + 10n);
// // Task 2 — Symbol: Create two symbols with the same description and check whether they are equal.
// console.log(Symbol("id") === Symbol("id"));
// // Task 3 — Undefined: Declare a variable without assigning a value and print it.
// let result;
// console.log(result);
// // Task 4 — Null: Create a variable representing an empty selected product.
// const product = null;
// console.log(product);
// Task 5 — Tricky output: Predict the result of the following.
// function analyzePrimitive(value) {
//   return {
//     value,
//     type: typeof value,
//     isNull: value === null,
//   };
// }
// console.log(analyzePrimitive(42)); // { value: 42, type: 'number', isNull: false }
// console.log(analyzePrimitive("Hello")); // { value: 'Hello', type: 'string', isNull: false }
// console.log(analyzePrimitive(true)); // { value: true, type: 'boolean', isNull: false }
// console.log(analyzePrimitive(12345678901234567890n)); // { value: 12345678901234567890n, type: 'bigint', isNull: false }
// console.log(analyzePrimitive(Symbol("id"))); // { value: Symbol(id), type: 'symbol', isNull: false }
// let undefinedVar;
// console.log(analyzePrimitive(undefinedVar)); // { value: undefined, type: 'undefined', isNull: false }
// const nullVar = null;
// console.log(analyzePrimitive(nullVar)); // { value: null, type: 'object', isNull: true }

// Here is a practical JavaScript Array reference with examples, output, and assignments. Learn each method by running the code in your browser console or Node.js.
// Create an array An array stores multiple values in a single variable. Array indexes start at 0.
// const fruits = ["Apple", "Banana", "Mango", "Orange"];
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits.length);
// console.log(fruits);
// Create arrays: [], new Array(), Array.of() and Array.from()
// const a = [10, 20, 30];
// console.log(a);
// const b = new Array(3);
// console.log(b);
// const c = Array.of(3);
// console.log(c);
// const d = Array.from("cat");
// console.log(d);
// console.log(Array.isArray(a));
// console.log(Array.isArray(b));
// console.log(Array.isArray(c));
// console.log(Array.isArray(d));
// console.log(Array.from(fruits));
// console.log(Array.isArray(fruits));
// console.log(Array.of(fruits));
// console.log(fruits.reverse());
// const sortArrangeAsc = fruits.sort((a, b) => a.localeCompare(b));
// console.log(sortArrangeAsc);
// const sortArrangeDsc = fruits.sort((a, b) => b.localeCompare(a));
// console.log(sortArrangeDsc);
// Access, search and check elements
// const numbers = [10, 20, 30, 40, 30];
// console.log(numbers.at(-1));
// console.log(numbers.includes(20));
// console.log(numbers.indexOf(30));
// console.log(numbers.lastIndexOf(30));
// console.log(numbers.findIndex((num) => num > 25));
// console.log(numbers.findLast((num) => num > 25));
// console.log(numbers.some((num) => num > 25));
// console.log(numbers.every((num) => num > 0));
// Transform and filter arrays These methods are especially important for DSA and React development.
// const numbers = [1, 2, 3, 4, 5];
// map transform every element
// console.log(numbers.map((n) => n * 2));
// filter select matching elements
// console.log(numbers.filter((n) => n % 2 === 0));
// flattern nested arrays
// console.log([1, [2, 3], [4, 5]].flat());
// flatMap map then flattern one level
// console.log(numbers.flatMap((n) => [n, n * 2]));
// forEach perform an action for every element
// console.log(numbers.forEach((n) => console.log(n * 2)));

// Remember
// map() returns a new array of transformed values.
// filter() returns a new array containing matching values.
// forEach() is used to perform an action and returns undefined.
// flat() flattens nested arrays by one level by default.
// flatMap() maps each element and flattens the result by one level.
// let fruits = ["Apple", "Banana", "Mango", "Orange"];
// const pushResult = fruits.push("Grapes");
// console.log(pushResult);
// const popResult = fruits.pop();
// console.log(popResult);
// const unshiftResult = fruits.unshift("Strawberry");
// console.log(unshiftResult);
// const shiftResult = fruits.shift();
// console.log(shiftResult);
// const spliceResult = fruits.splice(1, 2, "Pineapple", "Kiwi");
// console.log(spliceResult);
// const a = [10, 20, 30, 40, 50];
// console.log(a.slice(1, 5));
// console.log(a);
// const b = [10, 20, 30, 40];
// b.splice(1, 2);
// console.log(b); // [10, 40]
// const a = [1, 2];
// const b = [3, 4];
// console.log(a.concat(b));
// console.log(a);
// console.log([1, 2, 3, 4].fill(0, 1, 3));
// console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));
// console.log([10, 20, 30].with(1, 99));
// const original = [1, 2, 3];
// console.log(original.toString());

// Reduce, sum and calculate The reduce() method combines array elements into a single result. It is frequently used in coding interview
// const numbers = [10, 20, 30, 40];
// console.log(numbers.reduce((acc, curr) => acc + curr, 0));
// const product = numbers.reduce((a, b) => a * b, 1);
// console.log(product);
// const maximum = numbers.reduce((max, n) => (n > max ? n : max), numbers[0]);
// console.log(maximum);
// console.log(Math.max(...numbers));
// const result = ["A", "B", "C"].reduceRight((acc, value) => acc + value, "");
// console.log(result);

// . Sort and reverse arrays
// const numbers = [40, 5, 100, 25];
// console.log([...numbers].sort((a, b) => a - b));
// const a = [1, 2, 3];
// console.log([...a].reverse());

// const b = [1, 2, 3];
// console.log(b.toReversed());
// console.log(b.toSorted((a, b) => b - a));
// console.log(b.toSpliced(1, 1, 99));
// console.log(b.with(1, 99));

// Convert arrays into strings and iteration objects
// const fruits = ["Apple", "Banana", "Mango"];
// console.log(fruits.join(","));
// console.log(fruits.toString());
// console.log([...fruits.keys()]);
// console.log([...fruits.entries()]);
// console.log(fruits.length);
// console.log(fruits.constructor === Array);
// console.log(Object.getPrototypeOf(fruits) === Array.prototype);

// Find the sum of all array elements
// const numberwise = [1, 2, 3, 4, 5];
// const resultWise = numberwise.reduce((acc, curr) => acc + curr, 0);
// console.log(resultWise); // Output: 15

// // find the lagest number
// const numbers = [10, 20, 30, 40, 50];
// const largestNumber = numbers.reduce(
//   (max, n) => (n > max ? n : max),
//   numbers[0],
// );
// console.log(largestNumber); // Output: 50

// // return only even numbers from an array
// const mixedNumbers = [1, 2, 3, 4, 5, 6];
// const evenNumbers = mixedNumbers.filter((n) => n % 2 === 0);
// console.log(evenNumbers); // Output: [2, 4, 6]

// // reverse an array
// const originalArray = [1, 2, 3, 4, 5];
// const reversedArray = [...originalArray].reverse();
// console.log(reversedArray); // Output: [5, 4, 3, 2, 1]

// // remove duplicate values
// const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
// const uniqueArray = [...new Set(arrayWithDuplicates)];
// console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]

// // count the frequency of each element in an array
// const elements = ["a", "b", "a", "c", "b", "a"];
// const frequency = elements.reduce((acc, curr) => {
//   acc[curr] = (acc[curr] || 0) + 1;
//   return acc;
// }, {});
// console.log(frequency); // Output: { a: 3, b: 2, c: 1 }

// // find the second largest distint number in an array
// const distinctNumbers = [10, 20, 30, 40, 50, 50, 40];
// const secondLargest = [...new Set(distinctNumbers)].sort((a, b) => b - a)[1];
// console.log(secondLargest); // Output: 40

// // move all zeros to the end
// const arrayWithZeros = [0, 1, 0, 3, 12];
// const moveZerosToEnd = (arr) => {
//   const nonZeroElements = arr.filter((n) => n !== 0);
//   const zeroElements = arr.filter((n) => n === 0);
//   return [...nonZeroElements, ...zeroElements];
// };
// console.log(moveZerosToEnd(arrayWithZeros)); // Output: [1, 3, 12, 0, 0]
