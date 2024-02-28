//when we destructure an array we use the spread operator(...) to get
//the rest elements as array. In addition to that we spread operator to 
// spread array elements to another array.



// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let [num1, num2, num3, ...rest] = nums

// console.log(num1, num2, num3)
// console.log(rest)



// const countries = [
//     'Germany',
//     'France',
//     'Belgium',
//     'Finland',
//     'Sweden',
//     'Norway',
//     'Denmark',
//     'Iceland'
// ]

// let [gem, fra, , ...nordicCountries] = countries

// console.log(gem)
// console.log(fra)
// console.log(nordicCountries)

// //using an array
// const evens = [0, 2, 4, 6, 8, ]

// //using the spread operator to copy an object
// const user = {
//     name: 'Asabeneh',
//     title: 'Programer',
//     country:'Finland',
//     city: 'Helsinki'
// }

// const copiedUser = {...user}
// console.log(copiedUser)




const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = [
    'Finland',
    'Estonia',
    'Sweeden',
    'Denmark',
    'Norway'
]
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
}


// destructure and assign the elements of constants array to e, pi, gravity,
//humanBodytemp, waterBoilingTemp.

//destructure and assign the elements of countries array to fin, est, sw,
//den, nor

//destructure the rectangke object by its properties or keys.

let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants
console.log(constants)

let [fin, est, sw, den, nor] = countries
console.log(countries)
let {width, height, area, perimeter} = rectangle
console.log(rectangle)