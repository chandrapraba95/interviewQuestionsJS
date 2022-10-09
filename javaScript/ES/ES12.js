//1)Logical Operators and Assignment Expressions

//logical AND operator assignment expression (&&=)

let variable1 = 1;
let variable2 = 12;
variable1 &&= variable2;
console.log(variable1) // outputs 12

//logical AND operator assignment expression (||=)

let variable3 = undefined;
let variable4 = 44;
variable1 ||= variable2;
console.log(variable1) // outputs 44

//logical Double question operator assignment expression (??=)

let variable5 = undefined;
let variable6 = 44;
variable1 ??= variable2;
console.log(variable1) // outputs 44

//2)Numeric Operators

//underscore symbol used as a separator

//let result=1000000; (let result=10_00_000;)

//3)ReplaceAll method

let input="This is a test program which contains test code";
input = input.replace('test', 'java');
console.log(input) //This is a java program which contains test code

//replace all matching substrings
input = input.replace(/test/g, 'java'); //This is a java program which contains java code

//replaceAll method
input = input.replaceAll('test', 'java');
console.log(input) //This is a java program which contains java code

//4)WeakRef Object

//5)Promise any & Race