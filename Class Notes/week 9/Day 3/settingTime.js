//some interval of time. the setInterval global method take callback function and a duration
//as a parameter. the duration in milliseconds and the callback will be always called in that
// interval of time.
//basic syntax

// function callback() {
//     let name = "Andrea"
//     console.log(name)
// }
// setInterval(callback, 1000)

// //setting time

// function myName() {
//     console.log("Andrea")
// }
// setTimeout(myName, 2000)


// let fruits = ["apple", "orange", "banana", "coconut"]

// fruits.forEach(display);
// fruits.forEach(lowercase);

// function lowercase(element, index, array) {
//     array[index] = element.toLowerCase();
// }

// function upperCase(element, index, array) {
//     array[index] = element.toUpperCase();
// }

// function display(element) {
//     console.log(element);
// }

let names = ["andrea", "angela", "tara", "cameron", "carlos"]

names.forEach((element) => console.log(element.toUpperCase()))
