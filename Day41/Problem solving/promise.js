function customPromiseAll(promises){
    return new Promise((resolve,reject)=>{
        if(!Array.isArray(promises)){
            return reject (new TypeError ("Input must be an array"));
        }

        const results=[];
        let completed=0;

        if(promises.length==0){
            return resolve([]);
        }

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

const p1=Promise.resolve(1);

const p2=new Promise(res=> setTimeout(()=>res(2),100));

const p3=3;


customPromiseAll([p1,p2,p3]).then(console.log).catch(console.error);