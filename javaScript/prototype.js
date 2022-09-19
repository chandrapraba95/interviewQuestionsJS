//Prototype -> One object trying to access methods and properties of other object

//Whenever we create a object, array, function and variable js engine put hidden properties to what we created and that is how we can access those properties and methods.
//The prototype is an object that is associated with every functions and objects by default in JavaScript.That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects.

let arr = ["praba"];
//arr.__proto__ === Array.prototype                   |
//arr.__proto__.__proto__ === Object.prototype    prototype chain
//arr.__proto__.__proto__.__proto__ === null          |
