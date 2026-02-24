// problem 1
const obj={
    name:"Prajwal",
    greet: function(){
        function inner(){
            console.log(this.name);
        }

        inner();
    }
}

obj.greet();


// inner is called as normal function hence this is global or undefined

const obj2={
    name:"Prajwal",
    greet:function(){
        const inner=()=>{
            console.log(this.name);
        }

        inner();
    }
}

obj2.greet();

// arrow function does not have their own this that why it looks for parent this borrow which is greet function.

const car = {
  brand: "BMW",
  getBrand: function () {
    return this.brand;
  }
};

const brand = car.getBrand;
console.log(brand());


// brand is normal function hence its this is undefined or golabal

const user = {
  name: "Amit",
  greet() {
    setTimeout( ()=> {
      console.log(this.name);
    }, 1000);
  }
};

user.greet();

const logger = {
  prefix: "[INFO]",
  log(message) {
    console.log(this.prefix + message);
  }
};

setTimeout(()=>logger.log(" :hello"), 1000);

const obj3 = {
  name: "Prajwal",
  greet: () => {
    console.log(this.name);
  }
};

obj3.greet();


const obj4={
    name:"PrajwalObj4",
    greet:function(){
        setTimeout(()=>{
            console.log(this.name);
        });
    }
}

obj4.greet();