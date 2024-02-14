//reduce takes a  callback function. the call back function takes accumulator,
//and optional inital value as a parameter and returns a single value.
//basic syntax
//arr.reduce((acc, curr) => {
    //code goes here
    //return
//}, initalValue)



//example

const numbers = [1, 3, 4, 5, 6]
const sum = numbers.reduce((acc, cur) => acc + cur, 0)
console.log(sum)