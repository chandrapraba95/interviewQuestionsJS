function promisetest(status){
    return new Promise((resolve,reject)=>{
        if(status == "success"){
            resolve("came inside resolve");
        }else{
            reject("promise rejected");
        }
    })
}

promisetest("success").then(data=>{
    console.log(data)
    console.log(123);

}).catch(err=>{
    console.log(err);
})


console.log("543654");