/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/

// function fizzy(x){
//   if(x is divisible by 3 but not 5){
//     return "fizz";
//   }else if (x is divisible by 5 and not 3){
//     return "buzz";
//   }else if(x is divisible by 5 and 3){
//     return "fizzBuzz";
//   }else {
//     return *
//   }

// }

function fizzy(x){
  if(x % 3 === 0 && x % 5 === 0){
    return "FizzBuzz"}
  else if(x % 3 === 0){
    return "Fizz"
  } else if(x % 5 === 0){
    return "Buzz"
  } else{
    return x
  }
}


/**********************************
 *      OUR CODE GOES BELOW.      *
 * THIS IS FOR INTERNAL USE ONLY. *
 * DO NOT ADD OR CHANGE ANYTHING! *
 **********************************/


if (typeof fizzy === "undefined") {
  fizzy = undefined;
}

module.exports = {
  fizzy,
};
