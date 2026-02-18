const rawExpenses =[
  { "title": " Swiggy ", "amount": "420", "category": "food" },
  { "title": " Uber ", "amount": "155", "category": "travel" },
  { "title": " DMart ", "amount": "980", "category": "essentials" },
  { "title": " Netflix ", "amount": "699", "category": "fun" },
  { "title": " Zomato ", "amount": "310", "category": "food" },

  { "title": " Pizza Hut ", "amount": "540", "category": "food" },
  { "title": " Ola ", "amount": "220", "category": "travel" },
  { "title": " Grocery Store ", "amount": "1340", "category": "essentials" },
  { "title": " PVR ", "amount": "450", "category": "fun" },
  { "title": " Cafe Coffee Day ", "amount": "260", "category": "food" },

  { "title": " IRCTC ", "amount": "860", "category": "travel" },
  { "title": " Medical Store ", "amount": "390", "category": "essentials" },
  { "title": " Amazon Prime ", "amount": "1499", "category": "fun" },
  { "title": " Dominos ", "amount": "375", "category": "food" },
  { "title": " Metro ", "amount": "120", "category": "travel" },

  { "title": " Reliance Smart ", "amount": "1780", "category": "essentials" },
  { "title": " Inox ", "amount": "520", "category": "fun" },
  { "title": " Burger King ", "amount": "295", "category": "food" },
  { "title": " RedBus ", "amount": "640", "category": "travel" },
  { "title": " Electricity Bill ", "amount": "2100", "category": "essentials" },

  { "title": " Game Zone ", "amount": "330", "category": "fun" },
  { "title": " KFC ", "amount": "410", "category": "food" },
  { "title": " Auto Fare ", "amount": "95", "category": "travel" },
  { "title": " Vegetable Market ", "amount": "560", "category": "essentials" },
  { "title": " Movie Snacks ", "amount": "190", "category": "fun" },

  { "title": " Biryani House ", "amount": "650", "category": "food" },
  { "title": " Train Ticket ", "amount": "780", "category": "travel" },
  { "title": " Water Bill ", "amount": "430", "category": "essentials" },
  { "title": " Bowling ", "amount": "720", "category": "fun" },
  { "title": " Street Food ", "amount": "150", "category": "food" },

  { "title": " Flight Booking ", "amount": "4850", "category": "travel" },
  { "title": " किराना Store ", "amount": "890", "category": "essentials" },
  { "title": " Concert ", "amount": "2500", "category": "fun" },
  { "title": " Sandwich Shop ", "amount": "210", "category": "food" },
  { "title": " Cab Ride ", "amount": "175", "category": "travel" },

  { "title": " Milk Subscription ", "amount": "300", "category": "essentials" },
  { "title": " Gaming ", "amount": "999", "category": "fun" },
  { "title": " Thali Restaurant ", "amount": "340", "category": "food" },
  { "title": " Bike Fuel ", "amount": "620", "category": "travel" },
  { "title": " Household Items ", "amount": "1450", "category": "essentials" },

  { "title": " Streaming Subscription ", "amount": "799", "category": "fun" },
  { "title": " Chinese Takeaway ", "amount": "480", "category": "food" },
  { "title": " Parking ", "amount": "60", "category": "travel" },
  { "title": " Gas Cylinder ", "amount": "1100", "category": "essentials" },
  { "title": " Arcade ", "amount": "350", "category": "fun" },

  { "title": " Ice Cream ", "amount": "140", "category": "food" },
  { "title": " Local Bus ", "amount": "40", "category": "travel" },
  { "title": " Cleaning Supplies ", "amount": "670", "category": "essentials" },
  { "title": " OTT Rental ", "amount": "199", "category": "fun" },
  { "title": " Fine Dine ", "amount": "1850", "category": "food" },

  { "title": " Highway Toll ", "amount": "230", "category": "travel" },
  { "title": " Fruits Market ", "amount": "320", "category": "essentials" },
  { "title": " Standup Show ", "amount": "899", "category": "fun" },
  { "title": " Breakfast Cafe ", "amount": "275", "category": "food" },
  { "title": " Airport Cab ", "amount": "540", "category": "travel" },

  { "title": " Stationery ", "amount": "410", "category": "essentials" },
  { "title": " Theme Park ", "amount": "2200", "category": "fun" },
  { "title": " Wraps & Rolls ", "amount": "230", "category": "food" },
  { "title": " Ferry Ride ", "amount": "300", "category": "travel" },
  { "title": " Laundry ", "amount": "520", "category": "essentials" }
]

// Data sanitisation

const Sanitizeddata = rawExpenses.map((expense) => {
  return {
    ...expense,
    title: expense.title.trim().toLowerCase(),
    amount: Number(expense.amount),
  };
});

const totalSpent = Sanitizeddata.reduce((total, expense) => {
  return total + expense.amount;
}, 0);



const categoryBreakdown = Sanitizeddata.reduce((acc, data) => {
  acc[data.category] = (acc[data.category] || 0) + data.amount;
  return acc;
}, {});


let highestExpense=0;
Sanitizeddata.forEach((data)=>{
    if(data.amount>=highestExpense){
        highestExpense=data.amount;
    }
});

const averageSpend=totalSpent/Sanitizeddata.length;

console.log("Your Expense Details:- ")
console.log(`Total spend: ${totalSpent}`);
console.log(`CategoryBreakdown: ${JSON.stringify(categoryBreakdown)}`);

console.log(`HighestExpense: ${highestExpense}`);
console.log(`Average Spend: ${averageSpend}`);