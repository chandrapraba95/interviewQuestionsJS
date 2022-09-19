const multiply = function (x, y) {
    console.log(x*y)
}

const multiplyByTwo = multiply.bind(this, 2)
multiplyByTwo(5)

const multiply1 = function(x) {
    return function(y) {
        console.log(x*y)
    }
}

multiply1(2)(3)

const sum = (a) => (b) =>  b ?  sum(a+b) : a;
console.log("sum", sum(1)(2)(3)(4)())