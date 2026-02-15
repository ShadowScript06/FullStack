# Taskie — Layout Engineering Decisions

## Why CSS Grid Was Used

CSS Grid was used for the **overall page layout** because the design requires controlling both rows and columns (a two-dimensional layout).
It allows cards to automatically rearrange across breakpoints without changing HTML, making the structure scalable and easier to maintain.

👉 Grid handles the **macro layout (page skeleton)**.

---

## Why Flexbox Was Used Inside Components

Inside each card (task boxes, stats items), alignment is only one-directional — stacking text vertically or spacing items horizontally.
Flexbox is simpler and more efficient for this type of internal alignment.

👉 Flexbox handles the **micro layout (component alignment)**.

---

## How Responsiveness Was Planned

A **mobile-first approach** was followed:

* Default layout = single column for small screens.
* At `768px`, content expands into multiple columns.
* At `1024px+`, desktop layout enables horizontal grouping and navigation.

This ensures progressive enhancement instead of rewriting styles for every device.

---

## What Broke Initially & How It Was Fixed

**1. `width: 100vw` caused horizontal overflow**
`100vw` includes scrollbar width, which shifted the layout.
✔ Fixed by using `width: 100%`.

**2. Tried using Grid for internal alignment**
This made components overly complex.
✔ Switched to Flexbox inside cards.

**3. Invalid Grid row syntax (`repeat(auto, 1fr)`)**
Browser ignored the rule.
✔ Replaced with `grid-auto-rows: auto`.

---

## Final Principle

> **Grid = Structure**
> **Flexbox = Alignment**

Using each tool for its intended purpose kept the layout predictable, responsive, and maintainable.
