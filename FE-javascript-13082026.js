const numbers = [10, 25, 30, 15, 40, 50, 20];

// Find the number of elements using length.
// const resultNumlength = numbers.length;
// console.log(resultNumlength);

// Check whether 30 exists using includes().
// const resultIncludes = numbers.includes(30);
// console.log(resultIncludes);

// Find the index of 40 using indexOf().
// const resultIndexOf = numbers.indexOf(40);
// console.log(resultIndexOf);

// Get the last element using at().
// const resultAt = numbers.at(-1);
// console.log(resultAt);

// Create a new array containing only even numbers using filter().
// const resultEvenNumbers = numbers.filter((val) => val % 2 === 0);
// console.log(resultEvenNumbers);

// Create a new array containing the square of every number using map().
// const resultSquareNumbers = numbers.map((val) => val * val);
// console.log(resultSquareNumbers);

// Find the first number greater than 30 using find().
// const resultFind = numbers.find((val) => val > 30);
// console.log(resultFind);

// Find the index of the first number greater than 30 using findIndex().
// const resultFindIndex = numbers.filter((val) => val > 30);
// console.log(resultFindIndex);

// Find the last number greater than 30 using findLast().
// const resultFindLast = numbers.filter((val) => val > 30);
// console.log(resultFindLast);

// Find the index of the last number greater than 30 using findLastIndex().
// const resultFindLastIndex = numbers.filter((val) => val > 30);
// console.log(resultFindLastIndex);

// Check whether every number is greater than 0 using every().
// const resultEvery = numbers.every((val) => val > 0);
// console.log(resultEvery);

// Check whether at least one number is greater than 45 using some().
// const resultSome = numbers.some((val) => val > 45);
// console.log(resultSome);

// Calculate the total using reduce().
// const resultReduce = numbers.reduce((a, b) => a + b, 0);
// console.log(resultReduce);

// Sort the numbers in ascending order using sort().
// const resultSortNumAsc = numbers.sort((a, b) => a - b);
// const resultSortNumDsc = numbers.sort((a, b) => b - a);
// console.log(resultSortNumAsc);
// console.log(resultSortNumDsc);

// Create a reversed copy using toReversed().
// const resultToReversed = numbers.toReversed();
// console.log(resultToReversed);

// Create a sorted copy using toSorted().
// const resultToSorted = numbers.toSorted((a, b) => a - b);
// console.log(resultToSorted);

// Get the first three elements using slice().
// const resultSlice = numbers.slice(0, 3);
// console.log(resultSlice);
// console.log(numbers.slice(2));
// console.log(numbers.slice(1, 4));
// console.log(numbers.slice(0, 3));
// console.log(numbers.slice(-2));
// console.log(numbers.slice());

// Remove the last element using pop().
// const resultRemovePop = numbers.pop();
// console.log(resultRemovePop);
// console.log(numbers);

// Add 100 to the end using push().
// const resultAddPush = numbers.push(500);
// console.log(resultAddPush);
// console.log(numbers);

// Remove the first element using shift().
// const resultRemoveShift = numbers.shift();
// console.log(resultRemoveShift);
// console.log(numbers);

// Remove two elements using splice().
// console.log(numbers);
// const resultSplice = numbers.splice(2, 1);
// console.log(resultSplice);
// console.log(numbers);

// Create a copy using slice().
// console.log(numbers);
// const resultCopySlice = numbers.slice();
// console.log(resultCopySlice);

// Convert the array into a string using join().
// const resultJoin = numbers.join(" - ");
// console.log(resultJoin);

// Check whether a variable is an array using Array.isArray().
// const resultArrayisArray = Array.isArray(numbers);
// console.log(resultArrayisArray);
// console.log(Array.isArray("hello"));
// console.log(Array.isArray(22));
// console.log(Array.isArray(true));
// console.log(Array.isArray([1, 2, 3]));
// console.log(Array.isArray(["a", "b", "c"]));

// const value = 1;
// const result = Boolean(value);
// console.log(result);

// const result = new Boolean(true);
// console.log(result);

// const value = true;
// const result = value.constructor;
// console.log(result);

// toString() Assignment: Convert the boolean value true into a string.
// const value = true;
// console.log(value);
// console.log(typeof value);

