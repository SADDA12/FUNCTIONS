// Q1 
function q1(number) {
    return number * number
}
let result = q1(5)
console.log(result)

// ARROW FUNCTION
let q1 = (number) => number * number
console.log(q1(5))

// Q2 
const list = [2,4,6,8,10]
let average = list.reduce((x,y) => x + y, 0)/ list.length
console.log(average)

// Q3
function checkNumber(num) {
    if (num % 2 === 0){
        console.log("even")
    }
    else {
        console.log("odd")
    }
}
checkNumber()

// ARROW FUNCTION
let checkNumber = (num) => (num % 2 === 0? "even" : "odd")
console.log(checkNumber())

// Q4
function calculateArea(length, width) {
    let result = length * width
    console.log(result + "px")
}
calculateArea(10,40)

// ARROW FUNCTION
let calculateArea = (length, width) => length * width
console.log(calculateArea(10,40)+"px")

// Q5
function cigarParty(cigars,isWeekend) {
    if (isWeekend) {
        return cigars >= 40
    }
    else {
        return cigars >= 40 && cigars <= 60
    }
}

console.log(cigarParty(45,false))
console.log(cigarParty(39,false))
console.log(cigarParty(45,true))