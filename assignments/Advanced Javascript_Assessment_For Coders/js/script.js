// Function to handle user registration
function register() {
  // Write your code for task1 here
  // Use fetchRegisterPageData() function to fetch values
  
}

// Fetch form data from the register.html page
function fetchRegisterPageData() {
  // Fetch form values
  const fullname = document.getElementById("fullname").value;
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const contact = document.getElementById("contact").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  return { fullname, username, email, contact, password, confirmPassword }
}

// Function to handle user login
function signIn() {
  // Write your code for task2 here
  // Use fetchSignInPageData() function to fetch values
  
}

// Function to fetch user data from the signin.html page
function fetchSignInPageData() {
  // Fetch data from the signin form 
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const messageElement = document.getElementById("message");

  return { username, password, messageElement };
}

// Function to load content on the index.html page
function loadContent() {
  // Fetch the login info from the session storage
  const userLogin = sessionStorage.getItem("login");

  // Check whether the login status is true
  if (userLogin) {
    fetchAndLoadData();
  }
  else {
    // If login status is false, redirect to signin.html page
    loadSignInPage();
  }

}

// Fetch the URLs from the external API
function fetchURLs() {
  const cuisineUrl = "https://foodorder-api-elti.onrender.com/v1/cuisines";
  const categoryUrl = "https://foodorder-api-elti.onrender.com/v1/categories";
  const restaurantUrl = "https://foodorder-api-elti.onrender.com/v1/restaurants";

  return { cuisineUrl, categoryUrl, restaurantUrl }
}

// Get the list HTML elements to display cuisines, categories and restaurants
function loadListElements() {
  const cuisineList = document.getElementById("cuisine-list");
  const categoryList = document.getElementById("category-list");
  const restaurantList = document.getElementById("restaurant-list");

  return { cuisineList, categoryList, restaurantList }
}

// Fetch the data from the URLs
function fetchAndLoadData() {
  const { cuisineUrl, categoryUrl, restaurantUrl } = fetchURLs()

  // Fetch the list elements from index.html which will store cuisines, categories and restaurants data
  const { cuisineList, categoryList, restaurantList } = loadListElements()

  // Call the fetchData function to fetch the data from the above-mentioned endpoints
  fetchData(cuisineUrl, cuisineList);
  fetchData(categoryUrl, categoryList);
  fetchData(restaurantUrl, restaurantList);
}

// Load the signin.html page
function loadSignInPage() {
  window.location.href = "../html/signin.html";
}


// Function to fetch data from an external URL endpoint
async function fetchData(url, listElement) {
  // Write your code for task3 here
    
   
  }


// Display data which is fetched from an external API
function displayData(data, listElement) {
  // Write your code for task4 here
  
  
}

// Logging out when clicked on the logout button
function logout(){
  // Write your code for task5 here
    
}
