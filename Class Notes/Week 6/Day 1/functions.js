// Name two ways to declare a function.
// Give an example of each
// 1. Declaration
//function functionName{
//   code goes here
//}

// functionName()


//2.Expression
//const name = function()

// What type of function?
// What is the name of the variable?

let a = function() {
  //do something
  let b = function() {
    console.log('Hello World!')  
  }
 }
 a();


 const annyousFun = function(){
    console.log('I am an anonymous function and my value is stored in anonymousFun')
 }

 //self invoking function - an anonymous function that does not have to be called to return a value.

//example
// this a syntax function
 let squaredNum = (function(n) {
    return n * n
  })(10)

  console.log(squaredNum)

//Arrow function
//Arrow function uses arrow instead of the keyword function to declare a function. 
//Let us see both function declaration and arrow function.
  //Example
// This is how we write normal or declaration function
// Let us change this declaration function to an arrow function
function square(n) {
    return n * n
  }
  
  console.log(square(2)) // 4
  
  const square = n => {
    return n * n
  }
  
  console.log(square(2))  // -> 4
  
  // if we have only one line in the code block, it can be written as follows, explicit return
  const square = n => n * n  // -> 4


