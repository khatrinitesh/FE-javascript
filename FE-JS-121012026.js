// const arr = [1, 2,-3,4];
// const result = arr.some((n) => n % 2 === 0)
// console.log(result)
// const result = arr.some((n) => n < 0)
// console.log(result)
// const arr = [2, 4, 6, 8];
// const result = arr.every((n) => n % 2 === 0)
// console.log(result)

// const arr = [10,20,30,40]
// console.log('if there is a match 25',arr.includes(25))
// console.log('if there is a match 20',arr.includes(20))

// const arr = [1, 2, 3, 4, 5];
// const result = arr.some((n) => n > 0)
// console.log(result)

// const arr = [10, 20, 100, 50];
// console.log(arr.includes(100))

// const arr = [12, 17, 25, 33];
// console.log(arr.some((n) => n % 5===0))

// const arr = ["Apple", "Banana", "Mango"];
// const result = arr.every(item => typeof item === 'string')
// console.log(result)

// const arr = [10, 25, 60, 40];
// const result = arr.some(num => num > 55)
// console.log(result)

// const date = new Date("2026-10-12T10:30:00");
// console.log(date.getFullYear())
// console.log(date.getMonth() + 1)
// console.log(date.getDate())
// const date = new Date(2026, 9, 12);
// date.setDate(date.getDate() + 7)
// console.log(date.toDateString())

// example sort dates
// const dates = [
//   "2026-12-20",
//   "2026-01-15",
//   "2026-06-10"
// ];

// const sorted = dates.sort((a,b) => new Date(a) - new Date(b))
// console.log(sorted)

// boolean date problems  These are especially useful for combining your earlier Boolean Array Methods assignment with JavaScript Date.
// function isLeapYear(year){
//     return (
//         year % 400 === 0 ||  (year % 4 === 0 && year % 100 !== 0)
//     )
// }
// for(let year = 2002;year<=2026;year++){
//     console.log('year is',year,'Boolean => ',isLeapYear(year))
// }

// function add(a,b){
//     return a + b 
// }
// console.log(add(10,20))
// console.log(add.call(null,100,20))
// console.log(add.call(null,40,50))

// function multiply(a,b){
//     return a  * b 
// }
// console.log(multiply.apply(null,[5,4]))
// const double = multiply.bind(null,2)
// console.log(double(12))
// console.log(double(9))

// function add(a,b){
//     return a+b 
// }
// console.log(add(50,550))

// const arr = [10, 50, 30, 80]
// console.log(Math.max.call(null,10,50,60))
// console.log(Math.max.apply(null,arr))
// console.log(Math.max(...arr))

// function multiply(a,b){
//     return a *  b 
// }
// const resulted = multiply.bind(null,5)
// console.log(resulted(10))
// console.log(resulted(20))
// console.log(resulted(30))
// console.log(resulted(40))

// function add(c,d){
//     return c+d 
// }
// console.log(add.call(null,10,20))
// console.log(add.apply(null,[210,20]))
// const bindResult = add.bind(null,10)
// console.log(bindResult(20))
// console.log(bindResult(30))
// console.log(bindResult(250))
// console.log(bindResult(2110))

// function calculate(a, b, c) {
//     return a +b +c 
// }
// console.log(calculate.length)

// function greet(name){
    
// }
// console.log(greet.length)

// function hello(){}
// console.log(hello.length)

// function calculate(a, b, c) {
//   return a + b + c;
// }

// console.log(calculate.length); // 3

// console.log(calculate(10, 20, 30)); // 60

// function checkNum(num){
//     return num % 2 === 0
// }
// console.log(checkNum(20))
// console.log(checkNum(21))
// console.log(checkNum(22))
// console.log(checkNum(23))
// console.log(checkNum(24))
// console.log(checkNum(25))

// function add(a, b) {
//   return a + b;
// }

// function multiply(a, b) {
//   return a * b;
// }

// function subtract(a,b){
//     return a - b 
// }
// function divide(a,b){
//     return a / b 
// }
// function modules(a,b){
//     return a % b 
// }
// console.log(add.name);      // add
// console.log(multiply.name); // multiply
// console.log(subtract.name)
// console.log(divide.name)
// console.log(modules.name)

// function square(num){
//     return num * num 
// }
// console.log(square(5))

// console.log(square.toString())
// console.log(typeof square)
// console.log(typeof square.toString())

// const arr = [5, 2, 9, 1, 7];
// console.log(Math.min(...arr))

