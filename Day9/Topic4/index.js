// Problem 1 

// Parent Class
class Vehicle {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }

  accelerate(amount) {
    this.speed += amount;
    console.log(`${this.brand} accelerated by ${amount} km/h. Current speed: ${this.speed}`);
  }

  brake(amount) {
    this.speed = Math.max(0, this.speed - amount);
    console.log(`${this.brand} slowed down by ${amount} km/h. Current speed: ${this.speed}`);
  }
}


// Child Class (Inheritance)
class Car extends Vehicle {
  constructor(brand, speed, fuel) {
    super(brand, speed); // call parent constructor
    this.fuel = fuel;
  }

  refuel(liters) {
    this.fuel += liters;
    console.log(`${this.brand} refueled ${liters}L. Current fuel: ${this.fuel}L`);
  }
}

const car = new Car("Toyota", 60, 10);

car.accelerate(20); // speed → 80
car.brake(30);      // speed → 50
car.refuel(15);     // fuel → 25


// Composition based
const canDrive=(state)=>({
    accelerate(amount){
       state.speed += amount;
        console.log(`${state.brand} accelerated by ${amount} km/h. Speed: ${state.speed}`);
    },

     brake(amount) {
    state.speed = Math.max(0, state.speed - amount);
    console.log(`${state.brand} slowed down by ${amount} km/h. Speed: ${state.speed}`);
  }
})

const canRefuel =(state)=>({
    refuel (liters){
       state.fuel += liters;
        console.log(`${state.brand} refueled ${liters}L. Fuel: ${state.fuel}L`);
    }
});


const createCar=(brand,speed,fuel)=>{
    const state={brand,speed,fuel};

    return {
        ...state,
        ...canDrive(state),
        ...canRefuel(state)
    }
}

const car1=createCar("Toyota",60,10);

car1.accelerate(20);

car1.brake(30);

car1.refuel(15);

