//returning functions
//Higher order function return function as a value
// const higherOrder = (n) => {
//     const doSomething = (m) => {
//         const doWhatEver = (t) => {
//             return 2 * n + 3 * m + t
//         }
//         return doWhatEver
//     }
//     doSomething
// }
// console.log(higherOrder(2)(3)(10))



//let ussee where we use call back functions. for instance the forEach method uses a call back
const numbers = [1, 2, 3, 4, 5]
const sumArray = (arr) => {
    let sum = 0 
    const callback =  function(element){
        sum += element
    }
    arr.forEach(callback)
    return sum
}
console.log(sumArray(numbers))