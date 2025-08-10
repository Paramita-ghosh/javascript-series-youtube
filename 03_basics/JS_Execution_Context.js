/*

JS executes context in two phases :
=> Global Execution Context {}
=> Function Execution Context

(in mongoose, we have another => Eval Execution Context)


{} => Memory creation phase
   => Execution phase

step 1 : Global execution -> this

step 2 : memory phase // memory allocation
         val1 -> undefined
         val2 -> undefined
         addnum -> function definition
         result1 -> undefined
         result2 -> undefined

step 3 : Execution phase
         val1 <- 10
         val2 <- 5
                  ______________
                 |              |
                 | new variable | => Memory phase
      addNum ->  | environment  |    val1 -> undefined
                 |      +       |    val2 -> undefined
                 |  execution   |    total -> undefined
                 |    thread    |
                 ________________ => Execution context
                                     num1 -> 10
                                     num2 -> 5
                                     total -> 15

        for each box, step 2 and 3 are repeated and deleted after work

        result1 -> 15
        result2 -> same thing repeated from box creation
                                     

*/