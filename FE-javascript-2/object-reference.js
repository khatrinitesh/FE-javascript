// const defaultSettings = {
//   theme: "light",
//   fontSize: 14,
// };

// const userSettings = {
//   theme: "dark",
// };

// const finalSettings = { ...defaultSettings, ...userSettings };
// console.log(finalSettings);

// const person = {
//   name: "test",
// };
// console.log(person);

// const student = {
//   greet() {
//     return "hello student";
//   },
// };
// console.log(student)
//
// const employee = {};
// Object.defineProperties(employee, {
//   name: {
//     value: "nitesh",
//   },
//   age: {
//     value: 22,
//   },
// });
// console.log(employee);

// const car = {};
// Object.defineProperty(car, "brand", {
//   value: "BMW",
//   writable: false,
// });
// console.log(car.brand)
//
// const obj = {
//   name: "test",
//   age: 34,
//   city: "mumbai",
//   mobile: 1234567890,
// };
// const { name, age, ...rest } = obj;
// console.log(name);
// console.log(age);
// console.log(rest);
// delete obj.city;
// console.log(obj)
//
// const scores = {
//   math: 50,
//   english: 80,
// };
// for (const [key, value] of Object.entries(scores)) {
//   console.log(`${key}: ${value}`);
// }

// const obj = {
//   name: "Nitesh",
//   age: 22,
// };
// delete obj.age;
// console.log(obj);

// const scores = {
//   math: 90,
//   english: 80,
// };

// for (const [key, value] of Object.entries(scores)) {
//   console.log(key, value);
// }

// const user1 = {
//   name: "Nitesh",
// };

// Object.freeze(user1);
// user1.name = "Test";
// console.log(user1.name);

// const laptop = {
//   brand: "HP",
// };
// console.log(Object.getOwnPropertyDescriptor(laptop, "brand"));
// const mobile = {
//   brand: "Apple",
//   price: 1000,
// };
// console.log(Object.getOwnPropertyDescriptor(mobile, "brand"));
// console.log(Object.getOwnPropertyDescriptor(mobile, "price"));

// const nums = [1, 2, 3, 4, 5];
// const result = Object.groupBy(nums, (num) => (num % 2 === 0 ? "even" : "odd"));
// console.log(result);

// const data = {};
// console.log(Object.isExtensible(data));
