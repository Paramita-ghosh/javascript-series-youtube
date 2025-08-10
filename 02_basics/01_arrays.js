const myArr = [0, 1, 2, 3, 4, 5, true, "Paramita"]
// different type of data types allowed 

console.log(myArr[6]); // accessed using index
// shallow copy -> pass by reference -> heap

const myArr2 = new Array(1, 2, 3, 4) // another way to create an array


// **** Array methods ****

myArr2.push(6) // adds at back
myArr2.push(7)
myArr2.pop() // removes last element

myArr2.unshift(9) // adds in  front 
myArr2.shift() // removes first element

console.log(myArr2.includes(9)) // returns boolean
console.log(myArr2.indexOf(9)) // returns -1 for missing element
console.log(myArr2.indexOf(3)) // return number

const newArr = myArr2.join() // converts array to string and store in newArr

console.log(myArr2);
console.log(newArr);
console.log(typeof newArr); // string

console.log("A ", myArr2); // original array

// ##### IMPORTANT ######

const myn1 = myArr2.slice(1, 3) // excludes index 3
console.log(myn1);
console.log("B ", myArr2); // original array remains intact

const myn2 = myArr2.splice(1, 3) // includes index 3
console.log(myn2);
console.log("C ", myArr2); // original array changes ...myn2 elements are removed 


