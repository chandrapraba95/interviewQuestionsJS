//1)REST/Spread Operator enhancement

// we use the rest operator to grab everything else left in the object.
let myObj = {
    a:1,
    b:3,
    c:5,
    d:8
}

let { a,b,...z } = myObj;
console.log(a); // 1
console.log(b); // 3
console.log(z); // {c: 5, d: 8}

// using the spread syntax we cloned our Object
let clone = {...myObj};
console.log(clone);
// {a: 1, b: 3, c: 5, d: 8}
myObj.e = 15;
console.log(clone)
// {a: 1, b: 3, c: 5, d: 8}
console.log(myObj)
// {a: 1, b: 3, c: 5, d: 8, e: 15}

//2) Asynchronous Iteration -> for-await-of

const iterables = [1,2,3];

async function test() {
    for await (const value of iterables) {
        console.log(value);
    }
}
test();