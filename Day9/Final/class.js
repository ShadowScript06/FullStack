// “Digital Wallet Management System”

class User {
  #balance;
  constructor(name, email, balance) {
    User.validateEmail(email);
    this.name = name;
    this.email = email;

    this.setBalance(balance);
  }

  static validateEmail(email) {
    if (typeof email !== "string" || !email.includes("@")) {
      throw new Error("Invalid email address");
    }
  }

  setBalance(amount) {
    this.#balance = amount;
  }
  getBalance() {
    return this.#balance;
  }

  deposit(amount) {
    const currbalance = this.getBalance();

    this.setBalance(currbalance + amount);

    console.log(`Amount of ${amount} is Deposited Succesfully.`);
  }

  withdraw(amount) {
    const currbalance = this.getBalance();

    if (currbalance >= amount) {
      this.setBalance(currbalance - amount);

      console.log(`Amount of ${amount} is Withdrawn Succesfully.`);
    } else {
      console.log("Insufficient balance.");
    }
  }
}

class PremiumUser extends User {
  constructor(name, email, balance) {
    super(name, email, balance);
  }

  withdraw(amount) {
    super.withdraw(amount);

    const cashback = amount * 0.05;
    this.deposit(cashback); // ✅ reuse behavior

    console.log(`Cashback received: ${cashback}`);
  }
}

class MerchantUser extends User {
  constructor(name, email, balance) {
    super(name, email, balance);
  }

  receivePayment(amount) {
    const currbalance = super.getBalance();

    super.setBalance(amount + currbalance);

    console.log(`Payment Recieved: ${amount}`);
  }
}

const u1 = new User("Ravi", "ravi@mail.com", 1000);
u1.deposit(500);

const p1 = new PremiumUser("Amit", "amit@mail.com", 2000);
p1.withdraw(1000); // cashback applied

const m1 = new MerchantUser("Store", "store@mail.com", 0);
m1.receivePayment(3000);
