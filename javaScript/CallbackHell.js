//JS is single threaded synchronous language. Its just do one thing at a time,its does not wait for anything


console.log("praba")

setTimeout(function(){
    console.log("callback")
}, 5000)

console.log("check")


// Callback is a powerful way to do asynchronous thing in js

// 1) Callback Hell(Unreadable, Unmaintainable)

//steps -> create order, proceed payment
//const cart = ["pants", "kurti"]

//api.createOrder(cart, function() {
//  api.proceedToPayment(function(){
//    api.showOrderSummary(function(){
//      api.updateWallet()
//    })
//  })
//})

//Async operation in js can be achieved through callbacks. Whenever there are multiple dependent ij async operations it will result in a lot of nested callbacks. This will cause a Pyramid of doom like structure

// 2) Inversion of control