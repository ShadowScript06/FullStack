// memoized 

function add(a,b){
   setTimeout(()=>{
    console.log("calculating")
    console.log(a+b);
   },1000);
}

add(2,3);

function memoise(fn){
    const cache={};

    return function (...args){
        const key=JSON.stringify(args);

        if(key in cache){
            console.log("From cache");
            console.log(cache[key]);
            return;
        }else{
            console.log("Calculating..")
            const result=fn(...args);

            cache[key]=result;

            console.log(result);
        }
    }
}

const memoisedMultiply=memoise((a,b)=>{
    return a*b;
});

memoisedMultiply(2,3);
memoisedMultiply(2,3);
memoisedMultiply(1,3);
memoisedMultiply(4,3);
memoisedMultiply(5,3);