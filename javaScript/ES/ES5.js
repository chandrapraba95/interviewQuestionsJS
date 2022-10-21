//1) Data types

//Primitive data type (immutable && that is not an object and has no methods or properties)
/***********************************/
//String
//Number
//Boolean
//Null -> null is an assignment value to represent a variable has no value (typeof null -> object)
//Undefined (null === undefined (false), null == undefined (true))
//bigint
//symbol

//Non-primitive (reference) data type (Mutable)
/***********************************/
//Non-primitive data types is the object. The JavaScript arrays and functions are also objects

//Mutable is a type of variable that can be changed. In JavaScript, only objects and arrays are mutable, not primitive values. A mutable object is an object whose state can be modified after it is created. Immutables are the objects whose state cannot be changed once the object is created.

//Create immutable object in js
//Object.preventExtensions(), Object.seal(), Object.freeze()

//Primitive
var a =10;
var b =a;
b =20;
console.log(a,b) //10, 20

//Copying reference value
var x = {name: "john"}
var y  = x;
y.name = "praba";
console.log(x, y) //{name: 'praba'}, {name: 'praba'}

var x = {name: "john"}
var y  = Object.assign({}, x);
y.name = "praba";
console.log(x, y) //{name: 'john'} {name: 'praba'}

var x = {name: "john"}
var y  = {...x};
y.name = "praba";
console.log(x, y) ////{name: 'john'} {name: 'praba'}

//2)Loops

//for loop
const numbersAsWords = ['one', 'two', 'three'];

for (let i = 0; i < numbersAsWords.length; i++) {
  console.log(numbersAsWords[i]);
}
// one
// two
// three

for (let i = numbersAsWords.length - 1; i >= 0; i--) {
    console.log(numbersAsWords[i]);
}
// three
// two
// one

/***************************************/

//for in loop (used to loop over the properties of an object)

const myWidget = {
    company: 'ACME',
    unitsSold: 42000,
    isModular: true
};

for (const prop in myWidget) {
    console.log(prop + ': ' + myWidget[prop]);
}

/***************************************/

//while loop (while loops continue to run until a condition is false)

const i = 1;
while (i <= 3) {
  console.log('Line ' + i);
  i++;
}

/***************************************/

// do while

const myArray = ['John', 'Jane'];
let j = 0;
do {
  console.log(myArray[j]);
  j++;
} while (j < myArray.length);

/***************************************/

//for loop
//for loop is entry controlled loop. Statement(s) is executed once the condition is checked. It might be that statement(s) gets executed zero times.

//Do-While loop
//do-while is exit controlled loop. Condition is checked after the statement(s) is executed. Statement(s) is executed at least once.

//while loop
//while loop is entry controlled loop. Statement(s) is executed once the condition is checked. It might be that statement(s) gets executed zero times.

//3) Array

//array.pop()

const numbers = [1, 2, 3, 5, 8, 13];
const lastNumber = numbers.pop();
console.log(lastNumber); // 13
console.log(numbers); // [1, 2, 3, 5, 8]
/***************************************/

//array.push(element)

var numbers1 = [1, 2, 3, 5, 8, 13];
var newLength = numbers1.push(21);
console.log(newLength); // 7
console.log(numbers1); // [1, 2, 3, 5, 8, 13, 21]
/***************************************/

//array.shift()

var numbers2 = [1, 2, 4, 8, 16];
var firstElement = numbers2.shift();
console.log(firstElement); // 1
console.log(numbers2); // [2, 4, 8, 16]

//array.unshift(element)

var numbers3 = [1, 2, 4, 8, 16];
var firstElement1 = numbers.unshift(0.5);
console.log(firstElement1); // 6
console.log(numbers3); // [0.5, 1, 2, 4, 8, 16]

//4)Function

// anonymous function
var myFunction = function() {
    console.log('inside myFunction');
};
myFunction();

// named function
const myReferenceVariable = function myFunction() {
    console.log('inside myFunction');
}
myReferenceVariable()

function add(num1, num2) {
    return num1 + num2;
}
var value = add(4, 9);
console.log(value); // 13

//Recursive function
function factorial(num) {
    if (num < 0) {
      return -1;
    }
    if (num === 0) {
      return 1;
    }
    return factorial(num - 1) * num;
}
factorial(5); // 120


function fibonacci(num) {
    if (num < 2) {
      return num;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
}
fibonacci(8); // 21 - the eighth number in the series

//Closures
function displayWelcomeMessage(firstName, lastName) {
    function fullName() {
      return firstName + ' ' + lastName;
    }
    return 'Welcome back, ' + fullName() + '!';
}
console.log(displayWelcomeMessage('John', 'Smith')); // Welcome back, John Smith!

// Standard function
function foo() {
    // do something
}
foo(); // Need to call the function to use it

// Immediately Invoked Function Expression
(function() {
    // do something right now
})(); // anonymous IIFE - the code inside is executed immediately (no need to call it later)

//5)Objects

var person = {
    firstName: 'John',
    lastName: 'Smith',
    age: 24,
    isMarried: true,
    children: ['Jack', 'Judy'],
    pet: {
      type: 'dog',
      name: 'Fido'
    }
};

var person1 = {
    firstName: 'John',
    lastName: 'Smith',
    getFullName: function() {
      return person.firstName + ' ' + person.lastName;
    }
};
console.log(person.getFullName()); // John Smith

var person2 = {
    getFullName: function() {
      return this.firstName + ' ' + this.lastName;
    }
}
console.log(person.getFullName()); // John Smith

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
var person1 = new Person('John', 'Smith');
var person2 = new Person('Jane', 'Doe');
// and so on
console.log(person1.firstName + ' ' + person1.lastName); // John Smith
console.log(person2.firstName + ' ' + person2.lastName); // Jane Doe

//6)this

//this in the Global Scope

var foo = 42;
console.log(foo); // 42
console.log(window.foo); // 42
console.log(this.foo); // 42