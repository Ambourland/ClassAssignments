// /////////////////////////////////Functions//////////////////////////////////////////////////
// building block of your js code
//it is a reusable block of code allow you to perform a spicific task
// Function Declaration
// function functionName(){
//     //code goes here
// }

// functionName()  //calling the function into action

// function greetingsGenerator(name){
//     console.log("hello"+"  "+name)
// }

// greetingsGenerator("Andrea")

// // Function without a parameter and return
// function add(){
//     let num1=5
//     let num2=5
//     let sum=num1+num2
//     console.log(sum)
// }

// add()

// // Function returning value

// function add(){
//     let num1=5
//     let num2=5
//     let sum=num1+num2
//     return sum
// }

// console.log(add())

// // Function with a parameter
// function adding(num1, num2){
//     console.log(num1+ num2)
// }

// adding(555, 89)
// Function with two parameters

// Function with many parameters

//......................................To Do................................................
// Declare a function fullName and it print out your full name.

// function fullName(){
//     console.log("Andrea")
// }
// fullName()
// fullName()

// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

// function fullName(firstName, lastName){
// console.log(firstName, lastName)
// }
// fullName("Andrea", "Bourland")

// // Declare a function addNumbers and it takes two two parameters and it returns sum.

// function addNumbers() {
//     let num1 = 3
//     let num2 = 5
//     let sum = num1 + num2
//     return sum
// }

// console.log(addNumbers())
// // Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
// // function checkSeason(months){
// //     switch (months){
// //         case "September":
// //         case "October":
// //         case "November":
// //             console.log("Autumn")
// //             break;
// //         case "December":
// //         case "January":
// //         case "February":
// //             console.log("Winter")
// //             break; 
// //         case "March":
// //         case "April":
// //         case "May":
// //             console.log("Spring")
// //             break;
// //         case "June":
// //         case "July":
// //         case "August":
// //             console.log("Summer")
// //             break;
// //         default:
// //              console.log("This is not a month")
// //     }
// // }

// function checkSeason(month) {
//     if (month === "September" || month === "October" || month === "November") {
//         console.log("Autumn")
//     } else if (month === "December" || month === "January" || month === "February") {
//         console.log("Winter")
//     } else if (month === "March" || month === "April" || month === "May") {
//         console.log("Spring")
//     } else {
//         console.log("Summer")
//     }

// }

// checkSeason("January")
// checkSeason("June")
// checkSeason("October")

// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

// function capitalizeArray(arr){
//     let country=[]
//     for(const country of arr){
//          console.log(country.toUpperCase())
//     }
   
// }

// capitalizeArray(["us","canada", "barcelona", "Mexico", "Norway"])


// function reverseArry(){
//     let arr=[1,2,3,4,5];
//     arr.reverse();
//     console.log(arr)
// }
// reverseArry()


// function reverseArry(arr){
//     arr.reverse();
//     console.log(arr)
// }
// reverseArry(["a","b","c"])
// reverseArry(["cat","dog","cow"])





//// arrow function


let sum = (a,b) => a + b;

console.log( sum(1,2) );

