// We can specify the length of the substring we look for in a text, using a curly bracket
//example: we are looking for a string with the length of 4 characters.
//ex1
// const
// const
// const
// console.log

//ex2
// const txt = 'This regular expression example was made in December 6, 2019.'





// const txt = 'This regular expression example was made in December 6, 2019.'
// const pattern = /\b[a-zA-Z]{4}\b/g
// const matches = txt.match(pattern)
// console.log(matches)



//////Example look for all the capital I's
const txt = "I Love coding 4, I hope to become the greatest coder there 1997, I fell like I'm the best."
const pattern = /[A-Z]+/g
const matches = txt.match(pattern)
console.log(matches)