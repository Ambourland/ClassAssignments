// A callback is a function which can be as parameter to other function. Se {e the example below.A

// // a callback function, the name of the function could be any name
// const callback = (n) =>{
//     return n ** 2
// }
// const addNum = (n) =>{
//    return n + n
// }

// function square(addNum, n) {
//     return addNum(n) + n
// }
// console.log(square(addNum, 3))

// // //function that takes other function as a callback
// function cube(callback, n) {
//     return callback(n) * n
// }

// console.log(cube(callback, 3))

// // Higher order functions return functions as a value
// // callback function
// const higherOrder = n => {
//     const doSomething = m => {
//         const doWhatEver = t => {
//         }
//         return doWhatEver
//     }
//     return doSomthing
// }

// console.log(higherOrder(2)(3)(4))


// // let us see where we use call back functions. For instance the for each mothod uses call back
// const numbers = [1, 2, 3, 4, 5]
// const sumArray = arr => {
//   let sum = 0
//   const callback = function(element) {
//     sum += element
//   }
//   arr.forEach(callback)
//   return sum

// }
// console.log(sumArray(numbers))

// //set interval is used to do some activity within some interval of time
// //syntax
// function callback() {
//     // code goes here
// }

// setinterval(calback, duration)

// //example
// function sayHello() {
//     console.log('Hello')
// }
// setinterval(sayHello, 1000)



// function english() {
//     console.log('Hello')
// }
//  function french() {
//     console.log('Bonjour')
//  }
//  setInterval(french, 8000)
//  setInterval(english, 10000)


// setTimeout(callback, duration) // duration in milliseconds

// function sayHello() {
//     console.log('Hello')
// }
// setTimeout(sayHello, 2000)

// practice

// function english() {
//     console.log('Hello, my name is Andrea')
// }
//  function french() {
//     console.log("Bonjour, je m'appelle Andrea")
//  }
//  setTimeout(french, 5000)
//  setTimeout(english, 10000)



// // This is my callback function
// const myCallBack = (n) => {
//     return n * 2
// }
// // this function will use the callback (myCallBack)
// function cube(myCallBack, n) {
//     return myCallBack(n) * n
// }
// console.log(cube(myCallBack, 2))

// create callback function called (myCallback2)
const myCallback2 = (n) => {
    return n * n
}

//this will call my function (myCallback)
function add(myCallback2, n) {
    return myCallback2(n) + n
}
console.log(add(myCallback2, 2))
