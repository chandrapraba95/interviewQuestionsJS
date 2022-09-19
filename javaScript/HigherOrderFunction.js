//A function which takes another function as an argument or returns a function from it know as higher order function

const radius = [3, 1, 2, 4]

//Callback function
const area = (radius) => {
    return Math.PI * radius * radius;
}

const circumference = (radius) => {
    return 2 * Math.PI * radius;
}

const diameter = (radius) => {
    return 2 * radius;
}


//Higher order function
const calculate = (logic) => {
    const output = [];
    for(i=0; i< radius.length; i++){
        output.push(logic(radius[i]))
    }
    return output;
}

console.log("area", calculate(area))
console.log("circumference", calculate(circumference))
console.log("diameter", calculate(diameter))

//calculate(area) is same as radius.map(area). map is a predefined method by js. We can write our own prototype
Array.prototype.calculate = (logic) => {
    const output = [];
    for(i=0; i< this.length; i++){
        output.push(logic(this[i]))
    }
    return output;
}

console.log("proto", radius.calculate(area))
