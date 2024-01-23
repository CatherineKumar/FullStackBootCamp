// Get references to HTML elements
const clubList = document.getElementById('club-list');
const searchInput = document.getElementById('search');
const clubDetailsContainer = document.getElementById('main');

// Attach an input event listener for the search input
searchInput.addEventListener('input', handleSearchInput);

// Initialize football club data and display all clubs
let clubData = footballClubs; 
displayClubs(footballClubs);


// Display football clubs in the club list
function displayClubs(clubs) {
    // Generate HTML for club cards and set it in the clubList element
    const clubCardsHTML = clubs.map(createClubCardHTML).join('');
    clubList.innerHTML = clubCardsHTML;
}

// Create HTML for a football club card
function createClubCardHTML(club) {
    return `
        <div class="club-card" onclick="handleClubClick(this);"><!-- Add onclick event -->
            <h2>${club.name}</h2>
            <img src="${club.image}" alt="${club.name} Image" style="width:100%; height:20vh;">
            <p><b>League: </b>${club.league}</p>
            <p><b>City: </b>${club.city}</p>
            <button onclick="viewClubPlayers('${club.name}'); event.stopPropagation();" style="width:100%;">View Players</button>
        </div>
    `;
}

// Handle clicking on a football club card
function handleClubClick(element) {
    // Write your code here for task1
    const clickedClubCard = element;
    if (clickedClubCard) {
        const clickedClubName = clickedClubCard.querySelector('h2').textContent;
        const selectedClub = clubData.find(club => club.name === clickedClubName);

        if (selectedClub) {
            displayClubDetails(selectedClub);
        }
    }
}

// Display football club details
function displayClubDetails(club) {
   // Write your code here for task2
   const clubDetailsHTML = `
   <button onclick="window.location.reload();">Back</button>
   <h2>${club.name}</h2>
   <img src="${club.image}">
   <p>League: ${club.league}</p>
   <p>City: ${club.city}</p>
   <p>Stadium: ${club.stadium}</p>
   <p>Description: ${club.description}</p>`;

    clubDetailsContainer.innerHTML = clubDetailsHTML;
}

// Function to view club players
function viewClubPlayers(clubName) {
   let playersHTML = ""
   // Write your code here for task3
   let club = clubData.find(o => o.name === clubName);

   playersHTML = `
   <button onclick="window.location.reload();">Back</button>
   <h2>${club.name}</h2>
   <img src="${club.image}">
   <h2>Players</h2>
   `
   for (p of club.players) {
    playersHTML += `<p>${p.name} -  ${p.position}, No. ${p.number}, goals: ${p.goals}, assists: ${p.assists}</p>`;
  }
  clubDetailsContainer.innerHTML = playersHTML;
}

// Handle search input and filter clubs
function handleSearchInput() {
    // Write your code here for task4
}