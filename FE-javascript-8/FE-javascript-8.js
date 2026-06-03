// JavaScript Array DSA Roadmap
// let arr = [10, 20, 30];
// console.log(arr);
// arr.push(40);
// console.log("push", arr);
// arr.pop(); // removes
// console.log("removes", arr);
// arr.unshift(5);
// console.log("unshift", arr);
// arr.shift();
// console.log("shift", arr);

// let arr = [1, 2, 3, 4, 5];
// console.log("first element", arr[0]);
// console.log("last element", arr.at(-1));
// console.log("length of array", arr.length);

// let arr = [10, 20, 30];
// arr.push(40);
// console.log("add 40 at end", arr);
// arr.unshift(5);
// console.log("add 5 at start", arr);
// arr.pop();
// console.log("remove last element", arr);
// arr.shift();
// console.log("remove first element", arr);
// SEARCHING AN ARRAYS
// let arr = [10, 20, 30, 20, 40];
// console.log("index of 20", arr.indexOf(20)); // returns first index of 20
// console.log("last index", arr.lastIndexOf(20));
// console.log("includes 20", arr.includes(20)); // returns true if 20 is present in array
// console.log(
//   "find index of 20 using find",
//   arr.find((element) => element >= 20),
// ); // returns first index of 20
// console.log(
//   "find index of 20 using findIndex",
//   arr.findIndex((element) => element >= 20),
// );

// looping through arrays
// let arr = [1, 2, 3, 4, 5];
// arr.forEach((element, index) => console.log("forEach", element, index));
// let doubled = arr.map((val) => val * 2);
// console.log("doubled array using map", doubled);
// let evenNumbers = arr.filter((val) => val % 2 === 0);
// console.log("even numbers using filter", evenNumbers);
// let greaterNumber = arr.filter((val) => val > 4);
// console.log("greater number 4", greaterNumber);

// important dsa methods these are very useful for DSA
let arr = [10, 2, 5, 1];
// console.log("original array", arr);
// console.log(
//   "sort array",
//   arr.sort((a, b) => a - b),
// );
// let reducedValue = arr.reduce(
//   (accmulator, currentValue) => accmulator + currentValue,
//   0,
// );
// console.log("reduced value", reducedValue);

// let max = arr.reduce((max, currentValue) => {
//   return currentValue > max ? currentValue : max;
// }, arr[0]);
// console.log("max value", max);
