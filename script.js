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
// fetch("https://retoolapi.dev/njKKYt/data")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log("Fetched data (Promise):", data);
//   })
//   .catch((error) => {
//     console.error("Fetch error:", error);
//   });
// fetch("https://retoolapi.dev/njKKYt/data")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`sorry something went wrong ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error("fetch error", error);
//   });
// fetch("https://retoolapi.dev/njKKYt/data")
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error("get error:", error));
// async function getUserData() {
//   const response = await fetch("https://retoolapi.dev/njKKYt/data");
//   const data = await response.json();
//   console.log(data);
// }
// getUserData();
// const newItem = {
//   name: "Nitesh",
//   age: 25,
// };
// fetch("https://retoolapi.dev/njKKYt/data", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(newItem),
// })
//   .then((res) => res.json())
//   .then((data) => console.log("POST", data))
//   .catch((error) => console.error("POST error", error));
// const newItem = {
//   Name: "sameet",
//   age: 43,
// };
// fetch("https://retoolapi.dev/njKKYt/data", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(newItem),
// })
//   .then((res) => res.json())
//   .then((data) => console.log("POST DATA", data))
//   .catch((error) => console.error("POST ERROR", error));
// const updatedItem = {
//   Name: "Sameet updated",
//   age: 43,
// };
// fetch("https://retoolapi.dev/njKKYt/data/1", {
//   method: "PUT",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(updatedItem),
// })
//   .then((res) => res.json())
//   .then((data) => console.log("PUT DATA", data))
//   .catch((error) => console.error("ERROR DATA", error));
// const newItem2 = {
//   Name: "Arvind Khatri",
//   age: 69,
// };
// fetch("https://retoolapi.dev/njKKYt/data", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(newItem2),
// })
//   .then((res) => res.json())
//   .then((data) => console.log("post data", data))
//   .catch((error) => console.error("error data", error));
// const updatedItem2 = {
//   Name: "Arvind Khatri Updated",
//   age: 67,
// };
// fetch("https://retoolapi.dev/njKKYt/data/67", {
//   method: "PUT",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(updatedItem2),
// })
//   .then((res) => res.json())
//   .then((data) => console.log("put data", data))
//   .catch((error) => console.error("fetch error", error));
// fetch("https://retoolapi.dev/njKKYt/data/67", {
//   method: "PUT",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(updatedItem2),
// })
//   .then((res) => res.json())
//   .then((data) => console.log("put data", data))
//   .catch((error) => console.error("fetch error", error));
// fetch("https://retoolapi.dev/njKKYt/data/67", {
//   method: "PUT",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(updatedItem2),
// })
//   .then((res) => res.json())
//   .then((data) => console.log("put data", data))
//   .catch((error) => console.error("fetch error", error));
// fetch("https://retoolapi.dev/njKKYt/data/67", {
//   method: "DELETE",
// })
//   .then((res) => {
//     if (!res.ok) {
//       console.log("DELETE: Item deleted successfully");
//     } else {
//       console.error("DELETE failed");
//     }
//   })
//   .catch((error) => console.error("fetch error", error));
// fetch("https://retoolapi.dev/njKKYt/data/4", {
//   method: "DELETE",
// })
//   .then((res) => {
//     if (!res.ok) {
//       console.log("DELETE: Item deleted successfully");
//     } else {
//       console.log("DELETE failed");
//     }
//   })
//   .catch((error) => console.error("fetch error", error));
// get
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error("fetch error", error));
// const updatedItemTypicodeModify = {
//   userId: 101,
//   id: 202,
//   title: "nitesh khatri",
//   body: "modify - nitesh is feeling awesomely",
// };
// PUT request
// fetch("https://jsonplaceholder.typicode.com/posts/202", {
//   method: "PUT",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(updatedItemTypicodeModify),
// })
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`PUT failed: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => console.log("PUT MODIFY DATA:", data))
//   .catch((error) => console.error("PUT fetch error:", error));
// POST request
// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(updatedItemTypicodeModify),
// })
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`POST failed: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => console.log("POST DATA:", data))
//   .catch((error) => console.error("POST fetch error:", error));
// async function updatePost() {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/posts/202",
//       {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(updatedItemTypicodeModify),
//       }
//     );
//     if (!response.ok) {
//       throw new Error(`Put failed,${response.status}`);
//     }
//     const data = await response.json();
//     console.log("put data modified", data);
//   } catch (error) {
//     console.error(`Error`, error);
//   }
// }
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => res.json())
//   .then((data) => console.log("fetch data 1.51 pm", data))
//   .catch((error) => console.error(`fetch error`, error));
// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((res) => res.json())
//   .then((data) => console.log("fetch single data", data))
//   .catch((error) => console.error(`fetch error`, error));
// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: {
//     title: "foo",
//     body: "bar",
//     userId: 1,
//   },
// })
//   .then((res) => res.json())
//   .then((data) => console.log("added post data", data))
//   .catch((error) => console.error(`Fetch error`, error));
// fetch("https://fakestoreapi.com/products")
//   .then((res) => res.json())
//   .then((data) => console.log(data));
// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   headers: { "Content-Type": "application/json; charset=UTF-8" },
//   body: JSON.stringify({
//     title: "foo",
//     body: "bar",
//     userId: 1,
//   }),
// })
//   .then((res) => res.json())
//   .then((json) => console.log("POST response:", json))
//   .catch((err) => console.error("POST error:", err));
// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "PUT",
//   headers: {
//     "Content-Type": "application/json;charset=UTF-8",
//   },
//   body: JSON.stringify({
//     id: 1,
//     title: "foo",
//     body: "bar",
//     userId: 1,
//   }),
// })
//   .then((res) => res.json())
//   .then((data) => console.log("PUT response", data))
//   .catch((error) => console.error("fetch error", error));
// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "DELETE",
// })
//   .then((res) => {
//     if (res.ok) {
//       console.log("DELETE successful");
//     } else {
//       console.log("DELETE failed");
//     }
//   })
//   .catch((error) => console.error(`DELETE error`, error));
// const API = "https://jsonplaceholder.typicode.com/posts";
// fetch(API)
//   .then((res) => {
//     if (!res.ok) {
//       throw new Error(`Sorry something went wrong, ${res.status}`);
//     }
//     return res.json();
//   })
//   .then((data) => console.log("get all posts:", data))
//   .catch((error) => console.error(error));
// const API = "https://jsonplaceholder.typicode.com/posts/10";
// fetch(API)
//   .then((res) => {
//     if (!res.ok) {
//       throw new Error(`Sorry something went wrong, ${res.status}`);
//     }
//     return res.json();
//   })
//   .then((data) => console.log("get single posts:", data))
//   .catch((error) => console.error(error));
// fetch("https://dummyjson.com/auth/login", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({
//     username: "emilys",
//     password: "emilyspass",
//     expiresInMins: 30, // optional, defaults to 60
//   }),
//   credentials: "include", // Include cookies (e.g., accessToken) in the request
// })
//   .then((res) => res.json())
//   .then(console.log);
// fetch("https://dummyjson.com/auth/login", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     username: "emilys",
//     password: "emilyspass",
//     expiresInMins: 30, // optional, defaults to 60
//   }),
//   credentials: "include",
// })
//   .then((res) => res.json)
//   .then(console.log);
// fetch("https://jsonplaceholder.typicode.com/posts/")
//   .then((res) => res.json())
//   .then((data) => console.log(data));
// const api_post_url = "https://jsonplaceholder.typicode.com/posts";
// const SameetProfile = {
//   title: "sameet khatri",
//   age: "43",
// };
// const SameetProfileModify = {
//   title: "sameet shah",
//   age: "43",
// };
// fetch(api_post_url, {
//   method: "POST",
//   headers: {
//     // ✅ use "headers" not "header"
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(SameetProfileModify),
// })
//   .then((res) => {
//     if (!res.ok) {
//       throw new Error(`sorry something went wrong ${res.status}`);
//     }
//     return res.json();
//   })
//   .then((data) => console.log("✅ POST DATA", data))
//   .catch((error) => console.error("❌ fetch error", error));
// let x = [100, 200, 300];
// let y = [400, 500, 600];
// const z = y;
// console.log(x == y);
// console.log(z == y);
// console.log(z == x);
// console.log(typeof null);
// const obj = {
//   pqr: 100,
//   abc: 200,
//   xyz: {
//     pqr: 300,
//     abc: 400,
//   },
// };
// const {
//   pqr,
//   abc,
//   xyz: { pqr: p },
// } = obj;
// console.log(pqr);
// console.log(abc);
// console.log(p);
// let x = "hi";
// console.log(`${x} welcome`);
// let arr = [1, 2, 3, 4, 5];
// const filteredArray = arr.map((val) => val > 3);
// console.log(filteredArray);
// const arr = [1, 2, 3, 4, 5555, 5, 5, 5, 5, 5, 5];
// const uniqueArr = [...new Set(arr)];
// console.log(uniqueArr);
// const arr = [1, 2, 3, 4, 5555, 5, 5, 5, 5, 5, 5];
// console.log(Math.max(...arr));
// console.log(Math.min(...arr));
// const a1 = [1, 2, 3, 4, 5];
// const a2 = [3, 4, 5, 6, 7, 11, 12];
// const len = a1.length;
// const len2 = a2.length;
// console.log(len);
// // console.log(len2);
// const myList = [1, 2, 3, "hello", true, 4.5, null];
// // Filter: keep only numbers (excluding NaN, null, etc.)
// const numbersOnly = myList.filter(
//   (item) => typeof item === "number" && !isNaN(item)
// );
// // Output the result to console
// console.log("Numbers only:", numbersOnly);
// console.log("script start");
// setTimeout(() => {
//   console.log("setTimeout0");
// }, 0);
// Promise.resolve().then(() => {
//   console.log("promise 1");
// });
// Promise.resolve().then(() => {
//   console.log("promise 2");
// }, 0);
// console.log("script end");
// function findMissingNumber(arr) {
//   const n = arr.length + 1;
//   const expectedSum = (n * (n + 1)) / 2;
//   const actualSum = arr.reduce((sum, num) => sum + num, 0);
//   return expectedSum - actualSum;
// }
// const numberWise = [1, 2, 4, 5];
// console.log(findMissingNumber("missing", numberWise));
// function countCharacters(str) {
//   const counts = {};
//   for (let char of str) {
//     counts[char] = (counts[char] || 0) + 1;
//   }
//   return counts;
// }
// const input = "hello world";
// const result = countCharacters(input);
// console.log(result);
// function getPalindromeNumbers(numbers) {
//   return numbers.filter((num) => {
//     const str = num.toString();
//     return str === str.split("").reverse().join("");
//   });
// }
// const nums = [121, 343, 456, 787, 1001, 123];
// const palindromes = getPalindromeNumbers(nums);
// console.log(palindromes);
// Write a function to find the shortest word in a list of strings.
// function findShortestWord(words) {
//   if (!words.length) return null; // Handle empty array
//   return words.reduce((shortest, current) =>
//     current.length < shortest.length ? current : shortest
//   );
// }
// const wordList = ["elephant", "cat", "giraffe", "dog", "hippo"];
// const shortest = findShortestWord(wordList);
// console.log(shortest);
// Write a JavaScript program to group items of an array by category.
// const items = [
//   { name: "Apple", category: "Fruit" },
//   { name: "Banana", category: "Fruit" },
//   { name: "Carrot", category: "Vegetable" },
//   { name: "Broccoli", category: "Vegetable" },
//   { name: "Chicken", category: "Meat" },
// ];
// function groupByCategory(arr) {
//   return arr.reduce((grouped, item) => {
//     const category = item.category;
//     if (!grouped[category]) {
//       grouped[category] = [];
//     }
//     grouped[category].push(item);
//     return grouped;
//   }, {});
// }
// const groupedItems = groupByCategory(items);
// console.log(groupedItems);
// Write a JavaScript program that takes an array of objects and returns an object containing the frequency of each property across all objects.
// function countPropertyFrequency(objectsArray) {
//   const frequency = {};
//   for (const obj of objectsArray) {
//     for (const key in obj) {
//       frequency[key] = (frequency[key] || 0) + 1;
//     }
//   }
//   return frequency;
// }
// const data = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", location: "NY" },
//   { age: 30, location: "LA" },
//   { name: "Charlie" },
// ];
// const result = countPropertyFrequency(data);
// console.log(result);
//How do you compare two objects in JavaScript, ensuring the identical order of keys?
// function areObjectsEqualWithOrder(obj1, obj2) {
//   const keys1 = Object.keys(obj1);
//   const keys2 = Object.keys(obj2);
//   // Check: Same number of keys
//   if (keys1.length !== keys2.length) return false;
//   // Check: Keys are in the same order
//   for (let i = 0; i < keys1.length; i++) {
//     if (keys1[i] !== keys2[i]) return false;
//   }
//   // Check: Corresponding values are equal
//   for (let i = 0; i < keys1.length; i++) {
//     const key = keys1[i];
//     if (obj1[key] !== obj2[key]) return false;
//   }
//   return true;
// }
// const a = { name: "Alice", age: 25 };
// const b = { name: "Alice", age: 25 };
// const c = { age: 25, name: "Alice" };
// console.log(areObjectsEqualWithOrder(a, b));
// console.log(areObjectsEqualWithOrder(a, c));
// Collect books from an array of objects and return a collection of books as an array.
// const collections = [
//   { name: "Alice", books: ["Book A", "Book B"] },
//   { name: "Bob", books: ["Book C"] },
//   { name: "Charlie", books: ["Book D", "Book E", "Book F"] },
// ];
// function collectAllBooks(data) {
//   return data.flatMap((item) => item.books);
// }
// const allBooks = collectAllBooks(collections);
// console.log(allBooks);
// Write a function that returns unique characters from a string.
// function getUniqueCharacters(str) {
//   return [...new Set(str)].join("");
// }
// const input = "javascript";
// const result = getUniqueCharacters(input);
// console.log(result);
//  Write a function that takes an array of integers and returns the maximum product that can be obtained by multiplying any three numbers from that array.
// function maxProductOfThree(nums) {
//   if (nums.length < 3) {
//     throw new Error("Array must contain at least 3 numbers");
//   }
//   nums.sort((a, b) => a - b); // Sort in ascending order
//   const n = nums.length;
//   // Two possibilities:
//   // 1. Product of the top 3 largest numbers
//   // 2. Product of 2 smallest (most negative) and the largest number
//   const option1 = nums[n - 1] * nums[n - 2] * nums[n - 3];
//   const option2 = nums[0] * nums[1] * nums[n - 1];
//   return Math.max(option1, option2);
// }
// console.log(maxProductOfThree([1, 10, 2, 6, 5, 3]));
// Write a function to move all zeros to the end of the array while maintaining the relative order of the non-zero elements.
// function moveZeros(arr) {
//   const filtered = arr.filter((x) => x !== 0);
//   const zeros = arr.length - filtered.length;
//   return [...filtered, ...Array(zeros).fill(0)];
// }
// console.log(moveZeros([0, 1, 0, 3, 12]));
//  Write a function to check if a string is a palindrome, considering only alphanumeric characters and ignoring cases.
// function isPalindrome(str) {
//   const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
//   const reversed = cleaned.split("").reverse().join("");
//   return cleaned === reversed;
// }
// console.log(isPalindrome("A man, a plan, a canal: Panama"));
// console.log(isPalindrome("Hello, World!"));
// Given a sorted array and a target value, write a function to return the index of the target value in the array using binary search. If the target is not found, return -1.
// function binarySearch(arr, target) {
//   let left = 0,
//     right = arr.length - 1;
//   while (left <= right) {
//     const mid = Math.floor((left + right) / 2);
//     if (arr[mid] === target) {
//       return mid;
//     } else if (arr[mid] < target) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
//   return -1; // target not found
// }
// const nums = [1, 3, 5, 7, 9];
// console.log(binarySearch(nums, 7)); // ➜ 3
// console.log(binarySearch(nums, 4)); // ➜ -1
//  Write a function to return the first non-repeating character in a string. If not available, return -1.
// function firstNonRepeatingChar(str) {
//   const charCount = {};
//   // Count occurrences of each character
//   for (let char of str) {
//     charCount[char] = (charCount[char] || 0) + 1;
//   }
//   // Find the first character with count 1
//   for (let char of str) {
//     if (charCount[char] === 1) {
//       return char;
//     }
//   }
//   return -1;
// }
// console.log(firstNonRepeatingChar("swiss"));
// console.log(firstNonRepeatingChar("aabbcc"));
// Write a function to find the occurrence of each character in a given string.
// function countCharacterOccurrences(str) {
//   const counts = {};
//   for (let char of str) {
//     counts[char] = (counts[char] || 0) + 1;
//   }
//   return counts;
// }
// // Example usage:
// console.log(countCharacterOccurrences("hello world"));
//Write a function to flatten a nested array.
// function flattenArray(arr) {
//   let result = [];
//   for (let item of arr) {
//     if (Array.isArray(item)) {
//       result = result.concat(flattenArray(item)); // recursively flatten
//     } else {
//       result.push(item);
//     }
//   }
//   return result;
// }
// console.log(flattenArray([1, [2, [3, 4], 5], 6]));
//  Write a JavaScript program to remove duplicate elements from an array in different ways.
// function removeDuplicate(arr) {
//   return [...new Set(arr)];
// }
// const word = ["a", "a", "b", "b", "c"];
// console.log(removeDuplicate(word));
// function removeDuplicatesUsingFilter(arr) {
//   return arr.filter((item, index) => arr.indexOf(item) === index);
// }
// console.log(removeDuplicatesUsingFilter([1, 2, 2, 3, 4, 4, 5]));
// function removeDuplicatesUsingReduce(arr) {
//   return arr.reduce((acc, item) => {
//     if (!acc.includes(item)) {
//       acc.push(item);
//     }
//     return acc;
//   }, []);
// }
// console.log(removeDuplicatesUsingReduce([1, 2, 2, 3, 4, 4, 5]));
//  Write a program to implement currying which gives the sum of three numbers.
// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }
// console.log(sum(10)(20)(50));
// const sum = (a) => (b) => (c) => a + b + c;
// console.log(sum(1)(2)(30));
// Write a program to generate a 6-digit random OTP.
// function generateOTP() {
//   return Math.floor(100000 + Math.random() * 900000).toString();
// }
// console.log("your otp is", generateOTP());
// Write a program to find the intersection of two arrays.
// function intersection(arr1, arr2) {
//     // Convert second array to a Set for faster lookup
//     const set2 = new Set(arr2);
//     // Filter elements that are also in set2
//     return arr1.filter(item => set2.has(item));
// }
// const array1 = [1, 2, 3, 4, 5];
// const array2 = [3, 4, 5, 6, 7];
// const result = intersection(array1, array2);
// console.log("Intersection:", result);
//  JavaScript Essentials:
// ✅ var, let, const – Know the differences!
// function varExample() {
//     var x = 10;
//     if (true) {
//         var x = 20; // Same variable!
//         console.log("Inside if block:", x); // 20
//     }
//     console.log("Outside if block:", x); // 20
// }
// varExample();
// function letExample() {
//     let y = 10;
//     if (true) {
//         let y = 20; // Different variable (block-scoped)
//         console.log("Inside if block:", y); // 20
//     }
//     console.log("Outside if block:", y); // 10
// }
// letExample();
// function constExample() {
//     const z = 30;
//     // z = 40; // ❌ Error: Assignment to constant variable
//     console.log("Const value:", z);
// }
// constExample()
// function outerFunction() {
//     let counter = 0;
//     return function innerFunction() {
//         counter++;
//         console.log("Counter:", counter);
//     };
// }
// const increment = outerFunction();
// increment()
// increment()
// increment()
// function createCounter() {
//   let count = 0;
//   return function () {
//     count++;
//     console.log("Count:", count);
//   };
// }
// const counter1 = createCounter();
// counter1(); // Count: 1
// counter1(); // Count: 2
// const counter2 = createCounter();
// counter2(); // Count: 1 (separate counter)
// let result = 3 + 2 + "7";
// console.log(result);
// var x = 10;
// var x = 20; // re-declaration allowed
// console.log("var:", x); // 20
// let y = 30;
// y = 40;
// console.log(y);
// const z = 50;
// // z = 60; Error (can't reassign)
// console.log("const:", z); // 50
// let firstname = " pawan";
// let surname = " patel";
// let fullname = firstname + surname;
// console.log(fullname);
// let x = 10;
// let y = 20;
// let calculatorResult = x + y;
// console.log(calculatorResult);
// let teamwise = ["x", "b", "a", "d", "c"];
// teamwise.sort(function (a, b) {
//   return a.localeCompare(b);
// });
// const person = [
//   { id: 1, name: "test1", amount: 1500 },
//   { id: 2, name: "test2", amount: 1000 },
//   { id: 3, name: "test3", amount: 2600 },
//   { id: 4, name: "test4", amount: 3500 },
// ];
// const final = person.sort((a, b) => b.amount - a.amount);
// console.log(final);
// var object1 = {
//   name: "Sudheer",
//   age: 34,
// };
// // const { name } = object;
// object1.name = "sammeet";
// delete object1.age;
// console.log(object1);
// let vehicle = {
//   wheels: "4",
//   fuelType: "Gasoline",
//   color: "Green",
// };
// let carProps = {
//   type: {
//     value: "Volkswagen",
//   },
//   model: {
//     value: "Golf",
//   },
// };
// var car = Object.create(vehicle, carProps);
// console.log(car);
// function example() {
//   // --- var ---
//   if (true) {
//     var a = 1;
//   }
//   console.log("var a:", a); // ✅ Accessible outside the if-block (function-scoped)
//   // --- let ---
//   if (true) {
//     let b = 2;
//     console.log("let b inside block:", b);
//   }
//   // console.log("let b:", b); ❌ Error: b is not defined (block-scoped)
//   // --- const ---
//   if (true) {
//     const c = 3;
//     console.log("const c inside block:", c);
//   }
//   // console.log("const c:", c); ❌ Error: c is not defined (block-scoped)
//   // --- Reassignment ---
//   let d = 10;
//   d = 20; // ✅ allowed
//   console.log("let d reassigned:", d);
//   const e = 30;
//   // e = 40; ❌ Error: Assignment to constant variable
//   const obj = { name: "John" };
//   obj.name = "Doe"; // ✅ allowed (object is mutable)
//   console.log("const object changed:", obj.name);
// }
// example();
// Closures & Event Delegation – Must-know concepts.
// function outerFunction() {
//   let count = 0;
//   function innerFunction() {
//     count++;
//     console.log("count", count);
//   }
//   return innerFunction;
// }
// const counter = outerFunction();
// counter();
// counter();
// counter();
// counter();
// counter();
// function outerFunction() {
//   let count = 0;
//   function innerFunction() {
//     count++;
//     console.log(count);
//   }
//   return innerFunction;
// }
// const counter = outerFunction();
// counter();
// counter();
// counter();
// counter();
// counter();
// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const data = {
//         message: "hello from promise",
//       };
//       resolve(data);
//     }, 1000);
//   });
// }
// fetchData()
//   .then((result) => console.log("promise resolved", result))
//   .catch((error) => console.error("promise rejected", error));
// fetch("https://jsonplaceholder.typicode.com/posts/")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`sorry something went wrong ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log("fetched data", data);
//   })
//   .catch((error) => {
//     console.error(`Error`, error);
//   });
// async function fetchData() {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/posts/1"
//     );
//     if (!response.ok) {
//       throw new Error("network response was ok");
//     }
//     const data = await response.json();
//     console.log("data", data);
//   } catch (error) {
//     console.error("error", error);
//   }
// }
// fetchData();
// Execution Context & Call Stack –> how JS runs your code line by line.
// function first() {
//   console.log("first");
//   second();
// }
// function second() {
//   console.log("second");
//   third();
// }
// function third() {
//   console.log("third");
// }
// first();
// Hoisting –>what gets lifted and what doesn’t.
// console.log(a);
// var a = "nitesh";
// foo();
// function foo() {
//   console.log("hello world");
// }
// Closures –> lexical scope + hidden power.
// function outer() {
//   let count = 0;
//   return function inner() {
//     count++;
//     console.log(count);
//   };
// }
// const counter = outer();
// counter();
// counter();
// counter();
// counter();
// counter();
// counter();
// counter();
// counter();
//Event Loop & Concurrency Model –> microtasks vs macrotasks
// console.log("Start");
// setTimeout(() => {
//   console.log("setTimeout - MacroTask 1");
// }, 0);
// Promise.resolve()
//   .then(() => {
//     console.log("Promise 1 - MicroTask 1");
//     return "Promise 2";
//   })
//   .then((msg) => {
//     console.log(msg);
//   });
// console.log("End");
// console.log("Start");
// setTimeout(() => {
//   console.log("setTimeout - MacroTask 1");
// }, 0);
// Promise.resolve()
//   .then(() => {
//     console.log("Promise 1 - MicroTask 1");
//     return "Promise 2";
//   })
//   .then((msg) => {
//     console.log(msg);
//   });
// console.log("End");
// Promises & async/await –> chaining, error handling, pitfalls.
// function HappyData() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("happy data"), 0);
//   });
// }
// HappyData().then((data) => console.log(data));
// async/await
// async function happyData() {
//   const data = await HappyData();
//   console.log(data);
// }
// happyData();
// this keyword –> implicit, explicit, arrow functions.
// const person = {
//   name: "test",
//   greet() {
//     console.log(this.name);
//   },
// };
// person.greet();
// const greetPerson = person.greet;
// greetPerson();
// const arrowGreet = () => console.log(this.name);
// arrowGreet();
// Scope (var, let, const) –> function, block, temporal dead zone.
// function scopeExample() {
//   if (true) {
//     var a = "var";
//     let b = "let";
//     const c = "const";
//   }
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// scopeExample();
// Functions as First-Class Citizens –> callbacks, higher-order functions..
// function greet(name) {
//   return `hello ${name}`;
// }
// // console.log(greet("nitesh"));
// function processName(fn, name) {
//   return fn(name);
// }
// console.log(processName(greet, "niteadsash"));
// Currying & Partial Application –> real-world use in React handlers.
// function multiply(a) {
//   return function (b) {
//     return a * b;
//   };
// }
// const multiply2 = multiply(2);
// console.log(multiply2(5)); // 10
// // Partial Application
// function add(a, b, c) {
//   return a + b + c;
// }
// const add5 = add.bind(null, 5); // Partial application with first argument fixed
// console.log(add5(3, 4)); // 12
// Debounce & Throttle –> critical for performance in UI apps.
// function debounce(func, delay) {
//   let timeout;
//   return function (...args) {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => func(...args), delay);
//   };
// }
// const log = debounce(() => console.log("Debounced!"), 1000);
// window.addEventListener("scroll", log);
// // Throttle
// function throttle(func, delay) {
//   let last = 0;
//   return function (...args) {
//     const now = new Date().getTime();
//     if (now - last > delay) {
//       last = now;
//       func(...args);
//     }
//   };
// }
// const throttleLog = throttle(() => console.log("Throttled!"), 1000);
// window.addEventListener("scroll", throttleLog);
// Type Coercion & Equality –> == vs ===, truthy/falsy traps.
// console.log(5 == "5");
// console.log(0 == false);
// console.log(null == undefined);
// console.log("1 " == true);
// if ("hello") {
//   console.log("this will run");
// }
// if ([]) {
//   console.log("This will run too (empty array)");
// }
// if ({}) {
//   console.log("This will run too (empty object)");
// }
// if (42) {
//   console.log("This will run too (non-zero number)");
// }
// if (true) {
//   console.log("This will run too (boolean called true)");
// }
// console.log(null == undefined);
// console.log(null === undefined);
// console.log(0 == false); // true
// console.log("0" == false); // true
// console.log("" == false); // true
// console.log("" === false); // false
// Destructuring the first three values
// const numbers = [10, 20, 30, 40, 50];
// const [first, second, ...rest] = numbers;
// console.log(first);
// console.log(second);
// console.log(rest);
// object destructuring
// const user = {
//   name: "Alice",
//   age: 30,
//   city: "Wonderland",
// };
// const { age, name, city } = user;
// console.log(name);
// console.log(age);
// console.log(city)
// Array Methods: map, filter, reduce
// const users = [
//   { name: "Alice", age: 25, city: "New York" },
//   { name: "Bob", age: 30, city: "Los Angeles" },
//   { name: "Charlie", age: 35, city: "Chicago" },
//   { name: "David", age: 40, city: "San Francisco" },
//   { name: "Eve", age: 28, city: "Austin" },
// ];
// const userNames = users.map((user) => user.name);
// console.log(userNames);

