// reduce

const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0) // here zero is the start value of accumulator
// next onwards the value of (acc + currval) is the value of the accumulator
// we get 0 + 1 + 2 + 3
console.log(myTotal)


//         OR

const myTotal2 = myNums.reduce((acc, currval) => acc + currval, 0)
console.log(myTotal2)