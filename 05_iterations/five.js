const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach(function (item) { // forEach => callback function => no name
    console.log(item)
} )

 //   OR

coding.forEach( (item) => {
    console.log(item)
})

 //   OR

function printme(item){
    console.log(item);
}
coding.forEach(printme)


coding.forEach((item, index, arr) => {
  console.log(item, index, arr);  
})




const myCoding = [
    {
        LanguageName: "javascript",
        LanguageFileName: "js"
    }, 
    {
        LanguageName: "java",
        LanguageFileName: "java"
    }, 
    {
        LanguageName: "python",
        LanguageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.LanguageName);
})