// const usersOver30 = users.filter((user) => user.age > 30);
// console.log(usersOver30);
// const totalAge = users.reduce((acc, user) => acc + user.age, 0);
// console.log(totalAge);
// const averageAge = totalAge / usersOver30.length;
// console.log(averageAge);

// const users = [
//   { name: "Alice", age: 25, city: "New York", salary: 50000 },
//   { name: "Bob", age: 30, city: "Los Angeles", salary: 60000 },
//   { name: "Charlie", age: 35, city: "Chicago", salary: 70000 },
//   { name: "David", age: 40, city: "San Francisco", salary: 80000 },
//   { name: "Eve", age: 28, city: "Austin", salary: 55000 },
// ];
// const ageOver30 = users.filter((a) => a.age > 30);
// console.log(ageOver30);
// const userSalaries = users.map(({ salary, name, age }) => ({
//   salary,
//   name,
//   age,
// }));
// console.log(userSalaries);

// const totalSalary = users.reduce((acc, { salary }) => acc + salary, 0);
// console.log(totalSalary);
// const averageSalary = totalSalary / users.length;
// console.log(averageSalary);

// function sum(...numbers) {
//   return numbers.reduce((total, num) => total + num, 0);
// }
// console.log(sum(10, 320, 44));
// console.log(10, 20, 30, 40);
// console.log(sum(5));

