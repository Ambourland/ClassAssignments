// //////////////////////////////////Getting Element//////////////////////////////////
/////// Getting elements by tag name
// getElementsByTagName():takes a tag name as a string parameter and this method returns an HTMLCollection object. An HTMLCollection is an array like object of HTML elements. The length property provides the size of the collection. Whenever we use this method we access the individual elements using index or after loop through each individual items. An HTMLCollection does not support all array methods therefore we should use regular for loop instead of forEach.

// general syntax
// document.getElementsByTagName('tagname')

// const allTitles=document.getElementsByTagName('h1')
// console.log(allTitles)
// console.log(allTitles.length)

// for(let i=0; i<allTitles.length; i++) {
// console.log(allTitles[i])
// }

/////// Getting elements by class name
// getElementsByClassName() method returns an HTMLCollection object. An HTMLCollection is an array like list of HTML elements. The length property provides the size of the collection. It is possible to loop through all the HTMLCollection elements. See the example below

//syntax
// document.getElementsByClassName('classname')

// const allClasses = document.getElementsByClassName('title')
// console.log(allClasses)
// console.log(allClasses.length)
// for(let i = 0; i < allClasses.length; i++) {
//     console.log(allClasses[i])
// }


/////// Getting an element by id
// getElementsById() targets a single HTML element. We pass the id without # as an argument.

//syntax
// document.getElementById('id')
// const allId = document.getElementsById('first-title')
// console.log(allId)
// console.log(allId.length)


/////// Getting elements by using querySelector methods
// The document.querySelector method can select an HTML or HTML elements by tag name, by id or by class name.
// querySelector: can be used to select HTML element by its tag name, id or class. If the tag name is used it selects only the first element.

// let firstTitle = document.querySelector("h1") // first h1
// console.log(firstTitle)
// let firstTitle = document.querySelector("first-title") // first title
// console.log(firstTitle)
// let firstTitle = document.querySelector(".title") //first title
// console.log(firstTitle)

// querySelectorAll: can be used to select html elements by its tag name or class. It returns a nodeList which is an array like object which supports array methods. We can use for loop or forEach to loop through each nodeList elements.

// const allTitles = document.querySelectorAll(".title")
// console.log(allTitles)
// for(let i = 0; i < allTitles.length; i++) {
// console.log(allTitles)
// }

// allTitles.forEach(title => CSSConditionRule.log(title))

// //////////////////////////////////// Adding attribute/////////////////////////////////////

// /////// Adding attribute using setAttribute
// /////// Adding attribute without setAttribute
// /////// Adding class using classList
// /////// Removing class using remove
// ///////////////////////////////// Adding Text to HTML element/////////////////
// /////// Adding Text content using textContent
// const title = document.querySelectorAll('h1')
// title[3].textContent = "Fourth Title"

// ///////// Adding Text Content using innerHTML
// ////////////// Text Content
// ////////////// Inner HTML
// const list = `
// <li>Banana</>
// <li>orange</>
// <li>Grape</>
// `
// const ul = document.querySelector('ul')
// ul.innerHTML = list

// ul.innerHTML = ""
//////////////////////////////////////// Adding style/////////////////////////////
/////// Adding Style Color
// const allTitles = document.querySelectorAll("h1")
// allTitles.forEach((title, i) => {
//     if(i%2===0) {
//         title.style.color = "green"
//     }else{
//         title.style.color = "red"
//     }
// })
// console.log(allTitles)

/////// Adding Style Background Color
// const allTitles = document.querySelectorAll("h1")
// allTitles.forEach((title, i) => {
//     if(i%2===0) {
//         title.style.backgroundColor = "green"
//     }else{
//         title.style.backgroundColor = "red"
//     }
// })
// console.log(allTitles)
/////// Adding Style Font Size
// const allTitles = document.querySelectorAll("h1")
// allTitles.forEach((title, i) => {
//     if(i%2===0) {
//         title.style.fontSize  = "24px"
//     }else{
//         title.style.fontSize = "10px"
//     }
// })
// console.log(allTitles)


const allTitles = document.querySelectorAll("h1")
allTitles.forEach((title, i) => {
       title.style.fontSize  = "24px"
    if(i%2===0) {
        title.style.color = "red"
        title.style.backgroundColor = "blue"
        
    }else{
        title.style.color = "yellow"
        title.style.backgroundColor = "orange"

    }
})
console.log(allTitles)