// Scope
// Window Global Object
a = 'Javascript'
b = 10

function letsLearnScope() {
    console.log(a, b)
    if (true){
        console.log(a,b)
    }
}
console.log(a,b)
// Global scope
let a = 'JS'
let b = 10
function letLearnScope() {
    console.log(a,b)
    if (true){
        let a = 'Python'
        let b = 100
        console.log(a,b)
    }
}
// Local scope
let a = 'JS'
let b = 10

function letsLearnScope() {
    console.log(a,b)
    let value = 'false'
    if (true){
        let a = 'Python'
        let b = 20
        let c = 30
        let d = 40
        console.log(a,b)
    }
}