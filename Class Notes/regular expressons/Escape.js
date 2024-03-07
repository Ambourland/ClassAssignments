//Escape character(\) in RegExp
//to match a character having special meaning in regex, you need to use an escape
//sequence prefix with a backslach (\)

// const pattern = /\d/g // d is a special character which means digits 
// const txt = 'This regular expression example was made in January 12, 2020.'
// const matches = txt.match(pattern)
// console.log(matches)  //['1', '2', '2', '0', '2', '0']


const pattern = /\d+/g // d is a special character which means digirs, the + allows you to go past nine
const txt = 'This regular expression example was made in January 12, 2020.'
const matches = txt.match(pattern)
console.log(matches) // ['12', '2020']