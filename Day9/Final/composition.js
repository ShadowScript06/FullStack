// composition
// create base user
const createBaseUser = (name, email, balance = 0, role) => {
  const state = {
    name,
    email,
    balance,
    role,
    isfrozen: false,
    isSignedIn: false,
  };

  return state;
};

// handle sign in sign out
const canSignIn = (state) => ({
  signIn() {
    state.isSignedIn = true;
    console.log(`${state.name} is signed in as ${state.role}`);
  },
  signOut() {
    state.isSignedIn = false;
    console.log(`${state.name} Signed out succesfully.`);
  },

  checkSession() {
    if (!state.isSignedIn) {
      throw new Error("Session expired. Please sign in.");
    }
  },
});

// handle transaction
const canTransact = (state) => ({
  deposit(amount) {
     if (state.isFrozen) throw new Error("Account frozen");
    if (!state.isSignedIn) throw new Error("Please sign in");
    if (amount <= 0) throw new Error("Invalid amount");
    state.balance += amount;
    console.log(`${state.name} deposited ${amount}`);
  },

  withdraw(amount) {
     if (state.isFrozen) throw new Error("Account frozen");
    if (!state.isSignedIn) throw new Error("Please sign in");
    if (amount > state.balance) {
      console.log("Insufficient balance");
      return;
    }
    state.balance -= amount;
    console.log(`${state.name} withdrew ${amount}`);
  },

  getBalance() {
    return state.balance;
  },
});

// handle receive paymets
const canReceivePayments = (state) => ({
    
  receivePayment(amount) {
    state.balance += amount;
    console.log(`${state.name} received payment ${amount}`);
  },
});

// handle managing users
const canManageUsers = () => ({
  freeze(user) {
    user.isFrozen = true;
    console.log(`${user.name} account frozen`);
  },

  unfreeze(user) {
    user.isFrozen = false;
    console.log(`${user.name} account unfrozen`);
  },
});

// handle checking frozine
const withFreezeProtection = (state) => ({
  checkFrozen() {
    if (state.isFrozen) {
      throw new Error("Account is frozen");
    }
  },
});

const createCustomer = (name, email, balance) => {
  const state = createBaseUser(name, email, balance, "Customer");

  return {
    ...canSignIn(state),
    ...withFreezeProtection(state),
    ...canTransact(state),
  };
};

const createMerchant = (name, email, balance) => {
  const state = createBaseUser(name, email, balance, "Merchant");

  return {
    ...canTransact(state),
    ...canReceivePayments(state),
    ...canSignIn(state),
  };
};

const createAdmin = (name, email) => {
  const state = createBaseUser(name, email, 0, "Admin");

  return {

    ...canManageUsers(state),
    ...canSignIn(state),
  };
};

const ravi = createCustomer("Ravi", "ravi@mail.com", 1000);

try {
    ravi.deposit(500);
} catch (error) {
    console.log(error.message)
}

ravi.signIn();
ravi.withdraw(200);

const store = createMerchant("DMart", "store@mail.com", 0);
store.signIn();
store.receivePayment(3000);
store.withdraw(500);

const admin = createAdmin("SuperAdmin", "admin@mail.com");
admin.signIn();
admin.freeze(ravi);

try {
  ravi.deposit(500);  
} catch (error) {
    console.log(error.message);
}


ravi.signOut();
store.signOut();

admin.unfreeze(ravi);
admin.signOut();
