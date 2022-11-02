function asyncAwait(status){
    return new Promise((resolve,reject)=>{
        if(status =="success"){
            setTimeout(() => {
                resolve("came"); 
            }, 2000);
            
        }else{
            reject("Failed");
        }
        
    })
}

// selfe invoking function

(async function(){
    try{
        let data = await asyncAwait("success");
        console.log(data);
        console.log("came1"); 
    }catch(err){
        console.log(err);
    }
 
})();


console.log("87687")