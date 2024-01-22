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
   <p>Description: ${club.description}</p>`;
   // <p>Players: ${club.cast.join(', ')}</p>  
    clubDetailsContainer.innerHTML = clubDetailsHTML;
    
    /*
let data = [
  {
    "animal": "cat",
    "name": "Fluffy"
  },
  {
    "animal": "dog",
    "name": "Bowser"
  },
  {
    "animal": "cat",
    "name": "Felix"
  }
]
Now extract the names using .map:

let names = data.map(item => item.name)


let nameString = names.join(' ')    
     */
}

// Function to view club players
function viewClubPlayers(clubName) {
   // Write your code here for task3
}

// Handle search input and filter clubs
function handleSearchInput() {
    // Write your code here for task4
}