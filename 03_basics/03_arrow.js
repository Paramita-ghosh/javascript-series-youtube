const user = {
    username: "Paramita",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()
console.log(this); // {} => node; gloobal(windows object) => browser



// function chai(){
//     let username = "paramita"
//     console.log(this);
//     console.log(this.username); // undefined
// }

// chai()


const chai = () => {
    let username = "paramita"
    console.log(this); // {}
    console.log(this.username); // undefined
}

chai()




const addTwo = (num1, num2) => {
    return num1 + num2 // explicit return
}
console.log(addTwo(3, 4))

//   OR

const addTwo2 = (num1, num2) => ( num1 + num2 )// implicit return
console.log(addTwo2(3, 4))

const addTwo3 = (num1, num2) => ({username: "Paramita"})