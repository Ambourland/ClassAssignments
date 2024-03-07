
//Regular Expressions have a pattern, input and a method
//Square Bracket
//Square brackets are used to create a matching list on any one of the characters in the bracket
const pattern = '[Aa]pple'  //this square bracket means either A or a
const txt = 'Apple and banana are fruits. An old cliche says an apple a day keeps the doctor away.'
const matches = txt.match(pattern)
console.log(matches)


//If you want to look for the bananas
const pattern = /[Aa]pple|[Bb]anana/g   //This square bracket mean either A or a & will search
const txt = 'Apple and banana are fruits. An old cliche say an apple and banana a day keeps the doctor away'
const matches = txt.match(pattern)
console.log(matches)