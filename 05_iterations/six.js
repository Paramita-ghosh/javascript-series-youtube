// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => { // forEach => doesn't return any value
//     console.log(item)
// } )

// console.log(values); // undefined



const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter( (num) => { // filter() => returns value
    return num > 4
})
console.log(newNums)



const newNums2 = []
myNums.forEach( (num) => {
    if( num > 4 ){
        newNums2.push(num) // now we can return values from  forEach
    }
})

console.log(newNums2)