// const arr = [5, 2, 9, 1, 7];
// console.log(Math.max(...arr))
// console.log(Math.min(...arr))

// function greet(){
//     return 'hello ' + this.name 
// }
// const person1 = {name:'sameet'}
// const person2 = {name:'sameet'}
// console.log(greet.call(person1))
// console.log(greet.call(person2))

// const arr = [10, 20, 30, 40, 50];
// const result = arr.values().drop(2)
// console.log(result)
// const arr = [2, 4, 6, 8];
// const result = arr.values().every(num => num % 2 === 0)
// console.log(result)

// const arr = [1, 2, 3, 4, 5, 6];
// const result = arr.values().filter((val) => val % 2 === 0)
// console.log(result)

// const arr = [5, 12, 8, 20];
// const result = arr.values().find((n => n % 2 === 0))
// console.log(result)

// const arr = [1, 2, 3];
// const result = arr.values().flatMap(n => [n,n*2])
// console.log(result)

// const arr = [10, 20, 30];
// const result =arr.values().forEach((n) => {
//     console.log(n)
// })

// const arr = [10, 20, 30];
// const result = Iterator.from(arr)
// console.log(result)

// const arr = [1, 2, 3, 4];
// const result = arr.values().map((n) => n * 2)
// console.log([...result])

// const arr = [10, 20, 30];
// const result = arr.values().reduce((a,b) => a +b,0)
// console.log(result)

// const arr = [1, 3, 5, 8];
// const result = arr.values().some((a) => a % 2 ===0)
// console.log(result)

// const arr = [10, 20, 30, 40, 50];
// const result = arr.values().take(3)
// console.log(result)

// const arr = [10, 20, 30, 40, 50, 60];
// console.log(arr.slice(3))
// console.log(arr.filter((n,i) => i >= 3))

// const arr = [1, 2, 3, 4, 5, 6];
// console.log(arr.values().take(3))

// const arr = [2, 4, 6, 8];
// const result =arr.values().every((n) => n % 2 ===0)
// console.log(result)

// const arr = [2, 4, 6, 8];
// const result =arr.values().some((n) => n <=0)
// console.log(result)

// const arr = [10, 20, 30, 40];
// arr.values().forEach(n => {
//     console.log(n)
// })

// const arr = [10, 20, 30];
// const iterator = Iterator.from(arr)
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

// const arr = [1, 2, 3, 4, 5];
// const result = arr.values().map((n) => n * 3)
// console.log(result)

// const arr = [1, 2, 3, 4, 5, 6];
// const result = arr.values().filter((sum,num) => sum + num,0)
// console.log(result)

// const arr = [10, 20, 30, 40];
// const result = arr.values().reduce((sum,num) => sum + num,0)
// console.log(result)

// const arr = [10, 15, 21, 28, 35];
// const result = arr.values().find(num => num % 7 === 0)
// console.log(result)

// const arr = [10, 20, 30, 40, 50, 60, 70];
// const result = arr.values().drop(2).take(3)
// console.log(result)

// const arr = [1, 2, 3, 4, 5, 6];
// const result = arr.values().filter(n => n % 2 === 0).map(n => n * n)
// console.log(result)

// const arr = ["apple", "banana", "mango"];
// const result = arr.values().every(word => word.length > 3)
// console.log(result)

// const arr = [10, 12, 15, 20, 30]
// const result = arr.values().flatMap(n => [n,n*2])
// console.log(result)

// const arr = [10, 50, 30, 80, 20];
// const result = arr.values().reduce((max,num) => num > max ? num : max,Infinity)
// console.log(result)

// const arr = ["hello", "world", "javascript"];
// const result = arr.values().map(word => word.toUpperCase())
// console.log([...result])

// const arr = [1, 2, 3, 4, 5, 6];
// const result = arr.values().filter((v) => v % 2 === 0).map((val) => val * val).reduce((a,b) => a + b, 0)
// console.log(result)

// const arr = [10, 20, 30, 40, 50, 80, 120, 150];
// const result = arr.values().drop(5).find(n => n > 100)
// console.log(result)

// const arr = [10, 20, 30, 40, 50];
// const sum = arr.values().reduce((a,b) => a+b,0)
// const avg = sum / arr.length
// console.log(avg)

// const arr = [1, 2, 3, 4];
// const result = arr.values().drop(2).filter(n => n > 0 && n % 2 === 0).take(3)
// console.log([...result])

const arr = [1, 2, 3, 4, 5];
console.log(arr.map(n => n * 2))
const iterator = arr.values().map(n => n  * 2)
console.log(iterator)