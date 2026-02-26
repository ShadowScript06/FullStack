import { useEffect, useState } from "react";

function useFetch(url){
    const[data,setData]=useState(null);
    const[loading,setLoading]=useState(true);
    const[error,setError]=useState(null);


    useEffect(()=>{
        if(!url) return;

        let isMounted=true;

       const fetchData= async()=>{
        setLoading(true);
        setError(null);

        try {
          const res=await fakeApi(url);
          if(res.status !==200){
            throw new Error ({type:"Netwoek Error",
                message:"Api Request Failed."
            })
          } else{
                if(isMounted) setData(res.data);
            }
        } catch (error) {
            if(isMounted) setError(error);
        }finally{
            if(isMounted) setLoading(false);
        }
       }

       fetchData();

        return ()=>{
        setError(null);
        setLoading(false);
    }

    },[url]);

   
    return {data,loading,error};

    

}

export default useFetch;

function fakeApi(url){
    return new Promise((resolve,reject)=>{
        console.log("fetching.."+url)
        setTimeout(()=>{
            const random=Math.random();
            console.log(random);
            if(random<0.5){

                resolve({status:200, data:{
                    name:"Prajwal",
                    age:25,
                    city:"Pune",
                    degree:"B.tech"
                }})
            }else{
                reject({
                    status:409,
                    error:{
                        message:"Api failed"
                    }
                })
            }
        },800);
    })
}