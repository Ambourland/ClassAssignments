//A regular expression or RegExp is a small programming language 
//that helps to find pattern in data. A RegExp can be used to check if 
//some pattern exists in a different data types. To use RegExp in 
//JavaScript either we use RegExp constructor or we can declare a RegExp 
//pattern using two forward slashes followed by a flag. We can create a pattern 
//in two ways

//To declare a string we use a single quote, double quote a backtick 
//to declare a regular expression we use two forward slashes 
//and an optional flag. The flag could
// be g, i, m, s, u or y

//Parameters
//A regular expression takes two parameters. One required search pattern 
//and an optional flag.

//Pattern
//A pattern could be a text or any form of pattern which some sort of similarity.
// For instance the word spam in an email could be a pattern we are 
//interested to look for in an email or a phone number format number might 
//be our interest to look for.

//Flags
//Flags are optional parameters in a regular expression which determine 
//the type of searching. Let us see some of the flags:

//g: a global flag which means looking for a pattern in whole text
//i: case insensitive flag(it searches for both lowercase and uppercase)
//m: multiline

//Creating a pattern with RegExp Constructor 

//without flag
// let pattern = 'love'
// let regEx = new RegExp(pattern)

// //Declaring regular expression with global flag and case insensitive flag.

// let pattern = 'love'
// let flag = 'gi'
// let regEx = new RegExp(pattern, flag)

// //Declaring a regex pattern using RegExp object. 
// //Writing the pattern and the flag inside the RegExp constructor

// let regEx = new RegExp('love','gi')

// //test for a match
// const str = 'I love JavaScript'
// const pattern = /love/
// const result = pattern.test(str)
// console.log(result)

// const txt = `Python is the most beautiful language that a human being has ever created. \ I recommend 
// python for a first programing language`

// matchReplaced = txt.replace(/python|Python/, 'JavaScript')


// const txt = `%I a%m te%%a%%ch%r% a%n%d %% I l%o%ve te%ach%ing.\
// T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%ing a%n%d e%m%p%ow%er%ing \
// p%e%o%ple.\
// I fo%und te%a%ching m%ore i%n%t%er%%ting t%h%an any other %jobs.\
// D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.`

// matches = txt.replace(/%/g, '')
// console.log(matches)

// const txt = 'Apple and banana are fruits. An old cliche saya an apple a day keepthe doctor away.'
// const pattern = /[Aa]pple/g // this bracket means either A or a
// const matches = txt.match(pattern)
// console.log(matches)

// const txt = 'Apple and banana are fruits. An old cliche saya an apple a day keepthe doctor away.'
// const pattern = /[Aa]pple|[Bb]anana/g
// const matches = txt.match(pattern)
// console.log(matches)




// // Regex 
// // Exercise 1: Simple String Matching
// // Write a regular expression to find all occurrences of the word "JavaScript" in a text. 

// let regex = /JavaScript/g;

// // Exercise 2: Case-Insensitive Matching
// // Modify the previous regular expression to perform a case insensitive search

// let regex = /JavaScript/gi;

// // Exercise 3: URL Parsing
// // Write a regular expression to parse the domain name from a URL 

// let regex = /^(?:https?:VV)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/;

// Exercise 4: Password Validation




//testing for a match
const str = `love JavaScript, I LOVE the it, Is a programing language
I love regex, the way it makes using Java`
const pattern = /^love/ig
const result = str.test(pattern)
console.log(result)
