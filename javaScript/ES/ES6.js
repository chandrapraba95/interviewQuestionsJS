// 1)for of loop

const names = ["praba", "bala", "venba", "kuzhali"]


//ES5
for(let i = 0; i < names.length; i++){
    console.log(names[i])
}


//ES6
for(let name of names){
    console.log(name)
}

for(let name of names.entries()){
    console.log(name)
}

// 2)symbols (Creates unique id)
const name1 = Symbol("name")
const name2 = Symbol("name")
console.log(name1 === name2) //false
console.log(typeof name1) //symbol

// 3)Arrow function 
const display = () => console.log("hello world")
display()

setTimeout(() => console.log("hello arrow function"), 2000);

//factorial
const factorial = (n) => {
    let product = 1;
    for(let i = 1; i<=n; i++){
        product *= i;
    }
    return product;
}
console.log(factorial(5));

// 4)Object destructuring

const personalInfo = {
    name: "praba",
    lname: "chandra",
    email: "praba@gmail.com",
    phone: 123456
}

const {name: myName, lname, email, phone} = personalInfo;

//array
const name = ["praba", "chandra", "venba"]
const [name3, name4, lastName] = name;
console.log(lastName);

// 5)Object set & map

//Set
//A JavaScript Set is a collection of unique values.Each value can only occur once in a Set.A Set can hold any value of any data type.

const letters = new Set(["a","b","c","a","b"]);

console.log(letters); //Set(3) {"a", "b", "c"}
console.log(letters.size); //3

const letters1 = new Set();

console.log(letters1); //Set(0) {size: 0}
letters1.add("a");
letters1.add("b");
letters1.add("c");

console.log(letters1); //Set(3) {"a", "b", "c"}

//Remove duplicates from string
console.log(Array.from(new Set("aabbccddeeffgg")).toString().replaceAll(',', ''));
console.log(Array.from(new Set("aabbccddeeffgg")).join(""));

const removeDupChar = (str) => {
    let char;
    const charObj = {}, arr = [];
    for(let i = 0; i < str.length; i++){
        char = str[i];
        if(charObj[char]) charObj[char] += 1;
        charObj[char] = 1;
    }

    for(const a in charObj){
        if(charObj[a] === 1) arr.push(a)
    }
    return arr.join("");
}

console.log(removeDupChar("aaaabbbb"))

//Map

//A Map holds key-value pairs where the keys can be any datatype. A Map remembers the original insertion order of the keys. A Map has a property that represents the size of the map.

const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

console.log(fruits) // Map(3) {'apples' => 500, 'bananas' => 300, 'oranges' => 200}

const fruits1 = new Map();

// Set Map Values
fruits1.set("apples", 500);
fruits1.set("bananas", 300);
fruits1.set("oranges", 200);

console.log(fruits1.get("apples")) //500
console.log(fruits1.size) //3

// 6)Classes & Methods
class Display {
    constructor(name) {
        this.name = name;
    }

    greeting() {
        console.log("Hello from method class")
    }
}

const myName1 = new Display("praba");
console.log(myName1) //Display {name: 'praba'}
myName1.greeting() //Hello from method class

// 7)Static function

class Display1 {
    constructor(name) {
        this.name = name;
    }

    static greeting1() {
        console.log("Hello from static")
    }
}

const myName2 = new Display1("praba");
console.log(myName1) //Display {name: 'praba'}
Display1.greeting1() //Hello from static

// 8)Getters & Setters
//Getters and setters are used to protect your data, particularly when creating classes. A getter method returns its value while a setter method sets or updates its value, getters and setters are also known as accessors and mutators, respectively.

const person = {
    firstName: "chandra", //Data properties
    lastName: "praba", //Data properties
    // fullName() {
    //     return `${this.firstName} ${this.lastName}`
    // }
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(value) {
       const parts = value.split(" ");
       this.firstName = parts[0];
       this.lastName = parts[1];
    }
}

person.fullName = "Praba chandra"

console.log(person.fullName)

class Display2 {
    constructor(name) {
        this.name = name;
    }

    set name(name) {
        this._name = name;
    }

    get name(){
        return this._name;
    }
}

const display3 = new Display2("praba");
console.log(display3.name);

// 9)Inheritance & Method overriding

//Using class inheritance, a class can inherit all the methods and properties of another class. Inheritance is a useful feature that allows code reusability.

//Types of Inheritance in JavaScript
//Prototypal Inheritance.
//Pseudoclassical Inheritance.
//Functional Inheritance.
//Operator Overloading.

//If a child class has the same method or property name as that of the parent class, it will use the method and property of the child class. This concept is called method overriding.
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} make noise`)
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    //Method overriding
    bark() {
        console.log(`${this.name} barking`)
    }

}

const dog = new Dog("Dog")
//inheritance
dog.speak(); //Dog make noise

//Method overriding
dog.bark(); //Dog barking

class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }
}
  
class Model extends Car {
    constructor(brand1, mod) {
      super(brand1);
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
}
  
const myCar = new Model("Ford", "Mustang");
myCar.show()

//ES7
// 10)Exponentiation Operator
console.log(3**2);

// 11)Promises

const completed = true;

const myPromise = new Promise((resolve, reject) => {
    if(completed) {
        resolve("The promise has been completed")
    } else {
        reject("The promise has not been completed")
    }
})

console.log(myPromise)

const completed1 = true;

const myPromise1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        if(completed1) {
            resolve("The promise has been completed")
        } else {
            reject("The promise has not been completed")
        }
    }, 3*1000)
});

console.log(myPromise1);

const promiseReport = (promise) => {
    promise
    .then(result => console.log(`Result: ${result}`))
    .catch(error => console.log(`Error: ${error}`))
}

console.log(promiseReport(myPromise1));

// 12)includes

const numbers4 = [1,2,3,4,5];
console.log(numbers4.includes(2)); //true

// 13)padStart() & padEnd() function

const name5 = "praba"
console.log(name5.padStart(10, "c")) //cccccpraba
console.log(name5.padEnd(10, "c")) //prabaccccc

//ES8
// 14)Object.entries()

const info = {
    name: "praba",
    lname: "chandra",
    email: "praba@gmail.com",
    phone: 123456789
}

console.log(Object.entries(info))

// [
//     [ "name","praba" ],
//     [ "lname","chandra" ],
//     [ "email","praba@gmail.com" ],
//     [ "phone",123456789 ]
// ]

// 15)Object.values()

console.log(Object.values(info)); // ['praba', 'chandra', 'praba@gmail.com', 123456789]

// 16)Trailing commas
//Trailing commas (sometimes called "final commas") can be useful when adding new elements, parameters, or properties to JavaScript code. If you want to add a new property, you can add a new line without modifying the previously last line if that line already uses a trailing comma.

const numberss = [1,2,3,4,];
console.log(numberss); //[1, 2, 3, 4]

const add = (a,b,) => {
 return a+b;
}

console.log(add(4,5)); //9

const namess = {
    name: "praba",
    lname: "chandra",
    email: "praba@gmail.com",
    phone: 123456789,
}

console.log(namess);

// 17) async/await

