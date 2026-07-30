// Using let — value can be changed
// let name = "john";
// name = "test";
// console.log(name);

// using const = value cannot be assigned
// const age = 25;

// using var - older method
// var city = "mumbai";

// let number = 10;
// console.log((number += 5));
// console.log((number -= 5));
// console.log((number *= 5));
// console.log((number /= 5));
// console.log((number %= 5));

// statement
// let name = "john";
// let age = 25;
// age = 30;
// let total = 10;
// console.log((total += 5));
// console.log((total -= 2));
// console.log((total *= 2));
// console.log((total /= 2));

let username = "";
username ||= "guest";
console.log(username);
let isLogged = true;
isLogged &&= false;
console.log(isLogged);
let profileimage = null;
profileimage ??=
  "https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blt9cf6ba67c70c4b74/67c314cb5e83f4274fcb6a20/iStock-1425801565-HEADERMOBILE.jpg?fit=crop&auto=webp&quality=60&crop=smart&format=avif";
console.log(profileimage);
