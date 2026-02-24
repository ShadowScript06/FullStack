// Encapsulation

class BankAccount {
  #balance;
  #transaction;

  constructor(balance) {
    if (balance < 0) {
      throw new Error("Invalid Balance");
    }

    this.balance = balance;

    this.#transaction = [];
  }

  deposit(amount) {
    if (amount <= 0) {
      throw new Error("Invalid Withrawl amount");
    }

    this.balance += amount;

    this.#transaction.push({
      type: "CR",
      amount,
    });

    console.log(`Amount of ${amount} is Deposited Succesfully`);
  }

  withdraw(amount) {
    if (amount <= 0) {
      throw new Error("Invalid Withdrawl Amount");
    }

    if (amount > this.#balance) {
      console.log("Insufficient Balance");
      return;
    }

    this.#balance -= amount;

    this.#transaction.push({
      type: "DB",
      amount,
    });
  }

  getBalance() {
    return this.#balance;
  }

  getStatment() {
    return [...this.#transaction];
  }
}

// abstraction Notification System
class Notification {
  send() {
    throw new Error("Method 'send()' must  be implemented");
  }
}

class EmailNotification extends Notification {
  send(message) {
    console.log(`Sending Email: ${message}`);
  }
}

class SMSNotification extends Notification {
  send(message) {
    console.log(`Sending SMS: ${message}`);
  }
}

class PushNotification extends Notification {
  send(message) {
    console.log(`Sending PUSH: ${message}`);
  }
}

// service layer
class NotificationService {
  static notify(notificationType, message) {
    notificationType.send(message);
  }
}
// aa; aobe is hidden logic
// user only sees this

const email = new EmailNotification();

NotificationService.notify(email, "Hello user");

// Inheritance

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  calculateBonus() {
    return this.salary * 0.05; // default 5%
  }

  getDetails() {
    return `${this.name} earns ${this.salary}`;
  }
}

class Manager extends Employee {
  calculateBonus() {
    return this.salary * 0.2;
  }
}

class Developer extends Employee {
  calculateBonus() {
    return this.salary * 0.1;
  }
}

class Intern extends Employee {
  calculateBonus() {
    return this.salary * 0.05;
  }
}

const manager = new Manager("Alice", 100000);
console.log(manager.calculateBonus()); // 20000

// Polymorphism
class Payment {
  pay(amount) {
    throw new error("pay() must be implemented");
  }
}

class UPI extends Payment {
    pay(amount){
        console.log(`Processing UPI payment of rs ${amount}`);
    }
}

class CreditCard extends Payment {
  pay(amount) {
    console.log(`Processing Credit Card payment of ₹${amount}`);
  }
}

class Crypto extends Payment {
  pay(amount) {
    console.log(`Processing Crypto payment of ₹${amount}`);
  }
}

function processPayment(paymentMethod,amount){
    paymentMethod.pay(amount);
}

const crypto=new Crypto();

processPayment(crypto,500000);

// Combined
class Order{
    #amount;

    constructor(amount){
        if(amount<=0){
            throw new Error("Invalid amount");
        }

        this.#amount=amount;
    }

    getAmount(){
        return this.#amount;
    }

    calculateTotal(){
        return this.#amount;
    }
}

class DeliveryOrder extends Order{
    constructor(amount,deliveryfee){
        super(amount);

        this.deliveryfee=deliveryfee;
    }

    calculateTotal(){
        return this.getAmount()+this.deliveryfee;
    }
}

class DineInOrder extends Order{
    calculateTotal(){
        return this.getAmount()*1.05;
    }
}

function processOrder(order){
    console.log("Total: "+order.calculateTotal());
}

processOrder(new DeliveryOrder(500,50));

processOrder(new DineInOrder(500));