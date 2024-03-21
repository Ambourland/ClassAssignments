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


// const tpUpper = (text) => {
//      const uppercased = text.toUpperCase
// }
// console.log

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

// function firstName(){
// let name = "Andrea"
//      console.log(name)
// }
// firstName()

// const lastName = () => {
//      let name = "Bourland"
//      console.log(name)
// }
// lastName()

// function timesNum(num1, num2) {
//      let times = num1 * num2
//      console.log(times)
// }
// timesNum(1, 20)

// const square = function(w) {
//          return w * w
     
//      }
//      console.log(square(10))

//add numbers
// function addNum(n) {
// let add = n + n
// console.log(add)
// }
// addNum(5)

// object
// const dog = {
//      name: "Spot",
//      breed: "black-lab",
//      ownerFisrtName: "Charles",
//      ownerLastName: "Payette",
//      skills:[
//           "long jump",
//           "throw ball",
//           "agility",
//           "hunting"
//      ],
//      bark: function(){
//           return "bow wow"
//      },
//      ownerFullName: function(){
//           return (this.ownerFisrtName + " " + this.ownerLastName)
//      }
// }
// console.log(dog)
// console.log(dog.bark())
// console.log(dog.ownerFullName())

// function multiple() {
//      let a = 5
//      let b = 9
//      let mul = a * b
//      console.log(mul)
// }
// multiple()

// function multiple(a, b) {
//      return a * b
// }
// console.log(multiple(5, 9))


// multiple = (a, b) => {
//   let sum = a * b
//   console.log(sum)
// }
// multiple(5, 9)

// myName = () => {
//      let firstName = "Andrea";
//      let lastName = "Bourland";
//      let fullName = firstName + " " + lastName
//      console.log(fullName)
// }
// myName()

// const user = { fisrtName: 'John', lastName: "Doe"};

// let i = 0;
// while(i < 10) {
//      i++;
//      if (i === 5)continues;
//      console.log(i);
// }while (i < 0)

// for(initiealiztion, condition, increment/decrement){
//      // code here
// }

// // exmaple
// for(let i = 0; i <= 5; i++){
//      console.log(i)
// }



// for (let i = 10; i >= 0; i--){
//      console.log(i)
// }
// const numbers = [1, 2, 3, 4, 5]
// let sum = 0
// for(let i = 0; i < numbers.length; i++) {
//      sum = numbers[i]
// }
// console.log(sum)

// let i = 5
// while (i >= 0){
//      console.log(i)
//      i--
// }

// let i = 0
// while(i <= 20){
//      console.log(i)
//      i++
// }


// Declare an array with 3 items; initialize a for loop to run for the length of the array


// Using a for loop print all even numbers up to and including n. Don’t include 0.

// let n1 = 22;

// for (let n = 2; n <= n1; n += 2){
//      console.log(n)
// }

// let i = 2
// do{
//      console.log(i)
//      i += 2
// }while(i <= 22)

// let i = 2
// while (i <= 22){
//      console.log(i)
//      i += 2
// }

// for loops = some code a LIMITED amount of  times   //while loop = infinte amount of times
// count up
// for(let i = 1; i <= 10; i++){
//      console.log(i);
// }

// // count down
// for(let i = 10; i >= 1; i--){
//      console.log(i);
// }


//continue then break
// for(let i = 1; i <= 20; i++){
//      if(i ==13){
//           break;    /*continue = skip number 13*/    /*break = stop counting at that number*/
//      }else{
//           console.log(i)
//      }
// }

// for(let i = 0; i <= 100; i += 2){
//      console.log(i)
// }

// //while loop
// let i = 0
// while (i <= 5){
//      console.log(i)
//      i++
// }
// 0 1 2 3 4 5

// //do while loop
// let i = 0
// do {
//      console.log(i)
//      i++
// }while(i <= 5)


// //for of loop - used for arrays
// for (const element of arr){
//      console.log(num)
// }

// //example
// const numbers = [1, 2, 3, 4, 5]
// for (const num of numbers){
//      console.log(num)
// }

// const webClass = ["html", "css", "js", "react"]
// for (const classes of webClass){
//      console.log(classes.toUpperCase())
// }

// function myName(){
//      let name = "Andrea"
//      console.log(name)
// }

// const add = function(n){
//      return n + n
// }
// console.log(add(1))

// function square(number) {
//      return number * number
// }
// square(10)

// function addNumbers(num1, num2) {
//      let sum = num1 + num2
//      console.log(sum)
// }
// addNumbers(10, 20)


// 1.  Define a callback function with the function, you will use forEach method & the map method.
// const callback = (n) => {
//      return n * 2
//  }
 
//  function cube(callback, n) {
//      return callback(n) * n
//  }
//  console.log(cube(callback, 3))


//  let sum = 0
//  const numbers = [1, 2, 3, 4, 5]
// numbers.forEach(num => sum += num)


// numbersAdd = numbers.map((num) => num + num)



// // 2.  use the forEach method to console.log the numbers in an array
// console.log(sum)
// console.log(numbersAdd)


// const numbers = [2, 3, 40, 50]
// numbers.forEach(mynumbers)

// function mynumbers(num) {
//      console.log(num)
// }


// const names = ["Bridgett", "Kendra", "Kenny"]
// const newNames = names.map((element) => element.toUpperCase())
// console.log(newNames)

// const countries = [
//      "Albania",
//      "Bolivia",
//      "Canada",
//      "Denmark",
//      "Finland",
//      "Ireland"
// ]
// const countriesContainingLand = countries.filter((country) => country.includes('land'))
// console.log(countriesContainingLand)

// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const products = [
//   { product: 'banana', price: 3 },
//   { product: 'mango', price: 6 },
//   { product: 'potato', price: ' ' },
//   { product: 'avocado', price: 8 },
//   { product: 'coffee', price: 10 },
//   { product: 'tea', price: '' },
// ]








// Use filter to filter out countries having six character.
// const countriesWithSixLetters = countries.filter((country) => country.length === 6)
// // console.log(countriesWithSixLetters)

// // Use filter to filter out countries containing six letters and more in the country array.
// const countriesGreaterThanSix = countries.filter((country) => country.length > 6)
// console.log(countriesGreaterThanSix)

// // Use filter to filter out country start with 'E';
// const countryE = countries.filter((country) => country.startsWith("E"))
// console.log(countryE)

// // Use filter to filter out only prices with values.
// const priceValues = products.filter((products) => )
// console.log(priceValue)
// // Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
// function getStringLists = () =>
// Use reduce to sum all the numbers in the numbers array.
// Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
// Explain the difference between some and every



// let arr = [3, 4, 5, 6];

// let modifiedArr = arr.map(function(element){
//   return element * 3;})

// console.log(modifiedArr)



// let text = `Is this 
// all there 
// is`;
// let pattern = /^is/mi;
// let result = text.match(pattern);
// console.log(result)



