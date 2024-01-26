// const { lookupService } = require("dns")

// when you update an object you can add or delete an object
// can have a nested object in another object
// console.log("age" in person (object))
// for (let prop in person){
//     console.log(prop)  properties to an object will show
// }

// javascript method is an object 
// to access the other properties of an object within a method og the dame object, we use "this" keyword
// when you use "this" it refures to the object name

// functional programming make lookupService
// higher order 
// for each arrays index programming

// example 
// arrayBuffer.forEach((element, index, arr) => {console.log(index, element, arr)
// })


// let nums = [42,51,24,98,65,12]

// nums.forEach((n,i,nums) => {
//     console.log(n, i, nums)
// })


// practice
// let sum = 0;
// const numbers = [1,2,3,4,5];
// numbers.forEach(num => console.log(num))
// console.log(sum)

// const numbersSquare =numbers.map((num) => num *num)
// console.log()

//practice 2
const names = ["dee", "cam", "ang", "andrea"];
const namesToUpper = names.map((names) => names.toUpperCase())
console.log(namesToUpper)