// function sum(...numbers) {
//   return numbers.reduce((total, num) => total + num, 0);
// }
// console.log(sum(10, 20));

// const arr = [1, 2, 3, 4, 5];
// const [first, second, ...third] = arr;
// console.log(first);
// console.log(second);
// console.log(third);

// const person = {
//   name: "Alice",
//   age: 30,
//   city: "New York",
//   occupation: "Developer",
// };

// const { name, age, ...rest } = person;
// console.log(name);
// console.log(age);
// console.log(rest);

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const mergedArray = [...arr1, ...arr2];
// console.log(mergedArray);

// const user = {
//   name: "Alice",
//   age: 30,
// };
// const clonedUser = { ...user };
// console.log(clonedUser);

// const additionalInfo = {
//   city: "New York",
//   occupation: "Developer",
// };
// const mergedUsers = { ...user, ...additionalInfo };
// console.log(mergedUsers);

// const numbers = [1, 2, 3, 4, 5];
// const maxNumber = Math.max(...numbers);
// console.log(maxNumber);

// const users = [
//   { name: "Alice", age: 25, city: "New York" },
//   { name: "Bob", age: 30, city: "Los Angeles" },
//   { name: "Charlie", age: 35, city: "Chicago" },
//   { name: "David", age: 40, city: "San Francisco" },
//   { name: "Eve", age: 28, city: "Austin" },
// ];
// const updatedUsers = users
//   .filter((user) => user.age > 30)
//   .map(({ name, age, city, ...rest }) => ({
//     name,
//     age,
//     city,
//     status: "Senior",
//     ...rest, // Here we can spread the remaining properties (if any)
//   }));
// console.log(updatedUsers);

