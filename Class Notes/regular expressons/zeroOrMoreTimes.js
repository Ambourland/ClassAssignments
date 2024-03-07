//The * character indicates zero or more times


// const pattern = /[A].*/g      //. any character, + any one or more times
// const txt = 'Apple and banana are fruits'
// const matches = txt.match(pattern)
// console.log(matches)   //['and banana are fruits']


//Create a pattern using the followoing input, pattern will look for the letter J and all of the text comes the letter J

const txt = "I really love programming, but JavaScript is my favorite programming language"
const pattern = /[J].*/g
const matches = txt.match(pattern)
console.log(matches)