// valueOf() Assignment: Get the primitive boolean value from a Boolean object.
// const value = new Boolean(false);
// const result = value.toString();
// console.log(result);
// console.log(typeof result);

// const isLogged = true;
// const isAdmin = new Boolean(false);
// console.log(isLogged);
// console.log(isAdmin);

// JavaScript Date Reference
const result = new Date();
// console.log(result);
// console.log(result.getDate());
// console.log(result.getDay());
// console.log(result.getFullYear());
// console.log(result.getHours());
// console.log(result.getMilliseconds());
// console.log(result.getMinutes());
// console.log(result.getMonth());
// console.log(result.getSeconds());
// console.log(result.getTime());
// console.log(result.getTimezoneOffset());
// console.log(result.getUTCDate());
// console.log(result.getUTCDay());
// console.log(result.getUTCFullYear());
// console.log(result.getUTCHours());
// console.log(result.getMilliseconds());
// console.log(result.getUTCMinutes());
// console.log(result.getUTCMonth());
// console.log(result.getUTCSeconds());
// console.log(Date.now());
// date.setDate(24);
// console.log(date);
// date.setFullYear(2035);
// console.log(date);
// console.log(date.setHours());
// console.log(date);
// setMonth() Assignment: Change the month to December.
// console.log(date.setMonth());
// setSeconds() Assignment: Set the seconds to 30.
// console.log(date.setSeconds());
// setTime() Assignment: Set the date using the timestamp 0.
// console.log(date.setTime());
// setUTCDate() Assignment: Set the UTC day of the month to 20.
// console.log(date.setUTCDate());
// setUTCFullYear() Assignment: Change the UTC year to 2030.
// const date = new Date("2026-08-13");
// console.log(date.setUTCFullYear());
// setUTCHours() Assignment: Set the UTC hour to 18.
// console.log(date.setUTCHours());
// setUTCMilliseconds() Assignment: Set the UTC milliseconds to 750.
// console.log(date.setUTCMilliseconds());
// setUTCMinutes() Assignment: Set the UTC minutes to 45.
// const date = new Date("13-08-2026");
// const result = date.toLocaleDateString();
// console.log(result);
// toLocaleTimeString() Assignment: Convert the time into a locale-specific time string.
// const date = new Date("2026-08-13T15:30:00");
// console.log(result);
// toString() Assignment: Convert the Date object into a string.
// toTimeString() Assignment: Get the time portion of the Date object as a string.
// const date = new Date("2026-08-13T15:30:45");
// console.log(date.toTimeString);
// toUTCString() Assignment: Convert the date into a UTC string.
// const date = new Date("2026-08-13T10:30:00Z");
// console.log(date.toUTCString);
// console.log(date.valueOf);

// const startDate = new Date("2026-08-13");
// const endDate = new Date("2026-08-20");
// const day = startDate.getDate();
// console.log(day);
// const dayOfWeek = startDate.getDay();
// console.log(dayOfWeek);
// const year = startDate.getFullYear();
// console.log(year);
// const hour = startDate.getHours();
// console.log(hour);
// const minutes = startDate.getMinutes();
// console.log(minutes);
// const month = startDate.getMonth();
// console.log(month);
// const seconds = startDate.getSeconds();
// console.log(seconds);
// const utcYear = startDate.getUTCFullYear();
// console.log(utcYear);
// const utcMonth = startDate.getUTCMonth();
// console.log(utcMonth);
// const timestamp = startDate.getTime();
// console.log(timestamp);
// const isoDate = startDate.toISOString();
// console.log(isoDate);
// const readableDate = startDate.toDateString();
// console.log(readableDate);
// const newYearDate = new Date(startDate);
// newYearDate.setFullYear(2030);
// console.log(newYearDate);
// const newMonthDate = new Date(startDate);
// newMonthDate.setMonth(11);
// console.log(newMonthDate);
// const utcTimestamp = Date.UTC(2026, 7, 13);
// console.log(utcTimestamp);

// const student = {
//   name: "John",
// };
// function greet() {
//   return `Hello, ${this.name}`;
// }
// // Write your code here
// const result = greet.bind(student);
// console.log(result());
