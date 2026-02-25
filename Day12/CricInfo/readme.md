🏏 International Cricket Live Matches

A responsive web application that fetches and displays live international cricket matches using the CricAPI.
Includes real-time updates, debounced search, and dynamic DOM rendering.

🚀 Features

✅ Fetches live match data from CricAPI

✅ Displays international matches only

✅ Debounced team search (500ms delay)

✅ Auto refresh every 30 minutes

✅ Mobile-friendly navigation

✅ Dynamic card generation

✅ Safe rendering with optional chaining (?.) and nullish coalescing (??)

🧠 Architecture Overview

The application follows a clean data pipeline:

API → matchState → getInternationalMatches() → renderMatches()

Search flow:

matchState
   ↓
getInternationalMatches()
   ↓
filter by team name
   ↓
renderMatches()
Key Principles Used

Separation of concerns

Single source of truth (matchState)

Reusable filtering function

Dedicated render function

Debounced search optimization

📂 Project Structure
.
├── index.html
├── style.css
├── script.js
└── README.md
🔌 API Used

CricAPI Current Matches Endpoint

https://api.cricapi.com/v1/currentMatches

You must replace:

YOUR_KEY

with your personal API key.

Example:

https://api.cricapi.com/v1/currentMatches?apikey=YOUR_API_KEY&offset=0
🛠 Core Functions
getData()

Fetches match data from API and stores it in global state.

getInternationalMatches(matches)

Filters only international vs international matches.

renderMatches(matches)

Handles all DOM rendering logic.

debouncedSearch(teamName)

Filters international matches based on user input with debounce optimization.

🔄 Auto Refresh

Matches automatically refresh every 30 minutes using a safe loop:

async function refreshLoop() {
  await showMatches();
  setTimeout(refreshLoop, 1800000);
}

refreshLoop();

Prevents overlapping API calls.

📱 Responsive Behavior

Hamburger menu toggles mobile navigation

Search bar works for both mobile and desktop

Mobile menu and search toggle auto-close each other

🧪 How to Run

Clone the repository:

git clone <your-repo-url>

Open index.html in your browser.

Add your CricAPI key in script.js.

⚡ Future Improvements

Loading skeleton animation

Live match highlight badge

Search on input instead of button click

Error state UI improvements

Modular ES6 structure

Dark mode toggle

📌 Tech Stack

HTML5

CSS3

Vanilla JavaScript (ES6+)

CricAPI

👨‍💻 Author

Built as a frontend practice project focused on:

State management

API integration

DOM optimization

Clean architecture principles