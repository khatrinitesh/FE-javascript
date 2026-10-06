// find maxiumum number
// const nums = [4, 2, 9, 1, 7]
// const max = nums.reduce((acc,curr) => {
//     return curr > acc ? curr : acc 
// },nums[0])
// console.log(max)

// remove duplicates 
// const nums = [1, 2, 2, 3, 4, 4, 5]
// const uniqueNums = [...new Set(nums)]
// console.log(uniqueNums) 

// find even numbers 
// const nums = [1, 2, 3, 4, 5, 6]
// const evenNums = nums.filter((num) => num % 2 === 0)
// console.log(evenNums)

// sum all numbers 
// const nums = [10,20,30,40,50]
// const total = nums.reduce((a,b) => a+b,0)
// console.log(total)

// find second largest number 
// const nums = [10, 5, 8, 20, 15]
// const unique = [...new Set(nums)]
// const secondLargest = unique.sort((a,b) => b-a)[1]
// console.log(secondLargest)

// count occurrences of each fruit
// const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple','apple']
// const count = fruits.reduce((acc,fruit) => {
//     acc[fruit] = (acc[fruit] || 0) + 1
//     return acc
// }, {})
// console.log(count)

// find an item
// const users = [
//   { id: 1, name: 'John' },
//   { id: 2, name: 'Alex' },
//   { id: 3, name: 'Sam' },
// ]
// const result = users.find((user) => user.id===2)
// console.log(result)

// check if value exists 
// const nums = [10, 20, 30, 40]
// const result = nums.some((num) => num === 30)
// console.log(result)

// check if all numbers are positive 
// const nums = [2, 5, 7, 10]
// const allPositive = nums.every((num) => num >= 0)
// console.log(allPositive)

// reverse an array without reverse 
// const nums = [1, 2, 3, 4]
// const reverse = nums.reduce((acc, curr) => [curr, ...acc], [])
// console.log(reverse)

// const nums = [[1, 2], [3, 4], [5, 6]]
// const result = nums.flat()
// console.log(result)


// group objects by property 
// const users = [
//   { name: 'John', role: 'admin' },
//   { name: 'Sam', role: 'user' },
//   { name: 'Alex', role: 'admin' },
// ]

// const grouped = users.reduce((acc, user) => {
//   if (!acc[user.role]) {
//     acc[user.role] = []
//   }
//   acc[user.role].push(user)
//   return acc
// }, {})

// console.log(grouped)

// 
// const nums = [1, 2, 3, 4, 5, 6]
// const result = nums.map((num) => num * 2).reduce((sum,num) => sum+num,0)
// console.log(result)

