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
