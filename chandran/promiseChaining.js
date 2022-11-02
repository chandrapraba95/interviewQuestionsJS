function chaining(){
    return new Promise((resolve,reject)=>{
        resolve({name:"chandran"})
    })
}

chaining().then(data=>{
    data.job = "it";
    return data;
}).then(data1 =>{ 
    data1.location = "chennai"
    return data1;
}).then(data2 =>{
    console.log(data2);
}).catch(err=>{
    console.log(err);
})