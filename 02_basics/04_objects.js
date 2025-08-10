// const tinderUser = new Object() // singleton
// console.log(tinderUser);

const tinderUser = {} // non-singleton

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);


//nested object
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Paramita",
            lastname: "Ghosh"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);



const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'c', 4: 'd'}

// // const obj3 = {obj1, obj2};
// const obj3 = Object.assign({}, obj1, obj2) // to concatenate all in one
// // {} => target ; ob1, ob2 => source

const obj3 = {...obj1, ...obj2} // latest; mostly used
console.log(obj3);


// if there is and array(arr) of objects(obj1, obj2, ...) ,, 
// we can refer to a key of obj1 as => arr[0].key_name


console.log(Object.keys(tinderUser)); // returns an array
console.log(Object.values(tinderUser)); // returns an array
console.log(Object.entries(tinderUser)); // returns an array of arrays


console.log(tinderUser.hasOwnProperty('isLoggedIn')) // true
console.log(tinderUser.hasOwnProperty('isLogged')) // false



// ******* destructuring of Objects *********

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

const {courseInstructor: instructor} = course // destructuring
console.log(instructor); // need not to be refered as course.courseInstructor


// json api (object with no name)
{
    "name": "Paramita",
    "coursename": "js in hindi",
    "price": "free"
}

// it is not ecessary that api will always be an object.
// it can also be an array of objects

// use json formatter to read an api