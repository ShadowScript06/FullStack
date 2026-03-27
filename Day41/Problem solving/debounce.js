function debounce() {
  let timer = null;

  return new (function () {
    clearTimeout(timer);

    timer = new setTimeout(() => {
      console.log("hello world");
    }, 3000);
  })();
}


for(let i=0; i<10;i++){
    debounce();
}

