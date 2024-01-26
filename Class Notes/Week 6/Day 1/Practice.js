// // function myName(){
// //     let name = "Andrea"
// //     console.log(name)
// // }

// // myName()

// // let num = function(n) {
// //     return n * n
   
// // }
// //  console.log(num(4))


// // let addNum = (function(n) {
// //     return n + n
// //   })(4)

// //   console.log(addNum)

//   // const addNum = n => {
//   //   return n + n 
//   // }

//   // console.log(addNum(10))



// //   function greeting() {
// //     let greet = "Hello World"
// //     console.log(greet)
// //   }

// // // greeting()

// // function greeting() {
// //   console.log("Hello World");
// // }

// // greeting()


// // function areaOfCircle(r) {
// //   let area = Math.PI * r * r
// //   return area
// // }

// // console.log(areaOfCircle(10))


// // function square(number) {
// //   return number * number
// // }

// // console.log(square(10))



// // // function with two parameters
// // functionName(parm1, parm2)//during calling or invoking two arguments needed
// // //function without parameter doesn't take input, so lets make with parameters
// // function sumTwoNumbers(numOne, numTwo) {
// //   let sum = numOne + numTwo
// //   console.log(sum)
// // }
// // sumTwoNumbers(10, 20) // calling function
// //if  function doesn't return it doesn't store data, so it should return

// function printFullName(firstName, lastName) {
//   return `${firstName} ${lastName}`
// }
// console.log(printFullName('Andrea', 'Bourland'))

// function sumArrayValues(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum;
// }

// const numbers = [1,2,3,4,5];
//      ///calling a function
//      console.log(sumArreyValues(numbers));

//      const areaOfCircle = (radius) => {
//       let area = Math.PI * radius * radius;
//       return area;
//      }
//      console.log(areaIfCircle(10))

//      //this function suing declarration
//      function areaOfCircle(radius) {
//       let area = Math.PI * radius * radius;
//       return area;
//      }
//      console.log(areaOfCircle(10))

//      //Unlimited number of parameters in regular function
//      //A function declaration provides a function scoped arguments array like object. 
//      //Any thing we passed as argument in the function can be accessed 
//      //from arguments object inside the functions. Let us see an example
//      // Let us access the arguments object

//      function sumAllNums() {
//       console.log(arguments)
//      }

//      sumAllNums(1, 2, 3, 4)
     

//      function sumAllNums() {
//       let sum = 0
//       for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i]
//       }
//       return sum
//      }

//      console.log(sumAllNums(1, 2, 3, 4)) //10
//      console.log(sumAllNums(10, 20, 13, 40, 10)) //93
//      console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40)) //173
     


//      //using an arrow function

//      //let us access the arguments object

//      const sumAllNums = (...args) => {
//       //console.log(arguments), arguments object not found in arrow functioin
//       // instead we use a parameter followed by spread operator (...)
//       console.log(args)
//      }

//      sumAllNums(1, 2, 3, 4)
//      //[1, 2, 3, 4]

//      //anonymous function - function without a name
//      const anonymousFun = function() {
//       console.log('I an a anonymous function and my value is stored in anonymousFun')
//      }


//      //expression function

//      //function expression
//      //this finction is assiged to a variable
//      const square = function(n) {
//       return n * n
//      }
//      console.log(square(2))// -> 4

     


     // function greetings(name = 'Andrea') {
     //  let message = `${name}, welcome to 30 Days Of JavaScript!`
     //  return message
     // }

     // console.log(greetings())
     // console.log(greetings('Angela'))
     // console.log(greetings('Cameron'))
     // console.log(greetings('Khadijha'))
     // console.log(greetings('Sadie'))


// function areaOfCircle(radius) //or radius = 10 instead in consol.log
//  {
//      let area = Math.PI * radius * radius;
//      return area;
// }
// console.log(areaOfCircle(10))

//arrow
// const areaOfCircle = r => {
//      let area = Math.PI * r * r;
//      return area;
// }
// console.log(areaOfCircle(10))


const tpUpper = (text) => {
     const uppercased = text.toUpperCase
}
console.log

// let is declare a block scoop. Is used for local varables

// the const keyword in JavaScript is used to 
// this means that the variable cannot be reassigned to a new value
// Function scope is created when a function is declared, Variables and functions declared in a function's scope are only visible within that function.
// block scope in javascript refers
// a block of code is a group of statements that are enclosed in curly braces ({}).
// variables and functions declaredin a block's scope are only visible within that block.

// four functions declartion function, expression function, anonymous function, and arrow function
// Declaration function
// function myFunction() {
//      //code
// }
// myFunction()



// //Expression function
// function myName() {
//      console.log("Andrea")
// }
// myName()

// //Anonymous function
// const add = function(n) {
//      return n + n
// }
// console.log(add(1))


// // Anonymous function
// const sum = function(n) {
//      return n * n
// }
// console.log(sum(4))

// //Arrow function
// const myFunction = n => {
//      //code
// }
// myFunction()

// //Creating a function with a parameter
// function myName(param1) {
//      let name = "Andrea";
//      console.log(name)
// }
// myName("Carlos")


// function square(number) {
//      return number * number
// }
// square(10)

// //function with two parameters
// function functionName(parm1, parm2) {
//      // code here
// }
// functionName(parm1, parm2)

// // example

// function addNumbers(num1, num2) {
//      let sum = num1 + num2
//      console.log(sum)
// }
// addNumbers(10, 20)


//create a declaration function that prints name to the console
//change the declaration functoin to an arrow function
//create a function that multiplies two numbers and paa both numbers in as parameter
//create an expression

function firstName(){
let name = "Andrea"
     console.log(name)
}
firstName()

const lastName = () => {
     let name = "Bourland"
     console.log(name)
}
lastName()

function timesNum(num1, num2) {
     let times = num1 * num2
     console.log(times)
}
timesNum(1, 20)

const square = function(w) {
         return w * w
     
     }
     console.log(square(10))