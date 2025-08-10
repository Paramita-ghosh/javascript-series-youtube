// singleton
//Object.create // created using constructor


// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Paramita",
    "full name": "Paramita Ghosh",
    [mySym]: "myKey1", // syntax for using symbol
    age: 18, 
    location: "Jaipur",
    email: "parugoogle.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// here both ways are valid
console.log(jsUser.name);
console.log(jsUser["name"]);

console.log(jsUser["full name"]); // valid
// console.log(jsUser."full name"); // invalid

console.log(typeof jsUser[mySym]);



// modifying values
jsUser.email = "paruchatgpt.com"
console.log(jsUser);

// Object.freeze(jsUser) // doesnot allow further modification
jsUser.email = "paru@microsoft.com"
console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hello JS User")
}

console.log(jsUser.greeting1());


jsUser.greeting2 = function(){
    console.log(`Hello JS User, ${this.name}`); // to refer to its own keys
}

console.log(jsUser.greeting2());
