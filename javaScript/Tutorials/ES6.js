//1)let (block scope variable)

let x = 10;
if (x == 10) {
    let x = 20;
    console.log(x); // 20:  reference x inside the block
}
console.log(x); // 10: reference at the begining of the script

///////
let b = 20;
console.log(window.b); // undefined

//JavaScript let and callback function in a for loop
for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i); // 5 5 5 5 5
    }, 1000);
}

for (var i = 0; i < 5; i++) {
    (function (j) {
        setTimeout(function () {
            console.log(j); //0 1 2 3 4
        }, 1000);
    })(i);
}

for (let i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 1000); //0 1 2 3 4
}

//Redeclaration

var counter = 0;
var counter;
console.log(counter); // 0

let counter = 0;
let counter;
console.log(counter); //Uncaught SyntaxError: Identifier 'counter' has already been declared


//JavaScript let variables and hoisting

{
    console.log(counter); // Uncaught ReferenceError: Cannot access 'counter' before initialization
    let counter = 10;    
}

//Temporal death zone (TDZ)

{ // enter new scope, TDZ starts
    let log = function () {
        console.log(message); // messagedeclared later
    };

    // This is the TDZ and accessing log
    // would cause a ReferenceError

    let message= 'Hello'; // TDZ ends
    log(); // called outside TDZ
}

//Differences Between var and let
function increase() {
    var counter = 10;
}
// cannot access the counter variable here


for (var i = 0; i < 5; i++) {
	console.log("Inside the loop:", i);
}

console.log("Outside the loop:", i);
//Output
//Inside the loop: 0 
//Inside the loop: 1 
//Inside the loop: 2 
//Inside the loop: 3 
//Inside the loop: 4 
//Outside the loop: 5


for (let i = 0; i < 5; i++) {
	console.log("Inside the loop:", i);
}

console.log("Outside the loop:", i);

//Output
//Inside the loop: 0
//Inside the loop: 1
//Inside the loop: 2
//Inside the loop: 3
//Inside the loop: 4
//Uncaught ReferenceError: i is not defined

//2)Creating global properties

var counter = 0;
console.log(window.counter); //  0

let counter = 0;
console.log(window.counter); // undefined

//3)JavaScript const and Objects

const person = { age: 20 };
person.age = 30; // OK
console.log(person.age); // 30

//Even though the person variable is a constant, you can change the value of its property. However, you cannot reassign a different value to the person constant like this:

person = { age: 40 }; // TypeError

//If you want the value of the person object to be immutable, you have to freeze it by using the Object.freeze() method:
const person = Object.freeze({age: 20});
person.age = 30; // TypeError

//JavaScript const and Arrays

const colors = ['red'];
colors.push('green');
console.log(colors); // ["red", "green"]

colors.pop();
colors.pop();
console.log(colors); // []

colors = []; // TypeError

//JavaScript const in a for loop

const scores = [75, 80, 95];

for (const score of scores) {
	console.log(score);
}

//JavaScript Default Parameters

function say(message='Hi') {
    console.log(message);
}

say(); // 'Hi'
say('Hello') // 'Hello'

//The arguments object

function add(x, y = 1, z = 2) {
    console.log( arguments.length );
    return x + y + z;
}

add(10); // 1
add(10, 20); // 2
add(10, 20, 30); // 3

//JavaScript Rest Parameters

function sum(...args) {
    let total = 0;
    for (const a of args) {
        total += a;
    }
    return total;
}

sum(1, 2, 3); //6