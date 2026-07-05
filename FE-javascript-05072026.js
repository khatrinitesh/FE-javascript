// JavaScript temporarily creates a String object behind the scenes
// let name = 'javascript'
// console.log(name.length)
// console.log(name.toUpperCase())

// Part B – Basic Coding
// Question 1
// Declare one variable of every primitive type.
// let language = 'javascript'
// let age = 37
// let Developer = true 
// let salary = 999999;
// let id = Symbol("id")
// let city;
// let address = null;
// console.log('language',language)
// console.log('age',age)
// console.log('Developer',Developer)
// console.log('salary',salary)
// console.log('id',id)
// console.log('city',city)
// console.log('address',address)

// Question 2
// Use typeof for every primitive type.
// console.log(typeof 'hello')
// console.log(typeof 42)
// console.log(typeof true)
// console.log(typeof undefined)
// console.log(typeof Symbol('id'))
// console.log(typeof null)

// Question 3 Compare Primitive Values
// let a = 10
// let b = 10 
// let c = '10'
// console.log(a == b)
// console.log(a === b)
// console.log(a == c)
// console.log(a === c)

// Question 4 Primitive vs Wrapper Object
// let str1 = 'hello'
// let str2 = new String('hello')
// let num3 = new Number(1111)
// let num4 = 1111

// console.log(str1 == str2)
// console.log(str1 === str2)
// console.log(num3 == num4)
// console.log(num3 === num4)

// Part C – DSA Practice
// Question 5 Print only primitive values.
// let arr = [
//     "React", // string 
//     100, // number 
//     true, // bolean 
//     {}, // object
//     [], // array
//     null, // null 
//     undefined, // undefined
//     Symbol(), // Symbol
//     200n //bigint 
// ];
// console.log(arr);

// Question 6 - Count Primitive Types
// let arr = [ 10,
//     {},
//     [],
//     true,
//     "Hello",
//     null,
//     undefined,
//     Symbol(),
//     10n]
//     console.log(arr.filter((value) => {
//         return (typeof value !== 'object' && typeof value !== 'function') || value === null;
//     }).length);

// Question 7 - Count Each Primitive Type
// const Example = [
// 10,
// 20,
// "JavaScript",
// true,
// false,
// null,
// undefined,
// 100n,
// Symbol(),
// "React"
// ]
// console.log(Example.reduce)        

// Question 8 - Convert All Values to Strings
// const example = [
// 10,
// true,
// null,
// undefined,
// 100n
// ]
// console.log(example.map((value) => {
//     return String(value)
// }))

// Question 9 = Find the Longest String
// const LongestFind = [
// "HTML",
// "CSS",
// "JavaScript",
// "React",
// "TypeScript"
// ]
// console.log(LongestFind.reduce((longest, current) => {
//     return current.length > longest.length ? current : longest;
// }))

// Question 10 -Find the Sum of Numbers
// const numbers = [10, 20, 30, 40, 50]
// const sum = numbers.reduce((accmulator,currentValue) => {
//     return accmulator + currentValue
// },0)
// console.log(sum)

// Question 11 - Remove Duplicate Primitive Values
// const example = [
// 10,
// 10,
// 20,
// 20,
// "HTML",
// "HTML",
// true,
// true
// ]
// const fruits = ['watermelon','mango','pineapple','blueberry']
// const uniqueExample = example.filter((item,index,arr) => {
//     return arr.indexOf(item) === index;
// })
// console.log(uniqueExample)

// Question 12 - Separate Primitive Types
// const example = [
//   10,
//   "React",
//   false,
//   100n,
//   undefined,
//   null,
//   Symbol("id")
// ];

// const separated = {
//     string:[],
//     number:[],
//     boolean:[],
//     bigint:[],
//     undefined:[],
//     symbol:[],
//     null:[]
// };
// for(const item of example){
//     if(item === null){
//         separated.null.push(item);
//     }
//     else{
//         separated[typeof item].push(item);
//     }
// }
// console.log(separated)

// Part D – Wrapper Object Practice
// Question 13 Use String Wrapper Methods
// let course = "javascript";

