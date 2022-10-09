//1) Final comma or Trailing comma

//Trailing commas (sometimes called "final commas") can be useful when adding new elements, parameters, or properties to JavaScript code.

//Array data -> [1,2,3,] -> ES3
//Object -> {id:1, name:"praba", sal:"1.5l",} -> ES5
//Function definition, Function calls -> ES8

//2) Async/Await is a very important feature in ES8

//3) getOwnPropertyDescriptors() -> get object non owned properties

const myobject = {
    id:"1",
    name:"Tom",
};
const descriptors = Object.getOwnPropertyDescriptors(myobject);
console.log(descriptors);
// {
//     id: {
//       value: '1',
//       writable: true,
//       enumerable: true,
//       configurable: true
//     },
//     name: {
//       value: 'Tom',
//       writable: true,
//       enumerable: true,
//       configurable: true
//     }
// }

//4) Object.values()

const obj = {
    id: 's1',
    name:'tom',
    sal: 1000
};
  
console.log(Object.values(obj)); // ['s1', 'tom', 1000]

//5)Object.entries()
console.log(Object.entries(obj))

[
    [
        "id",
        "s1"
    ],
    [
        "name",
        "tom"
    ],
    [
        "sal",
        1000
    ]
]

for (let [key, value] of Object.entries(obj)) {
    console.log(key, value);
}

//6)String padding (padStart, padEnd)

//string_value.padStart(targetLength [, padString])

//pad the String with 0
let product_cost = '1699'.padStart(7,0)
console.log(product_cost)
console.log(product_cost.length)

//pad the String with blank spaces
let product_cost1 = '1699'.padStart(7)
console.log(product_cost1)
console.log(product_cost1.length)