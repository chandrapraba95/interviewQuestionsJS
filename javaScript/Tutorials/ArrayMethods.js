//Array concat()
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const children = arr1.concat(arr2);
console.log(children) //['Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus']

//Array copyWithin()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.copyWithin(2, 0)); //['Banana', 'Orange', 'Banana', 'Orange']

const fruits1 = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
console.log(fruits1.copyWithin(2, 0, 2)); //['Banana', 'Orange', 'Banana', 'Orange', 'Kiwi']

//Array entries() (Create an Array Iterator, and then iterate over the key/value pairs)

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits2.entries();
console.log(f) //Array Iterator {}
for (let x of f) {
  console.log(x) //[0, 'Banana'] //[1, 'Orange'] //[2, 'Apple'] //[3, 'Mango']
}

//Array every() (The every() method returns true if the function returns true for all elements.)

const ages = [32, 33, 16, 40];

ages.every(checkAge)

function checkAge(age) {
  return age > 18;
}

//Array fill() (fill() method fills specified elements in an array with a value, fill() method overwrites the original array)
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.fill("Kiwi")); //['Kiwi', 'Kiwi', 'Kiwi', 'Kiwi']

const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
fruits4.fill("Kiwi", 2, 4);
console.log(fruits4) //['Banana', 'Orange', 'Kiwi', 'Kiwi']

//Array filter()

const ages1 = [32, 33, 16, 40];
const result = ages1.filter(checkAdult); // [32, 33, 40]

function checkAdult(age) {
  return age >= 18;
}

//Array find()  (returns the value of the first element that passes a test)
const ages2 = [3, 10, 18, 25, 20];

function checkAge(age) {
  return age > 18;
}

function checkAge1(age) {
    return age > 40;
}

console.log(ages2.find(checkAge)) //25
ages2.findIndex(checkAge1); //undefined

//Array findIndex()

const ages3 = [3, 10, 18, 20];

ages3.findIndex(checkAge); //3
ages3.findIndex(checkAge1); //-1

function checkAge(age) {
  return age > 18;
}

function checkAge1(age) {
    return age > 40;
}

//Array forEach()
let sum = 0;
const numbers = [65, 44, 12, 4];
numbers.forEach(number => sum+=number);
console.log(sum) //125

numbers.forEach((value, index, arr)=> {
    arr[index] = value *10
});

console.log(numbers) //[650, 440, 120, 40]

//Array.from()
console.log(Array.from("ABCDEFG")) // ['A', 'B', 'C', 'D', 'E', 'F', 'G']

//Array includes()

const fruits5 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits5.includes("Mango")); //true
console.log(fruits5.includes("Apple", 2)); //true

//Array indexOf()
const fruits6 = ["Banana", "Orange", "Apple", "Apple"];
let index = fruits6.indexOf("Apple");
console.log(index) //2

const fruits7 = ["Banana", "Orange", "Apple", "Mango", "Apple"];
let index1 = fruits.indexOf("Apple", 3); //Start at index 3
console.log(index1) //4

//Array.isArray() (Check if an object is an array)
console.log(Array.isArray(["Banana", "Orange", "Apple", "Mango"])) //true

//Array join() (returns an array as a string)

const fruits8 = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits8.join(); //Banana,Orange,Apple,Mango

//Array keys()

const fruits10 = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits10.keys();
console.log(keys) //Array Iterator {}
for (let x of keys) {
  console.log(x) //0 //1 //2 //3
}

//Array lastIndexOf() (returns the last index of a specified value, returns -1 if the value is not found)
const fruits11 = ["Apple", "Orange", "Apple", "Mango"];
let index2 = fruits11.lastIndexOf("Apple");
console.log(index2) //2

//Array map()
const numbers1 = [4, 9, 16, 25];
console.log(numbers1.map(Math.sqrt)) //[2, 3, 4, 5]

//Array pop()
const fruits12 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits12.pop()) //Mango
console.log(fruits) //['Banana', 'Orange', 'Apple']

//Array push()
const fruits13 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits13.push("Kiwi")); //5
console.log(fruits13) ['Banana', 'Orange', 'Apple', 'Mango', 'Kiwi']

//Array reduce() (Have to refer)

//Array reduceRight() (Have to refer)

//Array reverse()
const fruits14 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits14.reverse()); //['Mango', 'Apple', 'Orange', 'Banana']
console.log(fruits14) //['Mango', 'Apple', 'Orange', 'Banana']

//Array shift()
const fruits15 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits15.shift()) //Banana
console.log(fruits15) //['Orange', 'Apple', 'Mango']

//Array unshift()
const fruits16 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits16.unshift("Lemon")) //5
console.log(fruits16) //['Lemon', 'Banana', 'Orange', 'Apple', 'Mango']

//Array slice()
const fruits17 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits17.slice(1, 3)); //['Orange', 'Lemon']
console.log( fruits.slice(-3, -1)); //['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
console.log(fruits); //['Lemon', 'Apple']

//Array splice()
const fruits18 = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits18.splice(2, 0, "Lemon", "Kiwi")); //[]
console.log(fruits18) //['Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango']

const fruits19 = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
console.log(fruits.splice(2, 2)); //['Apple', 'Mango']
console.log(fruits); //['Banana', 'Orange', 'Kiwi']

//Array some() (checks if any array elements pass a test)

const ages4 = [3, 10, 18, 20];

ages4.some(checkAdult);
function checkAdult(age) {
  return age > 18;
}

//Array sort()

const fruits20 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits20.sort()); //['Apple', 'Banana', 'Mango', 'Orange']
console.log(fruits20); //['Apple', 'Banana', 'Mango', 'Orange']

//Array toString() (Convert an array to a string)
const fruits21 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString()); //Banana,Orange,Apple,Mango

//Array valueOf()
const fruits22 = ["Banana", "Orange", "Apple", "Mango"];
const myArray = fruits22.valueOf();
console.log(fruits22) //['Banana', 'Orange', 'Apple', 'Mango']
console.log(myArray) //['Banana', 'Orange', 'Apple', 'Mango']


//JavaScript String Reference
