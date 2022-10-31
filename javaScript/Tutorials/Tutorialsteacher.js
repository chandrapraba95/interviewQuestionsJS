// Switch case

const a = 3;

switch (a) {
    case 1:
        alert('case 1 executed');
        break;
    case 2:
        alert("case 2 executed");
        break;
   case 3:
        alert("case 3 executed");
        break;
    case 4:
        alert("case 4 executed");
        break;
    default:
        alert("default case executed");
}

//for loop

const arr = [10, 11, 12, 13, 14];
let i = 0;

for (; ;) {
    
    if (i >= 5)
    break;

    console.log(arr[i]);
        
    i++;
}


//scope
const NoBlockLevelScope = () => {
    
    if (1 > 0)
    {
        var myVar = 22;

    }

    alert(myVar);
}

NoBlockLevelScope();

//eval
//eval() is a global function in JavaScript that evaluates a specified string as JavaScript code and executes it.

//////
let result;
const Sum = (val1, val2) => {
    return val1 + val2;
}

eval("result = Sum(5, 5);");
console.log(result);

////// eval can convert string to JSON object.
const str = '({"firstName":"Bill","lastName":"Gates"})';

const obj = eval(str);

obj.firstName; // Bill 

//String object
//JavaScript allows you to create a String object using the new keyword

const str2 = new String('Hello World');
const str1 = new String('Hello World');
const str3 = 'Hello World';

str1 == str2; // false - because str1 and str2 are two different objects
str1 == str3; // true

//IIFE

(function () {
    const userName = "Steve";
    
    const display = (name) =>
    {
        alert(name);
    }

    display(userName);
})();

//Closure

//Closure means that an inner function always has access to the vars and parameters of its outer function, even after the outer function has returned.

/////
const OuterFunction = () => {

    const outerVariable = 100;

    const InnerFunction = () => {
        console.log(outerVariable);
    }

    return InnerFunction;
}
var innerFunc = OuterFunction();
console.log(innerFunc); //() => {
//     console.log(outerVariable);
// }

innerFunc(); // 100

/////
const Counter = () => {
    let counter = 0;

    const IncreaseCounter = () => {
        return counter += 1;
    };

    return IncreaseCounter;
}

const couter = Counter();

console.log(couter()) //1
console.log(couter()) //2
console.log(couter()) //3

//////
const counter = (function() {
    let privateCounter = 0;
    //private function because its only used internally
    const changeBy = (val) => {
      privateCounter += val;
    }
    return {
      increment: () => {
        changeBy(1);
      },
      decrement: () => {
        changeBy(-1);
      },
      value: () => {
        return privateCounter;
      }
    };   
})();
  
alert(counter.value()); // 0
counter.increment();
counter.increment();
alert(counter.value()); // 2
counter.decrement();
alert(counter.value()); // 1

//Inheritance

function Person(firstName, lastName) {
    this.FirstName = firstName || "unknown";
    this.LastName = lastName || "unknown";            
}

Person.prototype.getFullName = function () {
    return this.FirstName + " " + this.LastName;
}
function Student(firstName, lastName, schoolName, grade)
{
    Person.call(this, firstName, lastName);

    this.SchoolName = schoolName || "unknown";
    this.Grade = grade || 0;
}
//Student.prototype = Person.prototype;
Student.prototype = new Person();
Student.prototype.constructor = Student;

var std = new Student("James","Bond", "XYZ", 10);
            
alert(std.getFullName()); // James Bond
alert(std instanceof Student); // true
alert(std instanceof Person); // true

//Prototype

//The prototype is an object that is associated with every functions and objects by default in JavaScript, where function's prototype property is accessible and modifiable and object's prototype property (aka attribute) is not visible.

//Use of Prototype
//The prototype object is being used by JavaScript engine in two things, 1) to find properties and methods of an object 2) to implement inheritance in JavaScript.

function Student() {
    this.name = 'John';
    this.gender = 'M';
}

Student.prototype.age = 15;

var studObj1 = new Student();
alert(studObj1.age); // 15

var studObj2 = new Student();
alert(studObj2.age); // 15



