function customPromiseAll(promises){
    return new Promise((resolve,reject)=>{
        if(!Array.isArray(promises)){
            reject(new TypeError ("Invalid input, function takes array of promises as input"));
        }

        if(promises.length===0){
            resolve([]);
        }

        const results=[];
        let completed=0;

        promises.forEach((promise,index)=>{
            Promise.resolve(promise).then((value)=>{
                results[index]=value;
                completed++;

                if(completed===promises.length){
                    resolve(results);
                }

            }).catch((err)=>{
                reject(err);
            })
        })
    })
}


let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hi i am first promise");
    },2000);
});


let p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hi i am second promise");
    },1000);
});

let p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let num=Math.random();
        if(num >0.5){
            resolve("Hi from third prmoise")
        }
        reject(new Error("rejected"));

        
    },200);
});





customPromiseAll("asd").then(console.log).catch(console.error);

