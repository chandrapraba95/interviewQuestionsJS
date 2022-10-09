//getName() // It returns "Hello". In the memory execution phase JS will allocate a funtion memory with full code
//console.log(getName)
//console.log(apple) // undefined. If we remove apple declaration we will not defined error
//console.log(apple1) // cannot access apple1 before the initialization. let, const variables comes under script scope. So we cannot access before thr initialization
//getName1() // In memory allocation getName1 will allocate a memory as variable. So it return its not a function
//console.log(getName2)
//getName2()
//console.log(getName3)
//getName3()


var apple = 7
const apple1 = 7

function getName() {
    console.log("Hello")
}

// var getName1 = () =>{
//     console.log("Hello")
// }

var getName2 = function(){
    console.log("Hello")
}

const getName3 = function(){
    console.log("Hello")
}





//Function working

// var x =1;
// a()
// b()

// console.log(x)

// function a(){
//     var x = 10
//     console.log(x)
// }

// function b(){
//     var x = 100
//     console.log(x)
// }


const x =1;

const a = () => {
    var x = 10
    console.log(x)
}

const b = () => {
    var x = 100
    console.log(x)
}

a()
b()

console.log(x)