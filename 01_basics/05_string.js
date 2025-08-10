const name = "paramita"
const repoCount = 50

// console.log(name + repoCount + " Value")
console.log(`My name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('paramita-sc-com'); // another way to declare a string
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   Paramita   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://paru.com/paramita%20ghosh"
console.log(url.replace('%20', '-'));

console.log(url.includes('paramita'));

console.log(gameName.split('-'));