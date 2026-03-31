function debounce(fn, delay) {
  let timer=null;
   function debounced(...args) {
    const context = this;
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(context,args);
      timer=null;
    }, delay);
  };

  debounced.cancel=function(){
        if(timer){
            clearTimeout(timer);
            timer=null;
        }
    }

    return debounced;

}



function sayHello() {
  console.log("hello");
}

const debouncedHello = debounce(sayHello, 3000);


