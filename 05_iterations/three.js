// for of loop

const arr = [1, 2, 3, 4, 5]
for (const val of arr) {
    console.log(val);
}

const greetings = "Hello World!"
for (const greet of greetings) {
    console.log(greet);
}



// maps

const map = new Map() // uniques and sorted 
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")

console.log(map)

for(const [key, value] of map){ // map destructuring
    console.log(key, ':--', value);
}

// maps are iterable but objects ARE NOT