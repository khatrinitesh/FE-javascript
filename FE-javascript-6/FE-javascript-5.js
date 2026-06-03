// const testPromise = new Promise((resolve, reject) => {
//   const result = 5 + 5;
//   if (result === 10) {
//     resolve("fulfilled");
//   } else {
//     reject("rejected");
//   }
// });
// testPromise
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((message) => {
//     console.log(message);
//   });

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((data) => data.json())
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// const apiUrl = "https://jsonplaceholder.typicode.com/posts";
// fetch(apiUrl)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("error" + response.status);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log("posts ", data);
//   })
//   .catch((error) => {
//     console.log("error in catch", error);
//   });
