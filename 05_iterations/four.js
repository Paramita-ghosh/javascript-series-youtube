// for in loop

const myObject = {
    js: 'javascript', 
    cpp: 'C++',
    rb: 'ruby', 
    swift: "swoft by apple"
}
for (const key in  myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`)
}



const arr = [1, 2, 3, 4, 5]
for (const val in arr) {
    console.log(arr[val]); // gives the indexes
}



const map = new Map() // uniques and sorted 
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")

console.log(map)

for(const [key, value] in map){ // map not iterable here
    console.log(key, ':--', value);
}