// let userName = "Rahul";
// let age = 25;
// let isStudent = true;
// let bigNumber = 12345678901234567890n;
// let userId = Symbol("id");
// let address;
// let phoneNumber = null;

// console.log(userName);
// console.log(age);
// console.log(isStudent);
// console.log(bigNumber);
// console.log(userId);
// console.group(address);
// console.log(phoneNumber);

// let studentName = "Amit";
// let studentAge = 22;
// let isPassed = true;
// let studentPhone = null;
// let studentId = Symbol("studentId");
// let largeRegistrationNumber = 9876543210123456789n;
// console.log(studentName);
// console.log(studentAge);
// console.log(isPassed);
// console.log(studentPhone);
// console.log(studentId);
// console.log(largeRegistrationNumber);

// let name = "Arjun";
// let age = 28;
// let isActive = true;
// let accountId = 12345678901234567890n;
// let uniqueId = Symbol("userId");
// let middleName;
// let avatar = null;
// console.log("name", typeof name);
// console.log("age", typeof age);
// console.log("isActive", typeof isActive);
// console.log("accountId", typeof accountId);
// console.log("uniqueId", typeof uniqueId);
// console.log("middleName", typeof middleName);
// console.log("avatar", typeof avatar);

// let a = "100";
// let b = 100;
// let c = true;
// let d;
// let e = null;
// console.log("a", typeof a);
// console.log("b", typeof b);
// console.log("c", typeof c);
// console.log("d", typeof d);
// console.log("e", typeof e);

// let firstName = "Rahul";
// let age = 25;
// let isDeveloper = true;
// console.log(firstName, age, isDeveloper);

// console.log(typeof "50");
// console.log(typeof 50);

// let courseName = "JavaScript";
// let totalStudents = 50;
// let isCourseActive = true;
// let courseViews = 123456789012345678n;
// let courseId = Symbol("course");
// let instructor;
// let certificate = null;

// console.log("courseName", typeof courseName);
// console.log("totalStudents", typeof totalStudents);
// console.log("courseViews", typeof courseViews);
// console.log("courseId", typeof courseId);
// console.log("instructor", typeof instructor);
// console.log("certificate", typeof certificate);

// let numbers = [10, 20, 30, 40, 50];
// console.log(numbers);

// console.log(numbers.length);

// let numbers = [10, 20, 30];
// numbers.push(40);
// console.log(numbers);

// let numbers = [10, 20, 30, 40];
// numbers.pop(40);
// console.log(numbers);

// let fruits = ["Mango", "Banana"];
// fruits.unshift("Apple");
// console.log(fruits);

// let fruits = ["Apple", "Mango", "Banana"];
// fruits.shift();
// console.log(fruits)
//
// let numbers = [10, 20, 30, 40, 50];
// console.log(numbers.includes(30));
// console.log(numbers.includes(100));

// let fruits = ["Apple", "Mango", "Banana", "Orange"];
// console.log(fruits.indexOf("Banana"));

// let numbers = [10, 20, 30, 20, 40, 20];
// console.log(numbers.lastIndexOf(30));

// let numbers = [10, 20, 30, 40, 50];
// console.log(numbers.slice(1, 4));

// let fruits = ["Apple", "Mango", "Banana", "Orange"];
// console.log(fruits.splice(2, 1));

// let numbers = [10, 20, 40, 50];
// console.log(numbers.splice(2, 0, 30));

// let a = [1, 2, 3];
// let b = [4, 5, 6];
// console.log([...a, ...b]);
// console.log(a.concat(b));

// let numbers = [10, 20, 30, 40];
// numbers.forEach((number) => {
//   console.log(number);
// });

// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers.map((val) => val * 2));

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(
//   "even number",
//   numbers.filter((val) => val % 2 === 0),
// );
// console.log(
//   "odd number",
//   numbers.filter((val) => val % 2 !== 0),
// );

// let numbers = [20, 35, 70, 40, 90];
// console.log(numbers.find((val) => val > 50));

// let numbers = [1, 3, 7, 8, 10];
// console.log(numbers.findIndex((val) => val % 2 === 0));

// let numbers = [10, 20, -5, 40];
// console.log(
//   "negative number",
//   numbers.some((val) => val < 0),
// );

// let numbers = [10, 20, 30, 40];
// console.log(
//   "All numbers are positive",
//   numbers.every((val) => val > 0),
// );

// let numbers = [10, 20, 30, 40];
// console.log(numbers.reduce((a, b) => a + b, 0));

// let numbers = [10, 50, 20, 100, 30];
// console.log(Math.max(...numbers));
// console.log(Math.min(...numbers));

// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers.reverse());
// const ascorder = numbers.sort((a, b) => a - b);
// console.log(ascorder);
// const dscorder = numbers.sort((a, b) => b - a);
// console.log(dscorder);
// let fruits = ["Apple", "Mango", "Banana", "Orange"];
// console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits.at(-1));

// let numbers = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// console.log(numbers.flat())
//

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let even = 0;
// let odd = 0;
// for (i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     even++;
//   } else {
//     odd++;
//   }
// }
// console.log("even", even);
// console.log("odd", odd);

// let numbers = [10, 20, 30, 40, 50];
// sum = 0;
// for (i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }
// console.log(sum);
// function linearSearch(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) {
//       return i;
//     }
//   }

//   return -1;
// }
// let numbers = [10, 20, 30, 40, 50];
// let target = 40;
// console.log(linearSearch(numbers, target));

// let numbers = [1, 2, 2, 3, 4, 4, 5];
// console.log(...new Set(numbers));

// let numbers = [1, 2, 2, 3, 3, 3];
// let frequency = [];

// for (let number of numbers) {
//   if (frequency[number]) {
//     frequency[number]++;
//   } else {
//     frequency[number] = 1;
//   }
// }
// for (let number in frequency) {
//   console.log(number, ":", frequency[number]);
// }

// let numbers = [1, 2, 3, 2, 4, 5, 3];
// let frequency = [];
// let duplicates = [];
// for (let number of numbers) {
//   frequency[number] = (frequency[number] || 0) + 1;
// }
// for (let number in frequency) {
//   if (frequency[number] > 1) {
//     duplicates.push(Number(number));
//   }
// }
// console.log(duplicates);

// let numbers = [0, 1, 0, 3, 12];
// let result = [...numbers.filter((n) => n !== 0), ...numbers.filter((n) => n == 0)];
// console.log(result);

// let numbers = [10, 30, 40, 50, 60];
// console.log(numbers.reduce((a, b) => a + b, 0 - 170));

// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers.reverse());

let numbers = [10, 20, 30, 40, 50];
// let numberWise = numbers.sort((a, b) => b - a);
// let isSorted = numberWise.every((number, index) => index === 0 || numberWise[index - 1] >= number);
// console.log(isSorted);
// let isSorted = numbers.every((number, index) => index === 0 || numbers[index - 1] <= number);
// console.log(isSorted);
// let numberDesc = [50, 40, 30, 20, 10];
// let isSorted = numbers.every((num, index) => index === 0 || numbers[index - 1] <= num);
// console.log(isSorted);
// let isSorted2 = numberDesc.every((num, index) => index === 0 || numberDesc[index - 1] >= num);
// console.log(isSorted2);

// let a = [1, 2, 3, 4];
// let b = [3, 4, 5, 6];
// let intersection = a.filter((number) => b.includes(number));
// console.log(intersection);
// let a = ["nitesh", "arvind", "urvashi", "sameet", "pamisha"];
// let b = ["nitesh", "arvind"];
// let intersection = a.filter((val) => b.includes(val));
// console.log(intersection);

// const score = 68;
// const text = "";
// if (score >= 90) {
//   text = "A+";
// } else if (score >= 70) {
//   text = "B+";
// } else if (score >= 60) {
//   text = "C+";
// } else if (score >= 40) {
//   text = "D";
// } else {
//   text = "Failed";
// }
