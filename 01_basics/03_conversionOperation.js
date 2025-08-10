let score = true

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let loggedIn = ""
let BooleanLoggedIn = Boolean(loggedIn)
console.log(BooleanLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Paramita" => true


let someNo = 33
let stringNo = String(someNo)
console.log(stringNo)
console.log(typeof stringNo)

// *********************** Operations ************************

let value = 3
let negValue = -value
console.log(negValue)

// console.log(2 + 2)
// console.log(2 - 2)
// console.log(2 * 2)
// console.log(2 ** 3)
// console.log(2 / 3)
// console.log(2 % 3)

let str1 = "hello"
let str2 = " hitesh"
let str3 = str1 + str2
console.log(str3)

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log((3 + 4) * 5 % 3);

console.log(+true); //1
console.log(+""); //0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++ // read about prefix and postfix 
console.log(gameCounter);
