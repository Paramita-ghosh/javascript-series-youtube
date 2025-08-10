// function sayMyName(){
//     console.log("P");
//     console.log("A");
//     console.log("R");
//     console.log("A");
//     console.log("M");
//     console.log("I");
//     console.log("T");
//     console.log("A");
// }

// sayMyName()


function add2Numbers(number1, number2){ // parameters
    console.log(number1 + number2);
}
add2Numbers(3, 4) // arguments
const result = add2Numbers(3, 5)
console.log("Result: ", result); // result => undefined


function add2Numbers(number1, number2){ 
    let result = number1 + number2;
    return result;
    console.log("Paramita") // unreachable; function ends at return
}
const result2 = add2Numbers(3, 5)
console.log("Result: ", result2); // now result stores value 8 



function loginUserMessage(username){
    return `${username} just logged in`
}

console.log(loginUserMessage("Paramita"))
console.log(loginUserMessage()) // undefined 


// to check if username is not given, we can use if statement 
function loginUserMessage(username){
    if(username === undefined){ // we can also use if(!username)
        console.log("Please enter a username")
        return; // to stop the execution here
    }
    return `${username} just logged in`
}
console.log(loginUserMessage())




function calculateCartPrice(...num1){ // ... => rest operator
    return num1
}

console.log(calculateCartPrice(2));
console.log(calculateCartPrice(200, 400, 500)); // returns an array

function calculateCartPrice(val1, val2, ...num1){ // ... => rest operator
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000)); // val1 => 200, val2 => 400, rest goes to num1




const user = {
    username: "Paramita", 
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user) 

//          OR

handleObject({
    username: "sammy", 
    price: 359
})




const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))
//      OR  
console.log(returnSecondValue([500, 700, 300, 800]))