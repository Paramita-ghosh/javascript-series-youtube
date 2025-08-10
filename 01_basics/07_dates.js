let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate = new Date(2023 , 0, 23); //year, month, day
console.log(myCreatedDate.toDateString());

let myCreatedDate2 = new Date("01-14-2023"); //MM-DD-YYYY
console.log(myCreatedDate2.toDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp); // milliseconds
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

console.log(myDate.getMonth() + 1); // indexing starts with 0 (january => 0)
console.log(myDate.getDay());

myDate.toLocaleString('default', {
    weekday: "long",
})
