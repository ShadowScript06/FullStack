function debounce(fn,delay){
    let timer=null;

    function debounced(...args){
        const context=this;

        clearTimeout(timer);

        timer=setTimeout(()=>{
            fn.apply(context,args)
            timer=null
        },delay)
    }

    debounced.cancel=function(){
        if(timer){
            clearTimeout(timer);
            timer=null
        }
    }

    return debounced;
}

let user={
    name:"prajwal",
    sayHello(){
        console.log(`hello ${this.name}`);
    }
}

const debouncedSayHello=debounce(user.sayHello.bind(user),1000);

const obj={
    name:"raj",
    sayHello:()=>{
        console.log(this.name)
    }
}

const name="deep";



