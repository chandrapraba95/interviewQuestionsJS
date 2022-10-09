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