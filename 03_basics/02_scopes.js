// let a = 10
// const b = 20
// var c = 30

// console.log(a); // 10
// console.log(b); // 20
// console.log(c); // 30


 let a = 300 // global scope

if(true) { // block scope
    let a = 10
    const b = 20
    console.log("INNER: ", a);
    // var c = 30
}

console.log(a); // error
// console.log(b); // error
// console.log(c); // 30


// if we run  the console in windows , the global scope
// is different from the one we run using node




function one(){
    const username = "paramita"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); // can't be accessed outside function two()

    two()
}
one()




// ++++++++++ INTERESTING +++++++++++++

// addOne(5) can also be wriiten here
function addone(value){ // 1
    return value + 1
}
addone(5)


//addTwo(5) cannot be wriiten here : HOISTING => variable cannot be used before declaration
const addTwo = function(num){ // 2
    return num + 2
}
addTwo(5)