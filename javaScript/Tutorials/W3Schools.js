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

const X = function (a, b) {return a * b};
console.log(X(4, 3));

//Function Hoisting
myFunction(5);

function myFunction(y) {
  return y * y;
}

//anonymous Self-Invoking Functions
(function () {
    console.log("Hello!!");  // I will invoke myself
})();

//Self-Invoking Functions
(function myFunction() {
    console.log("Hello!!"); 
})();

function myFunction1(a, b) {
    console.log(arguments.length);
}
myFunction1(1,2)

//The toString() method returns the function as a string
function myFunction2(a, b) {
    return a * b;
}
  
console.log(myFunction2.toString());

//Arrow Functions (Arrow functions do not have their own this)
const x = (x, y) => x * y;

//Function Parameters

//Default Parameters //ES6 allows function parameters to have default values.

function myFunction(x, y = 10) {
    console.log(x + y);
}
myFunction(5);

//Function Rest Parameter

function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}
  
console.log(sum(4, 9, 16, 25, 29, 100, 66, 77));

//Findmax
function findMax(...args) {
    let max = 0;
    for(let i = 0; i < args[0].length; i++) {
      if (args[0][i] > max) {
        max = args[0][i];
      }
    }
    return max;
} 
  
console.log(findMax([4, 5, 6]))

//JavaScript call() Method
//It can be used to invoke (call) a method with an owner object as an argument (parameter).
const person7 = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
}
const person8 = {
    firstName:"John",
    lastName: "Doe"
}
const person9 = {
    firstName:"Mary",
    lastName: "Doe"
}
  
// This will return "John Doe":
person7.fullName.call(person8);
// This will return "Mary Doe"
person7.fullName.call(person9);

//The call() Method with Arguments

const person10 = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}
  
const person11 = {
    firstName:"John",
    lastName: "Doe"
}
  
person10.fullName.call(person11, "Chennai", "Tamil Nadu"); //'John Doe,Chennai,Tamil Nadu'

//JavaScript apply() Method
const person12 = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
}

const person13 = {
    firstName: "Mary",
    lastName: "Doe"
}

// This will return "Mary Doe":
person12.fullName.apply(person13);

//The call() method takes arguments separately. The apply() method takes arguments as an array.

//The apply() Method with Arguments

const person14 = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}
  
const person15 = {
    firstName:"John",
    lastName: "Doe"
}
  
person14.fullName.apply(person15, ["Chennai", "Tamil Nadu"]); //'John Doe,Chennai,Tamil Nadu'


//Function bind()
//The member object borrows the fullname method from the person object

const person16 = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
  
  const fullName = person16.fullName.bind(member);
  console.log(fullName()); //Hege Nilsen

  //
  const person17 = {
    firstName:"John",
    lastName: "Doe",
    display: function () {
      console.log(this.firstName + " " + this.lastName);
    }
}

let display = person17.display.bind(person);
setTimeout(display, 3000); //John Doe
setTimeout(person17.display, 3000); //undefined undefined

//JavaScript Closures

const add = (function () {
    let counter = 0;
    return function () {counter += 1; return counter}
})();
  
add();
add();
add();

// the counter is now 3
//The self-invoking function only runs once. It sets the counter to zero (0), and returns a function expression. This is called a JavaScript closure.

//Class
//A JavaScript class is not an object. It is a template for JavaScript objects.

class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
}

const myCar1 = new Car("Ford", 2014); //Car {name: 'Ford', year: 2014}
const myCar2 = new Car("Audi", 2019); //Car {name: 'Audi', year: 2019}

//The Constructor Method
//The constructor method is a special method:

//It has to have the exact name "constructor"
//It is executed automatically when a new object is created
//It is used to initialize object properties
//If you do not define a constructor method, JavaScript will add an empty constructor method.

class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }
}
  
class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
}
  
const myCar = new Model("Ford", "Mustang");
console.log(myCar.show())

//The super() method refers to the parent class. By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.
//Unlike functions, and other JavaScript declarations, class declarations are not hoisted.

class Car {
    constructor(name) {
      this.name = name;
    }
    static hello() {
      return "Hello!!";
    }
}
  
const myCar3 = new Car("Ford");

console.log(Car.hello()) //Hello!!
console.log(myCar3) //Car {name: 'Ford'}
console.log(myCar3.hello()) //this will raise an error.

//JS Callbacks

//A callback is a function passed as an argument to another function. This technique allows a function to call another function. A callback function can run after another function has finished

function myDisplayer(some) {
    console.log(some)
}
  
function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}

myCalculator(5, 5, myDisplayer);

//Asynchronous JavaScript (Have to refer)

//JavaScript Promise Object
//Promise Syntax
const myPromise = new Promise(function(myResolve, myReject) {
// "Producing Code" (May take some time)

    myResolve(); // when successful
    myReject();  // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
    function(value) { /* code if successful */ },
    function(error) { /* code if some error */ }
);

//Promise Object Properties
//While a Promise object is "pending" (working), the result is undefined. When a Promise object is "fulfilled", the result is a value. When a Promise object is "rejected", the result is an error object.

function myDisplayer(some) {
    console.log(some);
}

const myPromise1 = new Promise(function(myResolve, myReject) {
    const x = 0;

    // The producing code (this may take some time)

    if (x == 0) {
        myResolve("OK");
    } else {
        myReject("Error");
    }
});

myPromise1.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
);

//Waiting for a Timeout
const myPromise2 = new Promise(function(myResolve, myReject) {
    setTimeout(function() { myResolve("I love You !!"); }, 3000);
});

myPromise2.then(function(value) {
    console.log(value)
});

//JavaScript Async (Have to refer)

//JSON - Introduction (JSON format is text)
//JSON.parse() - converting JSON strings into JavaScript objects
//JSON.stringify() - converting an object into a JSON string

//JSON Values - string, number, object, array, boolean, null
//JavaScript values - string, number, object, array, boolean, null, function, date, undefined

//Parsing JSON
const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
console.log(obj) //{name: 'John', age: 30, city: 'New York'}

//JSON.stringify()
const obj1 = {name: "John", age: 30, city: "New York"};
const myJSON = JSON.stringify(obj);
console.log(myJSON)// '{"name":"John","age":30,"city":"New York"}'
