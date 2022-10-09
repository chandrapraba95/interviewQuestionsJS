//Everything in js happens inside an Execution Context


//It has two components
// 1) Memory component(Variable environment) -> This us the place where all the variables and functions are stored as key value pairs
//2)Code component (Thread of execution) -> Here is the place where code is executed one line at a time

// JS is a synchronous single threaded language -> JS can only execute one command at a time in a specific order, it can only go to the next line  once the current line has been finished executing

//************************************************************//

//JS Execution with sample program

// var n =2;
// function square (num){
//     var ans = num * num;
//     return ans;
// }
// var square2 = square(n);
// var square4 = square(4);

//A global execution context is created

//Memory creation phase                                  Code execution phase
// (In this phase JS will allocate a memory 
//to all variabls and functions)

//1)n: undefined                                           In the code execution phase undefined is replaced  with value 2 to n  

//2)square: it stores the whole code of function          JS will skip the function block, it will the execute while the invocation

//3)square2: undefined                                    square2 invokes the square function. So JS will create a execution context.
//                                                        Memory creation      Code component
//                                                        1)num: undefined     In the momory allocation phase now the n value is 2. So that value is set to num
//                                                        2)ans: undefined     num * num is replaced to undefined which is set to ans variable. So after this JS encountered return
//                                                                             keyword so its finished the exection and then return ans to sqaure2.
//                                                        So sqaure2 value is undefined to 4
//square4: undefined                                      Same line no 3 execution