# 💰 Should I Buy This? (JavaScript Decision Checker)

A small JavaScript program that helps decide whether a purchase is affordable based on income, expenses, and item category.

---

## 🎯 Goal

Practice core JS concepts using a real-life scenario:

* `if-else` → decision making
* `switch` → category handling
* `reduce()` → higher-order function
* Functions → code organization
* Pure function → predictable calculations

---

## 📥 Inputs

* `monthlyIncome` → your income
* `monthlyExpense` → array of expenses
* `itemPrice` → cost of item
* `categoryItem` → Essential / Fun / Luxury

---

## ⚙️ Logic

1. Calculate total expenses using `reduce()`.
2. Check how important/risky the item is using `switch`.
3. Use a pure function to see if you can afford it.
4. Print final decision using `if-else`.

---

## ▶️ Run the Project

```bash
node app.js
```

---

## ✅ Example Output

```
✅ You can afford this item.
```

or

```
⚠️ Luxury purchase is too risky.
```

---

## 📁 Structure

```
should-i-buy/
 └── app.js
```

---

## 🧠 What This Shows

This project demonstrates real use of JavaScript fundamentals to solve a practical decision problem instead of just building a CRUD demo.
