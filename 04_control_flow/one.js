// if
// relational operator : <, >, <=, >=, == (only value), !=,
//  === (same value and datattype), !==
const isUserLoggedIn = true

if(isUserLoggedIn){
    console.log("executed");
}

temperature = 41
if ( temperature < 50){ // explicit scope
    console.log("Temperarure less than 50");
}
else{
    console.log("Temperarure greater than 50");
}



const balance = 1000
if(balance > 500) console.log("test"); // implicit scope


// if - else if - else
const UserLoggedIn = true
const debitCard = true
const loggedInFromEmail = true

if(UserLoggedIn && debitCard) {
    console.log("Allow to buy couse");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in")
}



