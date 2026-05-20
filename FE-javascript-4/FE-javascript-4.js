// 1. Arithmetic Operators - javascript operators are symbols used to perform operations on values and variables
// let a = 5;
// let b = 10;
// console.log("addition", a + b);
// console.log("subtraction", a - b);
// console.log("multiply", a * b);
// console.log("divide", a / b);
// console.log("modules", a % b);
// console.log("exponentation", a ** b);

// Assignment Operators - used to assign values
// let x = 10;
// x += 5;
// console.log(x);
// x -= 3;
// console.log(x);

// comparison operators - used to compare values == === != !== > < >= <=
// console.log(10 == "10");
// console.log(10 !== "10");
// console.log(10 != "10");
// console.log(10 === "10");
// console.log(10 > 5);
// console.log(10 < 5);

// logical operators - used for conditions && ` !
// let age = 20;
// let hasID = true;
// console.log(age > 18 && hasID);
// console.log(age < 18 || hasID);
// console.log(!hasID);

// ternary operators - short form of if ... else
// condition ? trueValue : falseValue
// let age = 45;
// if (age >= 35) {
//   console.log("yes, it is pass");
// } else {
//   console.log("no, it is fail");
// }
// let result = age >= 35 ? "true" : "false";
// console.log(result);

// type operators - operator typeof instanceof
// console.log(typeof "hello");
// console.log(typeof 100);

// bitwise operators - used in binary operations & ` ^ ~ >> <<
// console.log(5 & 1);
// console.log(5 | 1);

// string operator - joins strings
// let fname = "test1";
// let lname = "test2";
// console.log(fname + " - " + lname);

// nullish coalescing operator (??) returns right value if left is null or undefined
// let user = null;
// console.log(user ?? "guest");

// optional chaining (?.) prevents errors if property doesn't exist
// const user = {
//   name: "test",
//   age: 23,
// };
// console.log(user?.name);
// console.log(user?.age);
// console.log(user?.location);

// spread operator (...) copies or merges arrays/objects
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const combined = [...arr1, ...arr2];
// console.log("combined", combined);

// destructing operator - extact values from arrays/objects
// const numbers = [10, 20, 30, 40];
// const [a, b, ...rest] = numbers;
// console.log("a number is ", a);
// console.log("b number is ", b);
// console.log("rest number is ", ...rest);

// DSA PRACTICAL EXAMPLE - CHECK EVEN OR ODD
// function checkEvenOdd(num) {
//   return num % 2 === 0 ? "even" : "odd";
// }
// console.log(checkEvenOdd(10));
// console.log(checkEvenOdd(3));
// console.log(checkEvenOdd(7));
// console.log(checkEvenOdd(0));

// compare two numbers
// function largest(a, b) {
//   return a > b ? a : b;
// }
// console.log(largest(50, 20));

// assignment operator -assigns a value
// let x = 10;
// console.log(x);

// addition operator adds value and assigns result
// x += y
// x = x + y
// let x = 10;
// x += 5;
// console.log(x);

// dsa example - score counter
// let score = 0;
// score += 10;
// score += 20;
// console.log(score);

// subtraction assignment = subtracts value and assigns result
// x -= y
// x = x - y
// let money = 1000;
// money -= 200;
// console.log("remaining balanced : ", money);

// dsa example - atm withdrawal
// let balance = 5000;
// balance -= 1000;
// console.log(balance);

// multiplication assignment - multiples   and assigns result
// x *= y
// x = x * y

// let num = 10;
// num *= 10;
// console.log(num)
//
// dsa example - product price
// let price = 200;
// price *= 3;
// console.log(price);

// division assignment - divides and assigns result
// x /= y
// x = x / y
// let total = 100;
// total /= 5;
// console.log(total);

// dsa example - equal distribution
// let chocolates = 20;
// chocolates /= 5;
// console.log(chocolates);

// modulus assignment % - gets reminder and assigns result
// x %= y
// x = x % y
// let number = 137;
// number %= 5;
// console.log(number);

// dsa example - even / odd check
// let num = 11;
// num %= 2;
// console.log(num);

// **= exponentation assignment - power of number
// x **= y
// x = x ** y
// let num = 2;
// num **= 8;
// console.log(num);

// complete assignment operators table
// operator = += -= *= /= %= **=
// meaning assign add & assign subtract & assign multiply & assign divide & assign remainder & assign modulus & assign

// // dsa practical example bank balance system
// let balance = 3000;
// // deposit
// balance += 500;
// // console.log(balance);
// // shopping
// balance -= 200;
// console.log(balance);
// // double bonus
// balance *= 2;
// console.log(balance);