const arr1 = [1, 2, 3, 4];
const arr2 = [6, 7, 8, 9];
// let flag = false;
// for (let i = 0; i < arr1.length; i++) {
//   if (arr1[i] != arr2[i]) {
//     flag = true;
//     break;
//   }
// }
// console.log(flag);

// arr1.unshift(1);
// console.log(arr1);
// let a = 2;
// let b = 4;
// a = a * b;
// b = a / b;
// a = a / b;
// console.log(a, b);

// let str = "nitesh khatri";
// console.log(str);

// let str = "nitesh khatri";
// let obj = {};
// for (let i = 0; i < str.length; i++) {
//   if (!obj.hasOwnProperty(str[i])) obj[`${str[i]}`];
// }
// console.log(obj);

// console.log("2" - 2);
// console.log("mock interview");

// let arr = [12, 400, 399, 401, 80];
// console.log(arr);

// for(let i =0;i<arr.length;i++){
//     const curr = arr[i]
//     for(let j=i;j<arr.length;j++)
// }

// let sum = arr.reduce((a, b) => {
//   return a + b;
// }, 0);
// console.log(sum);

// console.log(arr);
// const result = arr.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   } else {
//     return -1;
//   }
// });
// console.log(result);
// let arr = [1, 13, 12, 5, 100];
// let ans = [];
// solve(0, 17, ans, arr);
// console.log(ans);

