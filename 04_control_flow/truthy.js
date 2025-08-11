// TRUTHY and FALSY values

const userEmail = "parugoogle.com" // truthy value(always considered as true)
const userEmail2 = "" // falsy value(always considered as false)

if(userEmail){
    console.log("got user email");
}
else{
    console.log("Don't have user email");
}


// falsy values 
// => false, 0, -0, BigInt, 0n, "", null, undefined, NaN

// truthy values (all except falsy values)
// some surprising ones !!!!!
// => "0", 'false', " ", [], {}, function(){}



// to check an array is empty or not
const usermail = []
if(usermail.length === 0){
    console.log("array is empty");
}

// to check an object is empty or not
const emptyObj = {}
if (Object.keys(emptyObj).length === 0){
    console.log("object is empty");
}




// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10 // => 5
// val1 = null ?? 10 // => 10
//val1 = undefined ?? 15 // => 15
val1 = null ?? 10 ?? 20 // => 10

console.log(val1)




// Ternary Operator 
// condition ? true : false

const icePrice = 100
icePrice >= 80 ? console.log("more than 80") : console.log("less than 80");