// console.log(course.toUpperCase());      // JAVASCRIPT
// console.log(course.toLowerCase());      // javascript
// console.log(course.charAt(0));          // j
// console.log(course.at(-1));             // t
// console.log(course.includes("script")); // true
// console.log(course.startsWith("java")); // true
// console.log(course.endsWith("script")); // true
// console.log(course.slice(4));           // script
// console.log(course.substring(0, 4));    // java
// console.log(course.replace("java", "type")); // typescript
// console.log(course.length);             // 10

// Question 14 - Use Number Wrapper Methods
// let price = 1234.56789;
// console.log(price.toFixed(2));        // "1234.57"
// console.log(price.toPrecision(6));    // "1234.57"
// console.log(price.toExponential(2));  // "1.23e+3"
// console.log(price.toString());        // "1234.56789"
// console.log(price.valueOf());         // 1234.56789
// console.log(Number.isInteger(price)); // false
// console.log(Number.isFinite(price));  // true

// Part E – Interview Questions
// What are the 7 primitive data types in JavaScript?
// console.log(typeof "hello")
// console.log(typeof 11)
// console.log(typeof true)
// console.log(typeof ['a','b'])
// console.log(typeof 100n)
// console.log(typeof Symbol())
// console.log(typeof undefined)
// console.log(typeof null)
// Why does typeof null return "object"?
// let value = null;
// console.log(value)

// What is the difference between primitive and reference types?
// Primitive Types

// JavaScript has 7 primitive types:

// String
// Number
// Boolean
// BigInt
// Symbol
// Undefined
// Null
// Characteristics
// Store actual values.
// Immutable (cannot be changed).
// Compared by value.
// Copying creates an independent copy.
// let a = 10 
// let b = a 
// b = 20 
// console.log(a)
// console.log(b)
// let person1 = {
//   name: "John"
// };

// let person2 = person1 
// person2.name = 'michael'
// console.log(person1)
// console.log(person2)
// Primitive
// let x = 100;
// let y = 100;
// console.log(x===y)
// // refeernce
// let obj1 = {}
// let obj2 = {}
// console.log(obj1 === obj2)


// What is a Wrapper Object?
// Example 1 – String Wrapper Object
// let course = "javascript";
// console.log(course.toUpperCase())
// Example 2 – Number Wrapper Object
// let price = 123.45;
// console.log(price.toFixed(2));
// Example 3 – Boolean Wrapper Object
// let isLoggedIn = true 
// console.log(Boolean(isLoggedIn))
// 
// Explain autoboxing in JavaScript.
// Example 1 – String Autoboxing
// let course = "javascript";
// console.log(course.toUpperCase())
// let temp = new String(course)
// console.log(temp.toUpperCase())
// Example 2 – Number Autoboxing
// let price = 1234.567;
// console.log(price.toFixed(2))
// Example 3 – Boolean Autoboxing
// let isActive = true;
// console.log(isActive)
// let language = "JavaScript";
// console.log(language)
// let text = "hello";
// console.log(text.toUpperCase())

// What is the difference between "Hello" and new String("Hello")?
// Example 1 – typeof
// let a = 'hello'
// let b = new String('hello')
// console.log(typeof a)
// console.log(typeof b)

// Example 2 – Equality
// console.log(a == b)
// console.log(a === b)
// Example 3 – Object Comparison
// let x = new String('hello')
// let y = new String('hello')
// console.log(x == y)
// console.log(x === y)

// Why is === preferred over ==?
// console.log(5 == '5')
// console.log(5 === '5')
// Example 2 – Boolean and Number
// console.log(false == 0)
// console.log(false === 0)
// Example 3 – null and undefined
// console.log(null == undefined)
// console.log(null === undefined)
// Example 4 – Empty String and Zero
// console.log('' == 0)
// console.log('' === 0)

// Are primitive values mutable or immutable?
// All of these are immutable.
// let text = "Hello";
// text.toUpperCase()
// console.log(text)
// let text = "Hello";
// text = text.toUpperCase()
// console.log(text)
// Example 2 – Number
// let num = 100
// let result = num + 50;
// console.log(num)
// console.log(result)
// Example 3 – Boolean
// let isActive = true 
// let status = !isActive 
// console.log(isActive)
// console.log(status)
// let a = "JavaScript";
// a = "React";
// console.log(a)
// Object (Mutable)
// let user = {
//   name: "John"
// };
// user.name = 'sameet'
// console.log(user.name)
// What is the use of Symbol?
// When should BigInt be used?


