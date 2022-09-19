// smallest and second smallest value from array
let arr = [123,3,65,7,26,87,3,9];

let smallest = arr[0], secondSmallest = arr[0];
for(let i=0; i < arr.length ; i++) {
    if(arr[i]<smallest) {
        secondSmallest = smallest;
        smallest = arr[i];
    }
    if(arr[i]<secondSmallest && arr[i]>smallest) {
        secondSmallest = arr[i];
    }
}

const small = arr.reduce((acc, cur)=>{
    if(cur < acc){
        acc = cur
    }
    return acc;
}, arr[0])
console.log('Smallest number: ', smallest)
console.log('Second Smallest number: ', secondSmallest);

/******************************************************************/

// sorting without using another array
const sort_arr = [123,3,65,7,26,87,3,9];

console.log(sort_arr.sort((a, b)=>{return a - b}));


for(let i=0;i<sort_arr.length;i++){
    for(let j=0;j<i;j++){
        if (sort_arr[i] < sort_arr[j]) {
            const x = sort_arr[i];
            sort_arr[i] = sort_arr[j];
            sort_arr[j] = x;
        }
    }
}
console.log(sort_arr);

/******************************************************************/

//Remove duplicates from an array
const chars = ['A', 'B', 'A', 'C', 'B'];
const uniqueChars = [...new Set(chars)];

console.log(uniqueChars);

const uniqueValue = chars.filter((c, index) => {
    return chars.indexOf(c) === index;
});
console.log(uniqueValue)

console.log(chars.reduce((a,b)=>{if(a.indexOf(b)<0)a.push(b);return a;},[])); //we have to learn more

//Get duplicates from an array
const duplicateValue = chars.filter((c, index) => {
    return chars.indexOf(c) !== index;
});
console.log(duplicateValue)

// duplicate value count
const count = chars.reduce((accumulator, value) => {
    return {...accumulator, [value]: (accumulator[value] ?? 0) + 1};
}, {});

console.log(count);

const count1 = {};

arr.map(element => {
    count1[element] = (count1[element] ?? 0) + 1;
});

/******************************************************************/

//var -> function scope, let -> block scope
function run() {
    var foo = "Foo";
    let bar = "Bar";

    console.log(foo, bar); // Foo Bar

    {
      var moo = "Mooo"
      let baz = "Bazz";
      console.log(moo, baz); // Mooo Bazz
    }

    console.log(moo); // Mooo
    console.log(baz); // ReferenceError
}

run();

/******************************************************************/

// closures

//A closure is a function having access to the parent scope, even after the parent function has closed.

function makeCounter() {
    let currentCount = 1;

    return function() {
      return currentCount++;
    };
}

let counter = makeCounter();


console.log( counter() ); // 1
console.log( counter() ); // 2
console.log( counter() ); // 3

for(var i=0;i<5;i++){
    setTimeout(() => {
        console.log("var closure",i)
    }, 0);
}

for(let i=0;i<5;i++){
    setTimeout(() => {
        console.log("let closure",i)
    }, 0);
}

/*var j*/ let j
for(j=0;j<5;j++){
    setTimeout(() => {
        console.log("before initialization closure",j)
    }, 0);
}

/******************************************************************/

// Coding output

console.log("sum",0.1 + 0.2 === 0.3)
//This will surprisingly output false because of floating point errors in internally representing certain numbers. 0.1 + 0.2 does not nicely come out to 0.3 but instead the result is actually 0.30000000000000004 because the computer cannot internally represent the correct number. One solution to get around this problem is to round the results when doing arithmetic with decimal numbers

const Employee = {
    company: 'xyz'
}
const emp1 = Object.create(Employee);
console.log("emp",emp1);
delete emp1.company
console.log("company",emp1.company);
console.log(emp1.hasOwnProperty('company'))
//Above code will output xyz as output. Here emp1 object got company as prototype property. delete operator doesn't delete prototype property. emp1 object doesn't have company as its own property

// let b = 10;
// var b = 20;
// console.log(b); //Cannot redeclare block-scoped variable b

const a = { x: 1, y: 2 };
const b = a;
b.x = 3;
console.log(a);
console.log(b); //Reason: both the object are pointing to same reference.

//Reverse a string
const str = "Full Stack Tutorials";
const output = str
  .split("")
  .reverse()
  .join("");
console.log("output", output)

let newString = ""

for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
}

console.log("newString", newString)

const reverseString = (str) => {
    return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}
console.log(reverseString(str))

//Sum of all numbers given in a array
const array = [1, 2, 5, 10, 20];
let sum = 0;
for (let i in array) {
  sum += array[i];
}
console.log("sum", sum)

var sum1 = array.reduce((a, i) => {
    return a + i;
});
console.log("sum1", sum1)

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < 10; i++) {
  setTimeout(() => console.log(numArr[i]), 1000);
}

for (var i = 0; i < 10; i++) {
  setTimeout(() => console.log(numArr[i]), 1000);
}

//Output for following snippet
const number = undefined + 11;
if (number === NaN) {
    console.log("number 1",number)
} else if (number === 11) {
    console.log("number 2",number)
} else {
    console.log("number 3",number)
}

//startsWith, endsWith
const check = "Full Stack Tutorials, Latest Interview Questions and Answers!";
//startsWith
console.log(check.startsWith("Full")); // true
console.log(check.startsWith("full")); // false
console.log(check.startsWith("Tutorials")); // false
console.log(check.startsWith("Tutorials", 11)); // true

//endsWith
console.log(check.endsWith("Answers!")); // true
console.log(check.endsWith("answers!")); // false

//Output for following snippet
let increment=3;
let increment1=increment++;
let increment2=++increment;
console.log(increment,increment1,increment2)

//Output for following snippet
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof NULL);
console.log(typeof typeof 1);

//Convert object into an array
let obj = { id: "1", name: "Test User", age: "25", profession: "Developer" };

//Method 1: Convert the keys to Array using - Object.keys()
console.log(Object.keys(obj));
// ["id", "name", "age", "profession"]

// Method 2 Converts the Values to Array using - Object.values()
console.log(Object.values(obj));
// ["1", "Test User", "25", "Developer"]

// Method 3 Converts both keys and values using - Object.entries()
console.log(Object.entries(obj));
//[["id", "1"],["name", "Test User"],["age", "25"],["profession", "Developer"]]

//Convert array to object
let convertingArr = ["1", "Test User", "25", "Developer"];
let arr1 = [
    ["id", "1"],
    ["name", "Test User"],
    ["age", "25"],
    ["profession", "Developer"],
];

//Method 1: Using Object.assign() method
console.log(Object.assign({}, convertingArr));
//{0: "1", 1: "Test User", 2: "25", 3: "Developer"}

// Method 2 Using Spread operator
console.log({ ...convertingArr });
//{0: "1", 1: "Test User", 2: "25", 3: "Developer"}

// Method 3: Using Object.fromEntries() method
console.log(Object.fromEntries(arr1));
//{id: "1", name: "Test User", age: "25", profession: "Developer"}