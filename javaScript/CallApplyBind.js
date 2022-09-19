//call
const name = {
    firstName: "chandra",
    lastName: "praba",
    printFullName: function () {
        console.log("inside obj",this.firstName + " " + this.lastName)
    }
}

name.printFullName()

const name2 = {
    firstName: "java",
    lastName: "script",
}

//For printing the full name from "name2" variable we do not add "printFullName" method again inside "name2". We can reuse the printFullName from name using "call" method (Function borrowing)

name.printFullName.call(name2)

let printFullName2 = function (arg, arg1) {
    console.log("sep function", this.firstName + " " + this.lastName + " " + arg + " " + arg1)
}

printFullName2.call(name2, "very", "easy")

//apply
printFullName2.apply(name2, ["very", "easy"])

//bind
const bindMethod = printFullName2.bind(name2, "very", "easy")
bindMethod()


// Call -> This method used to invoke a function directly by passing the reference which points to the "this" variable inside the function. Individually passing the arguments
//Apply -> Apply method same as the call method only the difference is it takes the second argument as array list
//Bind -> It will create a copy of function and bind that object returns a function which can be invoked later


//Polyfill for bind method
//Browser doesnt have bind function we have to write our own bind function

const name3 = {
    firstName: "chandra",
    lastName: "praba"
}

const printFullName3 = function (hometown, state) {
    console.log(this.firstName + " " + this.lastName+ ", " + hometown+ ", " + state)
}

Function.prototype.myBind = function (...args) {
    const obj = this;
    const params = args.slice(1);
    return function (...args1) {
        obj.apply(args[0],[...params, ...args1])
    }
}


const printMyFullName = printFullName3.myBind(name3, "Dehradun")
printMyFullName("Uttrakant")