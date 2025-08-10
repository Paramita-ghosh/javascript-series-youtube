// Immediately Invoked Function Expressions (IIFE)

(function chai(){ // named IIFE
    console.log(`DB CONNECTED`);
})();


// ()() => IIFE definition
// => first bracket is for function definiton
// => second brachet is for execution
// to get rid of the problem of global pollution
// ; => to END execution

( (name) => { // unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})('paramita');