const montlyIncome = 35000;

const monthlyExpense = [6500, 2000, 500, 200, 467, 890, 1230, 654, 10000];

const itemPrice = 5000;

const categoryItem = "Luxury";

const totalExpense = monthlyExpense.reduce((sum, exp) => {
  return sum + exp;
}, 0);

function checkCategory(category) {
  switch (category) {
    case "Essential":
      return 1;
    case "Fun":
      return 2;
    case "Luxury":
      return 3;
    default:
      return 2;
  }
}

function canAfford(income, totalExpense, itemPrice) {
  const remainingMoney = income - totalExpense;

  if (itemPrice <= remainingMoney * 0.3) {
    return 3; // Very Safe
  } else if (itemPrice <= remainingMoney * 0.5) {
    return 2; // Manageable
  } else if (itemPrice <= remainingMoney) {
    return 1; // Risky
  } else {
    return 0; // Cannot afford
  }
}

const afford = canAfford(montlyIncome, totalExpense, itemPrice);

const need = checkCategory(categoryItem);


function printRes(afford,need){
if (afford === 0) {
  console.log("❌ You cannot afford this item.");
} else if (need === 3 && afford < 3) {
  console.log("⚠️ Luxury purchase is too risky.");
} else if (need === 2 && afford < 2) {
  console.log("Fun Item is too risky.");
} else {
  console.log("✅ You can afford this item.");
}
}

printRes(afford,need);