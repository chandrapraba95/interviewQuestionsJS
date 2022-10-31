// 1)JS Objects

//In JavaScript, almost "everything" is an object.
// Booleans can be objects (if defined with the new keyword)
// Numbers can be objects (if defined with the new keyword)
// Strings can be objects (if defined with the new keyword)
// Dates are always objects
// Maths are always objects
// Regular expressions are always objects
// Arrays are always objects
// Functions are always objects
// Objects are always objects

//Creating a JavaScript Object

//1)Using an Object Literal
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

//2)Using the JavaScript Keyword new
const person1 = new Object();
person1.firstName = "John";
person1.lastName = "Doe";
person1.age = 50;
person1.eyeColor = "blue";

//JavaScript Objects are Mutable
const person2 = {
    firstName:"John",
    lastName:"Doe",
    age:50, eyeColor:"blue"
}
  
const x = person2;
x.age = 10; // Will change both x.age and person.age

//JavaScript for...in Loop

const person3 = {
    fname:" John",
    lname:" Doe",
    age: 25
};
  
for (let x in person3) {
    console.log(person3[x]);
}
  
//Adding New Properties
person3.nationality = "English";

//Deleting Properties
delete person3.age;

//What is this?
// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.

const person4 = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
};
person4.name = function() {
    return (this.firstName + " " + this.lastName).toUpperCase();
};

console.log(person4.name()) //JOHN DOE

//JavaScript Getter (The get Keyword)
const person5 = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get lang() {
      return this.language;
    }
};

console.log(person5.lang) //en

//JavaScript Setter (The set Keyword)
const person6 = {
    firstName: "John",
    lastName: "Doe",
    language: "",
    set lang(lang) {
      this.language = lang;
    }
};
  
// Set an object property using a setter:
person6.lang = "en";

console.log(person6.language) //en

//JavaScript Object Constructors

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
//you can not add a new property to an existing object constructor.
//If you want to add a new property see the Object prototype concept below

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
console.log(myFather) //Person {firstName: 'John', lastName: 'Doe', age: 50, eyeColor: 'blue'}
console.log(myMother) //Person {firstName: 'Sally', lastName: 'Rally', age: 48, eyeColor: 'green'}

//JavaScript Object Prototypes
//All JavaScript objects inherit properties and methods from a prototype.

function Person1(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}
  
Person1.prototype.nationality = "English";
Person1.prototype.name = function() {
    return this.firstName + " " + this.lastName;
};

//JavaScript Iterables
//Iterating Over a String

for (const x of "W3Schools") {
    console.log(x)
}

//Iterating Over an Array
for (const x of [1,2,3,4,5]) {
    console.log(x)
}

//JavaScript ES5 Object Methods
//Object.create()
//The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.

const person6 = {
    isHuman: false,
    printIntroduction: function() {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
};

const me = Object.create(person6);

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction();
// expected output: "My name is Matthew. Am I human? true"
  

//Object.defineProperty(object, property, descriptor)
const object1 = {};

Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: false
});

object1.property1 = 77;
// throws an error in strict mode

console.log(object1.property1);
// expected output: 42


//Object.defineProperties()

const object2 = {};

Object.defineProperties(object2, {
  property1: {
    value: 42,
    writable: true
  },
  property2: {}
});

console.log(object2); //{property1: 42, property2: undefined}

//Object.getPrototypeOf()

//The Object.getPrototypeOf() method returns the prototype (i.e. the value of the internal [[Prototype]] property) of the specified object.

const prototype1 = {};
const object1 = Object.create(prototype1);

console.log(Object.getPrototypeOf(object1) === prototype1); //true

//Object.keys()
const object1 = {
    a: 'somestring',
    b: 42,
    c: false
};
  
console.log(Object.keys(object1)); //['a', 'b', 'c']

//Protecting Objects

//Object.preventExtensions(object)
// Prevents adding properties to an object, we can update and delete property
const object1 = {
    name: "praba",
    weight: 52
};

Object.preventExtensions(object1);
object1.weight = 53;
object1.age = 27;
delete object1.name;
console.log(object1); //{weight: 53}

Object.isExtensible(object1)


//Object.seal(object)
//new properties cannot be added, existing properties cannot be removed, values of existing properties can still be changed
const object1 = {
    name: "praba",
    weight: 52
};

Object.seal(object1);
object1.weight = 53;
object1.age = 27;
delete object1.name;
console.log(object1); //{name: 'praba', weight: 53}
Object.isSealed(object1); //true

//Object.freeze(object)
//We cannot add, update, delete the property
const object1 = {
    name: "praba",
    weight: 52
};

Object.freeze(object1);
object1.weight = 53;
object1.age = 27;
delete object1.name;
console.log(object1); //{name: 'praba', weight: 52}
Object.isFrozen(object1)

// 2)JavaScript Function

function myFunction(a, b) {
    return a * b;
}

console.log(myFunction(4, 3)) //12

//anonymous function (a function without a name).