// arr.forEach((num,index) => {
//     let val = arr.find(())
// })

// let str1 = "xyz";
// let str2 = "123";
// let str = "";
// for (let i = 0; i < str1.length; i++) {
//   str += str1[i] + str2[i];
// }
// console.log(str);

// let abc1 = "abc";
// let abc2 = "123";
// let abc = "";
// for (let i = 0; i < abc1.length; i++) {
//   abc += abc1[i] + abc2[i];
// }
// console.log(abc);

// let arr = [1, 13, 12, 5, 100];
// let sum = arr.reduce((a, b) => {
//   return a + b;
// }, 0);
// console.log(sum);

// let arr = ["sameet", "nitesh"];

// function abc(arr) {
//   let arr1 = arr[0].split(""); // ['s','a','m','e','e','t']
//   let arr2 = arr[1].split(""); // ['n','i','t','e','s','h']

//   let flag = true; // assume true, disprove it if we find a missing char

//   for (let i = 0; i < arr2.length; i++) {
//     if (!arr1.includes(arr2[i])) {
//       flag = false; // found a character in arr2 that is NOT in arr1
//       break; // no need to continue
//     }
//   }

//   return flag;
// }

// console.log(abc(arr)); // false (because 'n', 'i', 'h' are not in "sameet")

// let arr = ["sameet", "nitesh"];

// function abc(arr) {
//   let arr1 = arr[0].split("");
//   let arr2 = arr[1].split("");

//   let flag = false;

//   for (let i = 0; i < arr2.length; i++) {
//     if (arr1.includes(arr2[i])) {
//       flag = true; // found a common letter
//       break;
//     }
//   }

//   return flag;
// }

// console.log(abc(arr)); // true

// console.log(parseInt("78F"));

// console.log(
//   [1, 2, 3, 4, 5].map((e) => {
//     if (e > 0) return;
//     return e * 10;
//   })
// );


