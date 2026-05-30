// 1. Global Execution Context 
// 2. Function Execution Context 
// 3. Eval Execution Context

// Exectuion in js hhas two phase
// {} -> Memory Creation Phase / Creation Phase
//    -> Execution Phase

// Code to learn this :- 

// let val1 = 10
// let val2 = 5
// function addNum(num1, num2){
//     let total = num1+num2;
//     return total;
// }
// let result1 = addNum(val1,val2);
// let result2 = addNum(10,2);

// 1> Global Execution Phase -> this
// 2> Memory Phase -> val1 -> undefined
//                    val2 -> undefined
//                    addNum -> defination
//                    result1 -> undefined
//                    result2 -> undefined
// 3> Execution Phase -> val1 -> 10
//                       val2 -> 5
//                       addNum -> ( new variable enviroment + Execution thread )