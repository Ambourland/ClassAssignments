//// 📔 Object
//// Creating an empty object

const house={
  color : "blue",
  bedrooms : 4,
  levels : 1,
  bathrooms : 1,
  address: {
    street: "1234 graham",
    state: "tennessee",
    city: "memphis",
    zipCode: 38234
  }

}

house.garage = "two car";

console.log(house)

// const person={
//     hight:"short",
//     eyeColor:"brown",
//     hairColor:"black",
//     age:45,
//     isMarried:false
// }

// let tech=["HTML", "CSS", "JS", "Python", "React", "Node", "Express", "MangoDB"] //array example
// const Andrea={
//     jobTitle:"teacher",
//     greatAtSpelling:"false",
//     eyeColor:"brown",
//     age:33,
//     skills:["crafts", "HandsOn", "Draws"],
// canSwim:null,
// canDrive:true,
// Honda:{// object in a object
//     color:"green",
//     make:"Accord",
// }
// }

//// Creating an objecting with values
//// Getting values from an object
// console.log(Andrea)
// console.log(Andrea.age)  //pull a spific code area from ojects
// console.log(Andera["age"])   //not working for some reason
// console.log(Andera.honda.color)   //pull an object in a object
/////////////////////////////

// const person = {
//     hieght: "short",
//     eyeColor: "brown",
//     hairColor: "black",
//     age: 45,
//     isMarried: false,

// //// Creating object methods
//     introduce: function () {
//         return `hi i am ${person.hieght} guy with a ${person.eyeColor} eyecolor`
//     }
// }
// console.log(person)
// console.log(person.introduce())

//// Setting new key for an object

//// Object Methods
//// Getting object keys using Object.keys()
//// Getting object values using Object.values()
//// Getting object keys and values using Object.entries()
//// Checking properties using hasOwnProperty()

//..........................................To Do............................................
// Create an empty object called 
// const dog={
//     name:"Spike",
//     legs:4,
//     color:"black",
//     age:3,
// }


// // Print the the dog object on the console
// console.log(dog)
// console.log(dog["age"])
// console.log(dog.age)

// // Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
// const dog={
//     name:"Spike",
//     legs:4,
//     color:"black",
//     age:3,
//     bark : function() {
//         return `woof woof`
//       }

// }



// Get name, legs, color, age and bark value from the dog object
// console.log(dog)
// console.log(dog.bark())