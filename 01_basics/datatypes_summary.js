// Primitive : 7 types
// String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsidetemp = null
let userMail;

const id = Symbol('123')
const otherId = Symbol('123')

console.log(id === otherId)

const bigNumber = 34545824354657787n


// Reference (Non Primitive)
// Arrays, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "paramita",
    age: 22,
}

const myFunction = function(){
    console.group("Hello world");
}

console.log(typeof heroes);
console.log(typeof myObj);
console.log(typeof myFunction);


// ********************** Memory ***********************

//Stack (Primitive we get a copy ; changes not reflected),
//Heap (Non-primitive we get a reference ; changes reflected)

let youtubename = "paramitaghoshdotcom"
let anothername = youtubename
anothername = "chaiaurcode"

console.log(youtubename);
console.log(anothername);

let userOne = {
    email: "usergoogle.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "paramitagoogle.com"

console.log(userOne);
console.log(userTwo);