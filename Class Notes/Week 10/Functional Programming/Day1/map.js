// iterate through an attay, modifies the array elements and returns a new array. takes a cal
//back function with elements, index and array parameters
//example
const numbers = [1, 2, 3, 4, 5]
const numbersSquare = numbers.map((num) => num * num)

console.log(numbersSquare)