// global states;
let matchState = [];
let searchTimer;
const matchContainer = document.querySelector(".match-container");

// DropDown logic
const hamburger = document.querySelector("#hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

const searchToggle = document.querySelector("#search-toggle");
const searchContainer = document.querySelector(".search-container");

hamburger.addEventListener("click", (e) => {
  e.preventDefault();
  mobileMenu.classList.toggle("active");
  searchContainer.classList.remove("active");
});

searchToggle.addEventListener("click", (e) => {
  searchContainer.classList.toggle("active");
  mobileMenu.classList.remove("active");
});

// genrate a card;
function generateCard(match) {
  // crated main matchcard
  const matchCard = document.createElement("div");

  matchCard.className = "match-card";

  // created a header component
  const matchHeader = document.createElement("div");

  matchHeader.className = "match-header";

  const headerSpan1 = document.createElement("span");
  headerSpan1.className = "match-type";
  headerSpan1.textContent = match.matchType;

  const headerSpan2 = document.createElement("span");
  headerSpan2.className = "match-status";
  headerSpan2.textContent = match.status;

  matchHeader.appendChild(headerSpan1);
  matchHeader.appendChild(headerSpan2);

  // added to main
  matchCard.appendChild(matchHeader);

  // created a match-body

  const matchBody = document.createElement("div");

  matchBody.className = "match-body";
  // creating a team 1
  const team1 = document.createElement("div");
  team1.className = "team";

  const team1Left = document.createElement("div");
  team1Left.className = "team-left";

  const team1Img = document.createElement("img");

  team1Img.src = match.teamInfo[0].img;

  team1Img.alt = "team logo";

  const team1Name = document.createElement("span");
  team1Name.className = "team-name";
  team1Name.textContent = match.teamInfo[0].name;

  team1Left.appendChild(team1Img);
  team1Left.appendChild(team1Name);

  const team1Score = document.createElement("span");
  team1Score.className = "team-score";
  team1Score.textContent = `${match.score[0]?.r ?? 0}/${match.score[0]?.w ?? 0} (${match.score[0]?.o ?? 0})`;

  team1.appendChild(team1Left);
  team1.appendChild(team1Score);

  // adding to match body
  matchBody.appendChild(team1);

  const team2 = document.createElement("div");
  team2.className = "team";

  const team2Left = document.createElement("div");
  team2Left.className = "team-left";

  const team2Img = document.createElement("img");

  team2Img.src = match.teamInfo[1]?.img;

  team2Img.alt = "team logo";

  const team2Name = document.createElement("span");
  team2Name.className = "team-name";
  team2Name.textContent = match.teamInfo[1]?.name;

  team2Left.appendChild(team2Img);
  team2Left.appendChild(team2Name);

  const team2Score = document.createElement("span");
  team2Score.className = "team-score";
  team2Score.textContent = `${match.score[1]?.r ?? 0}/${match.score[1]?.w ?? 0} (${match.score[1]?.o ?? 0})`;

  team2.appendChild(team2Left);
  team2.appendChild(team2Score);

  // adding to match body
  matchBody.appendChild(team2);

  matchCard.appendChild(matchBody);

  // creating footer

  const matchFooter = document.createElement("div");

  matchFooter.className = "match-footer";

  const p = document.createElement("p");

  p.textContent = match.status;

  matchFooter.appendChild(p);

  matchCard.appendChild(matchFooter);

  return matchCard;
}

// Fetching Data from api
async function getData() {
  const response = await fetch(
    "https://api.cricapi.com/v1/currentMatches?apikey=YOUR_KEY&offset=0",
  );

  const data = await response.json();

  matchState = data.status === "success" ? data.data : [];
}

// debounced search implementation
function debouncedSearch(teamName) {
  clearTimeout(searchTimer);

  searchTimer = setTimeout(() => {
    const filtered = matchState.filter((match) =>
      match.name.toLowerCase().includes(teamName.toLowerCase()),
    );

    const container = document.querySelector(".match-container");
    container.replaceChildren();

    if (filtered.length === 0) {
      const h1 = document.createElement("h1");
      h1.textContent = "No result found.";
      container.appendChild(h1);
      return;
    } else {
      const fragment = document.createDocumentFragment();
      filtered.forEach((match) => {
        const card = generateCard(match);
        fragment.appendChild(card);
      });

      matchContainer.appendChild(fragment);
    }
  }, 1000);
}

// Event listers for search
const mobileSearch = document.querySelector(".search-btn");
const mobileInput = document.querySelector(".search-input");
mobileSearch.addEventListener("click", () => {
  const teamName = mobileInput.value.trim();
  debouncedSearch(teamName);
});

const desktopSearch = document.querySelector(".search-icon");
const desktopInput = document.querySelector(".desktop-search-input");
desktopSearch.addEventListener("click", () => {
  const teamName = desktopInput.value.trim();
  debouncedSearch(teamName);
});

// Loading searches on dom
async function showMatches() {
  await getData();
  if (matchState.length <= 0) {
    const h1 = document.createElement("h1");
    h1.textContent = "Internal Server error, please try again.";
    matchContainer.innerHTML = "";
    matchContainer.appendChild(h1);
    return;
  }

  const internationalTeams = [
    "India",
    "Australia",
    "England",
    "Pakistan",
    "South Africa",
    "West Indies",
    "New Zealand",
    "Sri Lanka",
    "Bangladesh",
    "Afghanistan",
    "Zimbabwe",
    "Ireland",
    "Netherlands",
    "Scotland",
    "Namibia",
  ];

  const internationalMatches = matchState.filter((match) => {
    const [team1, team2] = match.teams;

    return (
      internationalTeams.includes(team1) && internationalTeams.includes(team2)
    );
  });

  if (internationalMatches.length <= 0) {
    const h1 = document.createElement("h1");
    h1.textContent =
      "No international matches, please search for local domestics";
    matchContainer.appendChild(h1);
  }

  const fragment = document.createDocumentFragment();

  internationalMatches.forEach((match) => {
    const card = generateCard(match);

    fragment.appendChild(card);
  });
  matchContainer.replaceChildren();
  matchContainer.prepend(fragment);


}

// loading new data every half hour
document.addEventListener("DOMContentLoaded", async () => {
  await showMatches(); // run immediately

  async function refreshLoop() {
    await showMatches();
    setTimeout(refreshLoop, 1800000);
  }

  refreshLoop();
});
