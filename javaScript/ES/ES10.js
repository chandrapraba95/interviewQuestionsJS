//1) Object fromEntries

//convert the object to an array
const myobject = { id: 42, name:"franc" };
const myarray = Object.entries(myobject); 
console.log(myarray); //[ [ 'id', 42 ], [ 'name', 'franc' ] ]

//Convert Array to Object
const myarray1= [ [ 'id', 42 ], [ 'name', 'franc' ] ]
const object = Object.fromEntries(myarray); 
console.log(object); //{id: 42, name: 'franc'}


//2)String Trim methods
let str1=" firstString";
let str2="secondString ";
str1.trimStart();
str2.trimEnd();

//3)Optional Catch
let a = 10
try {
    console.log(a)
} catch {
    console.log("error")
}

//3) javascript toString

function getMessage(msg) {
    var name = msg;
    // display name to console
    
    console.log(`Hello ${name}`);
}
console.log(getMessage.toString());

//Output
// function getMessage(msg) {
//     var name = msg;
//     // display name to console
    
//     console.log(`Hello ${name}`);
// }

//4) Array flatmap

//flat
let arrayStringNumbers = ["one",
["two","three", "four", ["five", "six", ["seven", "eight", "nine", "ten"]]]
];
console.log(arrayStringNumbers.flat())
//["one", "two", "three", "four", ["five", "six", ["seven", "eight", "nine", "ten"]]]

console.log(arrayStringNumbers.flat(1));
//["one", "two", "three", "four", ["five", "six", ["seven", "eight", "nine", "ten"]]]

console.log(arrayStringNumbers.flat(2));
//["one", "two", "three", "four", "five", "six", ["seven", "eight", "nine", "ten"]]

console.log(arrayStringNumbers.flat(3));
["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]

//flatmap

//flatMap method is a combination of flat and map functionality for a given array, the output is a single flattened array
let  arrayNumber= [1, 2, 3, 4];
console.log(arrayNumber.map(number => [number * 3])); 
//[[3], [6], [9], [12]]
console.log(arrayNumber.flatMap(number => [number * 3]));
// [3, 6, 9, 12]

let stringArray = ["es10", "", "feature"];
console.log(stringArray.map(word =>word.split(" "))); 
//[["es10"], [""], ["feature"]]
console.log(stringArray.flatMap(word =>word.split("")));
//["e", "s", "1", "0", "f", "e", "a", "t", "u", "r", "e"]