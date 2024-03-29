//////////////////////////////// HTML5 Web Storage////////////////////////////
// sessionStorage
// localStorage
//Cookies 
//https://www.youtube.com/watch?v=GihQAC1I39Q



// Use case of Web Storages
//////////////////////////////// HTML5 Web Storage Objects/////////////////////


// / Web Storage objects:

// localStorage - to display the localStorage object
// localStorage.clear() - to remove everything in the local storage
// localStorage.setItem() - to store data in the localStorage. It takes a key and a value parameters.
// localStorage.getItem() - to display data stored in the localStorage. It takes a key as a parameter.
// localStorage.removeItem() - to remove stored item form a localStorage. It takes key as a parameter.
// localStorage.key() - to display a data stored in a localStorage. It takes index as a parameter.
// Setting item to the localStorage
// Getting item from localStorage
// Clearing the localStorage

localStorage.setItem("firstName", "Andrea");   //localStorage.setItem(key, value)
console.log(localStorage);
localStorage.setItem("lastName", "Bourland")
let firstName = localStorage.getItem("firstName");
console.log(firstName);
// localStorage.clear()
localStorage.removeItem("firstName")


//create an array of fruits
const fruits = ["grapes", "apples", "oranges", "pineapple"]

//making an array into sting format in order to store into our local storage
const fruitsJson = JSON.stringify(fruits, undefined, 3)

// setting or storing our fruits array into our local storage
localStorage.setItem("fruits", fruitsJson)

//get fruits item from our local storage but in a string format
let fruitsData = localStorage.getItem("fruits")

//change array from string format to an actual array
const fruitsJsonParse = JSON.parse(fruitsData, undefined, 3)
console.log(fruitsJsonParse)