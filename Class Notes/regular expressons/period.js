//Period (.)
//Period - Used to include any character that comes after the period

// const pattern = /[a]./g //this square bracket means a and . means any character except new line
// const txt = 'Apple and banana are fruits'
// const matches = txt.match(pattern)
// console.log(matches) // ['an', 'an', 'an', 'a', 'ar']

//Find all of the letter b and the letter directly behind it(uppercase & lowercase)

//input string
const str = "I love blue Balloons and brown teddy BEARS because i like to see the balloons float and the bears play with bears learn their abc"
const pattern = /[b]../ig
const matches = str.match(pattern)
console.log(matches)