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

