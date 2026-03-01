🚀 GitHub DevScore – React + Redux Toolkit Project

A modern GitHub profile analyzer built with React, Redux Toolkit, and Reselect.
Users can search GitHub profiles, view detailed statistics, calculate a custom DevScore, and compare developers side-by-side.

This project demonstrates advanced React architecture, async state management, memoized selectors, and clean UI design.

📌 Why This Project?

Most React tutorials stop at basic state or simple API fetching.

This project was built to demonstrate:

Real-world async data handling

Scalable global state management

Derived state using memoized selectors

Clean loading & error UX

Multi-user comparison logic

Production-like project structure

The goal was to prove strong React fundamentals, not just syntax knowledge.

🧠 Problem It Solves

Developers often compare GitHub profiles manually by checking:

Followers

Public repositories

Stars across repos

This app:

Fetches user data instantly

Calculates a weighted “DevScore”

Allows side-by-side comparison

Handles API errors and loading states cleanly

🏗 Tech Stack

⚛ React (Functional Components + Hooks)

🧰 Redux Toolkit

🔁 Reselect (Memoized Selectors)

🌐 GitHub REST API

🎨 Modern Dark UI

⚡ Vite (Build Tool)

🧩 Features
🔍 Search Developer

Enter GitHub username

Fetches profile + repositories in parallel

Normalizes input

Handles 404 and API errors

📊 DevScore Calculation

Custom formula:

DevScore =
  (Followers × 2)
+ (Public Repos × 3)
+ (Total Repo Stars × 5)

Uses createSelector to memoize expensive calculations.

⚔ Compare Developers

Compare two GitHub users

See DevScore difference

Clear winner highlight

Avoids unnecessary re-fetching

🌙 Dark Themed UI

Centered animated loader

Error component with dynamic messages

Clean landing page

Responsive layout

🏛 Architecture Overview
1️⃣ State Structure
state = {
  user: {
    users: {
      [username]: {
        user,
        repos,
        loading,
        error
      }
    }
  }
}
Why this structure?

Supports multiple cached users

Prevents unnecessary API calls

Scales for comparison feature

2️⃣ Async Data Handling

Uses createAsyncThunk:

Fetch user + repos in parallel using Promise.all

Handles:

pending

fulfilled

rejected

Uses rejectWithValue for controlled error messages

3️⃣ Derived State (Reselect)

DevScore is computed using:

createSelector([selectUser, selectRepos], ...)

Why?

Avoid recalculating score on unrelated state updates

Performance optimization

Clean separation of data vs derived logic

🛠 Installation Guide
1️⃣ Clone Repository
git clone https://github.com/your-username/github-devscore.git
cd github-devscore
2️⃣ Install Dependencies
npm install
3️⃣ Add GitHub Token

Create a .env file:

VITE_GITHUB_TOKEN=your_github_personal_access_token

Why?

GitHub API has rate limits.
Using a token increases the request limit.

You can generate a token from:
GitHub → Settings → Developer Settings → Personal Access Tokens

No special permissions required (public data only).

4️⃣ Run Development Server
npm run dev
5️⃣ Build For Production
npm run build
🧪 Edge Cases Handled

Invalid username

GitHub API failure

No repositories

Empty input

Loading state flashing

Parallel request error handling

📁 Folder Structure
src/
 ├── components/
 │    ├── Loader.jsx
 │    ├── Error.jsx
 │    ├── ProfileCard.jsx
 │
 ├── features/
 │    └── userSlice.js
 │
 ├── selectors/
 │    └── selectDevScore.js
 │
 ├── pages/
 │    ├── Landing.jsx
 │    ├── Profile.jsx
 │    ├── Compare.jsx
 │
 ├── store.js
 └── main.jsx

This structure keeps:

UI separated from state logic

Async logic inside slices

Derived state inside selectors

⚙️ Key Concepts Demonstrated

Functional React components

Hooks (useState, useEffect)

Redux Toolkit architecture

Async thunk lifecycle handling

Memoized selectors

Conditional rendering

Dynamic routing

Error-first UI thinking

Environment variable handling

🚀 What This Project Proves

This project demonstrates:

✔ Ability to build scalable React applications
✔ Understanding of async data flow
✔ State normalization and caching
✔ Performance optimization via memoization
✔ Clean UI/UX handling
✔ Production-like folder structure

🔮 Possible Improvements

Persist state in localStorage

Add charts for visual comparison

Add animation using Framer Motion

Debounced search input

Unit testing (Jest + RTL)

Rate limit handling UI

Skeleton loaders instead of spinner

📸 Screenshots

(Add screenshots here after deployment)

🌍 Deployment

Recommended platforms:

Vercel

Netlify

👨‍💻 Author

Built as a React mastery proof project.

📜 License

MIT